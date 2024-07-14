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
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>