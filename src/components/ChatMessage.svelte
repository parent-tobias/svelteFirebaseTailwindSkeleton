<script lang="ts">
  import md5 from "md5";

  export let photoURL: string;
  export let createdAt: number;
  export let email: string;
  export let message: string;
  export let uid: string;
  export let self = false;
</script>


<div title={`${email} (${uid}) at ${new Date(createdAt)}`} 
     class='flex mb-2 items-center {(self && 'flex-row-reverse')}'> 
  <img src={photoURL || `https://www.gravatar.com/avatar/${md5(email)}?d=mp&s=32&r=g`} 
       class='rounded-full w-8 h-8' alt="avatar">
  <span class="{self ? "bg-darker dark:bg-light text-light dark:text-darker" : "bg-primary-darker text-primary-lighter dark:bg-primary-lighter dark:text-primary-darker"} w3-padding w3-round-xxlarge" style="margin: 0 6px">{message}</span>
</div>