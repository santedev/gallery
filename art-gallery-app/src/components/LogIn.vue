<template>
  <main class="h-screen">
    <div class="w-full flex flex-wrap">
      <!-- Login Section -->
      <div class="w-full md:w-1/2 flex flex-col">
        <div
          class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <p class="text-center text-2xl">Welcome.</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            onsubmit="event.preventDefault();"
          >
            <div class="flex flex-col">
              <label for="email" class="text-neutral-300 text-sm font-bold"
                >Email</label
              >
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                v-model="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-neutral-300 text-sm font-bold"
                >Password</label
              >
              <input
                type="password"
                id="password"
                placeholder="Password"
                v-model="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-white mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="flex items-center justify-between mt-6">
            <!--<div class="flex items-center">
                <input type="checkbox" class="bg-transparent" />
                <label
                  class="ml-2 block text-sm text-neutral-300"
                  for="remember"
                >
                  Remember me
                </label>
              </div> -->
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
                @click.prevent="forgotPassword"
              >
                Forgot your password?
              </a>
            </div>
            <input
              type="submit"
              @click.prevent="register"
              value="Log In"
              class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-2"
            />
          </form>
          <div class="text-center pt-5 pb-8">
            <a
              href="register.html"
              class="font-bold text-sm text-blue-500 hover:text-blue-800"
              @click.prevent="$router.push('/signup')"
            >
              Don't have an account? Register here.
            </a>
          </div>
          <p class="text-center text-gray-500 text-xs mb-4">Or continue with</p>
          <div class="flex items-center justify-center gap-3">
            <a
              href="#"
              class="bg-neutral-300 flex gap-2 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click.prevent="logInWithGoogle"
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
              <span> Google </span>
            </a>

          </div>
        </div>
      </div>

      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl">
        <img
          class="object-cover w-full h-screen hidden md:block"
          src="Hagar_and_Ishmael_in_the_Desert.jpg"
          alt="decoration image, apollo standing on the clouds"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail 
} from "firebase/auth";
import { useRouter } from "vue-router";
import userDataService from '../services/mainUserData.js';
const email = ref("");
const password = ref("");

const router = useRouter();
const auth = getAuth();
const register = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push("/");
      console.log("success signed");
      console.log(auth.currentUser);
      userDataService.setEmail(email.value)
      userDataService.setPassword(password.value)
    })
    .catch((error) => {
      console.log(error);
    });
};
const logInWithGoogle = () => {
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
const forgotPassword = () => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      console.log("Password reset email sent!");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
