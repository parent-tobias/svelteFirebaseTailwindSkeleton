<script lang="ts">
    // import {auth, googleAuth} from "../services/firebase";
    import {createEventDispatcher} from "svelte";
    export let authMode: "login" | "register" = "register";

    import Register from './Register.svelte';
    import Login from './Login.svelte';
    import { auth } from '../stores/store';

    const { createWithEmailPassword, loginWithEmailPassword, loginWithGoogle, logout, user } = auth;

    let acceptTerms = false;
    let err: string | null = null;
    const d = createEventDispatcher();

    function login(email, password) {
        // const email = (document.getElementById("l-email") as HTMLInputElement).value
        // const password = (document.getElementById("l-password") as HTMLInputElement).value
        if (!email || !password) {
            err = "Fill out all fields!"
            return;
        }
        err = "";
        loginWithEmailPassword(email, password).then(() => {d("done"); d("auth")}).catch(e => {
            err = `(${e.code}) ${e.message}`
        })
    }
    
    function register(email, password, cpassword) {
        // const email = (document.getElementById("r-email") as HTMLInputElement).value
        // const password = (document.getElementById("r-password") as HTMLInputElement).value
        // const cpassword = (document.getElementById("r-cpassword") as HTMLInputElement).value
        if (!email || !password || !cpassword) {
            err = "Fill out all fields!"
            return;
        }
        if (password !== cpassword) {
            err = "Passwords don't match!"
            return;
        }
        err = "";
        createWithEmailPassword(email, password).then(() => {d("done"); d("auth")}).catch(e => {
            err = `(${e.code}) ${e.message}`
        })
    }
  </script>
  

  {#if !$user}
  <div class='w-full h-full flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light'>
      <main>
        <div class="w-full max-w-sm px-4 py-6 space-y-6 bg-white rounded-md dark:bg-darker">
          {#if authMode==='register'}
            <Register bind:err={err} handleRegistration={register} registerViaGoogle={loginWithGoogle} />
            <!-- Login link -->
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Already have an account? <a on:click|preventDefault={()=>{console.log(authMode); authMode='login'}} href="#!" class="text-blue-600 hover:underline">Login</a>
            </div>
          {:else }
            <Login bind:err={err} handleLogin={login} loginViaGoogle={loginWithGoogle}/>
            <!-- Register link -->
            <div class="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account? <a on:click|preventDefault={()=>{console.log(authMode); authMode='register'}} href="#!" class="text-blue-600 hover:underline">Register</a>
              </div>
  
          {/if}
          </div>
      </main>
  </div>
  {:else}
  <div class="w3-container">
    <h2>Logged in</h2>
  </div>
  <div class="w3-container">
    <p class="w3-large w3-text-green w3-center"><i class="fas fa-check fa-5x"></i></p>
    <p class="w3-center">Logged in</p>
    <p>
      <button class="w3-button w3-blue" style="width: 100%" on:click={logout}>Log out</button>
    </p>
  </div>
  {/if}
