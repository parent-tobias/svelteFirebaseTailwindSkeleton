<script lang='ts'>
  import Auth from '../routes/Auth.svelte';
  import Main from '../routes/Main.svelte';
  import { auth } from '../stores/store';
  
  const { user } = auth;

</script>




{#if !$user}
  <h1 class='w3-jumbo w3-center'>Serverless chat</h1>
  <p class='w3-large w3-center'><a href='/auth'>Please log in</a></p>
  <Auth qs={{action:'login', next: "/main"}} /> 
{:else}
<Main />
{/if}
 