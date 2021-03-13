<script lang='ts'>
  let isOpen = false;
  const open = () => isOpen=true;
  const close = () => isOpen=false;
  const toggle = () => isOpen=!isOpen;
</script>


<slot name='trigger' {open}>
  <!-- fallback trigger -->
  <button on:click={open} >Open modal</button>
</slot>
{#if isOpen}
<div class='modal'>
  <div class='backdrop' on:click|self={close}>
    <div class='content-wrapper'>
      <slot name='header'>
        <div><h2>Your modal header here</h2></div>
      </slot>
      <div class='content'>
        <slot name='content'></slot>
      </div>
      <slot name='footer' {close}>
        <div>
          <h3>Your modal footer here</h3>
          <button on:click={close}>Close</button>
        </div>
      </slot>
    </div>
  </div>
</div>
{/if}

<style>
  div.modal {
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100vh;

  }
  div.backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.content-wrapper {
    z-index: 10;
    max-width: 70vw;
    border-radius: 0.3rem;
    background-color: white;
    overflow: hidden;
  }
  div.content {
    max-height: 50vh;
    overflow: auto;
  }
</style>