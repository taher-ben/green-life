<template>
  <header>
    <div class="container relative mx-auto">
      <div class="flex justify-between">
        <div class="px-2 lg:w-52 w-40 py-2">
          <router-link to="/">
            <img src="./assets/greenlogo.png" alt="">
          </router-link>
        </div>
        <div class=" lg:w-auto lg:h-auto lg:bg-transparent lg:relative"
          :class="{ 'z-10 absolute right-0 top-full w-full bg-white h-screen md:pt-0 pt-8': isMenuOpen, 'lg:block hidden': !isMenuOpen }">
          <ul class=" items-center h-full lg:flex">
            <li class="pb-4 lg:border-b-0 border-b-2  lg:pb-0"><router-link active-class="text-green-500" class="px-2"
                to="/" @click="toggleMenu">Home</router-link></li>
            <li class="pb-4 lg:border-b-0 border-b-2  lg:pb-0"><router-link active-class="text-green-500" class="px-2"
                to="/WhatWeOffer" @click="toggleMenu">What We Offer</router-link>
            </li>
            <li class="pb-4 lg:border-b-0 border-b-2  lg:pb-0"><router-link active-class="text-green-500" class="px-2"
                to="d" @click="toggleMenu">News</router-link></li>
          </ul>
        </div>
        <div @click="toggleMenu" class="px-2 text-2xl my-auto lg:hidden block">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
      </div>
    </div>
  </header>
  <div class="container leading-loose mx-auto">
    <RouterView />
  </div>
  <footer class="bg-gray-100">
    <div class="container  p-16 mx-auto">
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div class="md:w-48 sm:w-32 md:p-0 py-4">
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
          <div class="flex justify-around flex-row">
            <div
              class="md:relative md:block hidden p w-32 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-15">
              <img class="h-full" src="./assets/images/d33.jpg" alt="">
              <div
                class="absolute flex flex-col left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-white z-10 p-2">
              </div>
            </div>
            <div
              class="md:relative md:block hidden p w-32 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-15">
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

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>
