<script lang='ts'>
  import { fade } from 'svelte/transition';
  export let classList='flex justify-center items-center';
  export let visible=false;
</script>

<div class:hidden={!visible } class='{classList} opacity-50 fixed inset-0 z-10 bg-primary-darker' 
     transition:fade={{duration: 500}} 
     aria-hidden={!visible}
     on:click={()=>visible=false}>
  <div on:click|stopPropagation={()=>{}}>
    <slot name='contents'></slot>
  </div> 

</div>
