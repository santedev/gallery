<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-neutral-900"
  >
    <form
      class="w-full max-w-md bg-neutral-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onsubmit="event.preventDefault();"
    >
      <div class="mb-4 text-white">
        <p class="text-2xl mb-3">Sign in with</p>
      </div>

      <div class="mb-4">
        <label
          class="block text-neutral-300 text-sm font-bold mb-2"
          for="email"
        >
          Email address
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent text-white"
          id="email"
          type="email"
          v-model="email"
          placeholder="your@email.com"
        />
      </div>
      <div class="mb-1">
        <label
          class="block text-neutral-300 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-2 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent text-white"
          id="password"
          type="password"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <div class="mb-4 text-center text-gray-500 text-xs">
        <p>or continue with</p>
      </div>
      <div class="flex gap-2 justify-center mb-8">
        <button
          type="button"
          @click="signUpWithGoogle"
          class="flex justify-center items-center gap-2 bg-neutral-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24">
            <path
              d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
              fill="#EA4335"
            ></path>
            <path
              d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
              fill="#4285F4"
            ></path>
            <path
              d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
              fill="#FBBC05"
            ></path>
            <path
              d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
              fill="#34A853"
            ></path>
          </svg>
          <span>Google</span>
        </button>
 
      </div>

      <div class="flex items-center justify-between mt-4">
        <button
          class="bg-black text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          @click.prevent="register"
        >
          Sign up
        </button>
      </div>
      <div class="flex items-center justify-center mt-4">
        <a
          class="text-center inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
          @click.prevent="$router.push('/login')"
        >
          Have an account? Sign in
        </a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import userDataService from "../services/mainUserData.js";
const email = ref("");
const password = ref("");

const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      router.push("/");
      console.log("success");
      userDataService.setEmail(email.value)
      userDataService.setPassword(password.value)
    })
    .catch((error) => {
      console.log(error);
    });
};
const signUpWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then(() => {
      router.push("/");
      console.log("success");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
