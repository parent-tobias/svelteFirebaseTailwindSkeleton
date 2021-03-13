<script lang='ts'>
  import StyledButton from '../UIComponents/StyledButton.svelte';
  import ErrorAlert from '../UIComponents/ErrorAlert.svelte';


  let acceptTerms=false;

  export let handleLogin = (email, password)=>{};
  export let loginViaGoogle = ()=>{};
  export let err;

  const login = (event)=>{
    const form = event.currentTarget;
    const {email, password } = form.elements;

    handleLogin(email.value, password.value);
  }

</script>

<h1 class="text-xl font-semibold text-center">Login</h1>
<form on:submit|preventDefault={login} action="#" class="space-y-6">
  {#if err}
    <ErrorAlert message={err} />
  {/if}
  <input class="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker" type="email" name="email" placeholder="Email address" required>
  <input class="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker" type="password" name="password" placeholder="Password" required>
  <div>
    <button type="submit" class="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker">
      Login
    </button>
  </div>
</form>

<!-- Or -->
<div class="flex items-center justify-center space-x-2 flex-nowrap">
  <span class="w-20 h-px bg-gray-300"></span>
  <span>OR</span>
  <span class="w-20 h-px bg-gray-300"></span>
</div>

<!-- Social login links -->
<!-- Brand icons src https://boxicons.com -->
<StyledButton >
    <svg aria-hidden='true' class="w-6 h-6" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
    </svg>
    <span on:click={loginViaGoogle}> Login with Google </span>
</StyledButton>