<template>
  <header>
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="px-2 lg:w-52 w-40 py-2">
          <router-link to="/">
            <img src="./assets/greenlogo.png" alt="">
          </router-link>
        </div>
        <div>
          <ul class="hidden items-center h-full lg:flex">
            <li><router-link class="px-2" to="/">Home</router-link></li>
            <li><router-link class="px-2" to="/">About us</router-link></li>
            <li><router-link class="px-2" to="/">News</router-link></li>
          </ul>
        </div>
        <div class="px-2 text-2xl my-auto lg:hidden block">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
      </div>
    </div>
  </header>
  <div class="container mx-auto">
    <RouterView />
  </div>
  <footer class="bg-gray-100">
    <div class="container  p-16 mx-auto">
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div class=" w-48">
          <img class="w-full" src="./assets/main-logo.png" alt="">
        </div>
        <div class="">
          <ul>
            <li class="mb-4">
              <h4 class="uppercase text-black font-bold">USEFUL LINKS</h4>
            </li>
            <li class="mb-4">
              <router-link to="/">
                About us
              </router-link>
            </li>
            <li class="mb-4">
              <router-link to="/">
                About us
              </router-link>
            </li>
            <li class="mb-4">
              <router-link to="/">
                About us
              </router-link>
            </li>
          </ul>
        </div>
        <div class="">
          <ul>
            <li class="mb-4">
              <h4 class="uppercase text-black font-bold">OTHER RESOURCES</h4>
            </li>
            <li class="mb-4">
              <router-link to="/">
                About us
              </router-link>
            </li>
            <li class="mb-4">
              <router-link to="/">
                About us
              </router-link>
            </li>
            <li class="mb-4">
              <router-link to="/">
                About us
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <div class="flex justify-around md:flex-row flex-col">
            <div
              class="relative w-32 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-15">
              <img class="h-full" src="./assets/images/d33.jpg" alt="">
              <div
                class="absolute flex flex-col left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-white z-10 p-2">
              </div>
            </div>
            <div
              class="relative w-32 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-15">
              <img class="h-full" src="./assets/images/d33.jpg" alt="">
              <div
                class="absolute flex flex-col left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-white z-10 p-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>