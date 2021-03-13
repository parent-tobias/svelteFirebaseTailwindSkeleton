<script lang='ts'>
  import {createEventDispatcher} from "svelte";
  import { onMount } from 'svelte';
  import { scale } from 'svelte/transition';

  import { auth } from '../stores/store';

  const { user, logout } = auth;

  let d = createEventDispatcher();

  let isOpen = false; // menu state
  let menu = null; // menu wrapper DOM reference

  onMount(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !menu.contains(event.target)) {
        isOpen = false;
      }
    };

    const handleEscape = (event) => {
      if (isOpen && event.key === 'Escape') {
        isOpen = false;
      }
    };

    // add events when element is added to the DOM
    document.addEventListener('click', handleOutsideClick, false);
    document.addEventListener('keyup', handleEscape, false);

    // remove events when element is removed from the DOM
    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
      document.removeEventListener('keyup', handleEscape, false);
    };
  });

console.log($user);
</script>

<div class="relative" bind:this={menu}>
  <button on:click={()=>(isOpen = !isOpen)} type="button" aria-haspopup="true" aria-expanded={isOpen ? 'true' : 'false'} class="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100">
    <span class="sr-only">User menu</span>
    <img class="w-10 h-10 rounded-full" src={$user.picture} alt={$user.name || $user.email}>
  </button>
  {#if isOpen}
  <!-- User dropdown menu -->
  <div
    in:scale={{ duration: 100, start: 0.95 }}
    out:scale={{ duration: 75, start: 0.95 }}
    class="absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none user-menu" tabindex="-1" role="menu" aria-orientation="vertical" aria-label="User menu">
      <!-- This will be where the user menu can be injected? I'm not sure if it should be forced, or what.-->
      <a href="/profile" role="menuitem" class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
        Your Profile
      </a>
      <a href="/settings" role="menuitem" class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
        Settings
      </a>
      <a href="#!" on:click|preventDefault={logout} role="menuitem" class="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary">
        Logout
      </a>
      </div>
  {/if}
</div>

<!-- x-transition:enter="transition-all transform ease-out" 
x-transition:enter-start="translate-y-1/2 opacity-0" 
x-transition:enter-end="translate-y-0 opacity-100" 
x-transition:leave="transition-all transform ease-in" 
x-transition:leave-start="translate-y-0 opacity-100" 
x-transition:leave-end="translate-y-1/2 opacity-0" 
@click.away="open = false" 
@keydown.escape="open = false"  -->