<script lang="ts">
  import { firestore} from "../services/firebase"
  import { onDestroy } from "svelte";
  import ChatMessage from "../components/ChatMessage.svelte";
  import Filter from "bad-words";
  import { auth  } from '../stores/store';
  import Card from '../UIComponents/Card.svelte';

  interface User {
      name: string, email: string, picture: string, uid: string
  }
  interface Message extends User {
      message: string, createdAt: number
  }


//   let user: User | null;
const { user,logout } = auth;
let messages: Message[] = [];
  let cooldown = false;

  function messageSubmit(e: KeyboardEvent & {
      currentTarget: EventTarget & HTMLInputElement;
  }) {
      if (e.key.toLowerCase() !== "enter") return;
      if (cooldown) return;
      const message = (new Filter()).clean(((document.getElementById("message-input") as HTMLInputElement).value || "").trim());
      if (!message) return;
      (document.getElementById("message-input") as HTMLInputElement).value = ""
      cooldown = true;
      setTimeout(() => cooldown = false, 3000)
      firestore.collection("messages").add({
          message,
          email: $user.email,
          picture: $user.picture,
          uid: $user.id,
          createdAt: Date.now()
      })
  }


  const unsubscribe = firestore.collection("messages").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(change => {
            if (change.type === "added") {
                messages = [...messages, change.doc.data() as Message]
                setTimeout(() => {if (document.getElementById("scroll-to")) document.getElementById("scroll-to").scrollIntoView({behavior: "smooth"});}, 500)
            }
        })
    })

    // calling the unsubscribe() method when the component gets destroyed to prevent listening to changes when not needed. Also, bandwith gets saved.
    onDestroy(unsubscribe);

</script>


<Card classList='relative col-span-9 lg:col-span-6 h-96' title="Chat-room">
    <div class='w-full' slot='contents'>
        <div class="overflow-y-auto m-0">
          {#if messages.length > 0}
            {#each messages as m}
              <ChatMessage {...m} self={$user.id === m.uid} />
            {/each}
          {:else}
            <p class="w3-center w3-text-gray">Looks like nobody's sent a message. Be the first!</p>
          {/if}
        <!-- Dummy element used to scroll chat -->
        <br id="scroll-to">
        </div>
        <input on:keydown={messageSubmit} type="text" placeholder={cooldown ? "3 second cooldown" : "Enter message and press enter"} class="absolute bottom-0 left-2 w-full p-2 -m-2 rounded-md rounded-t-none {(cooldown && "bg-red-200")}" id="message-input">
      </div>
</Card>
