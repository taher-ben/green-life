<template>
  <header class="bg-gray-50 w-full" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="lg:container relative mx-auto z-40">
      <div class="flex justify-between">
        <div class="px-2 lg:w-52 w-40 py-2">
          <router-link to="/">
            <img src="./assets/greenlogo.png" alt="" />
          </router-link>
        </div>
        <div
          class="lg:w-auto lg:h-auto lg:bg-transparent lg:relative"
          :class="{
            'z-10 absolute right-0 top-full w-full bg-white h-screen md:pt-0 pt-8': isMenuOpen,
            'lg:block hidden': !isMenuOpen
          }"
        >
          <ul class="items-center h-full lg:flex">
            <li class="pb-4 lg:border-b-0 border-b-2 lg:pb-0">
              <router-link active-class="text-green-500" class="px-2" to="/" @click="toggleMenu"
                >{{ $t('home') }}
              </router-link>
            </li>
            <li class="pb-4 lg:border-b-0 border-b-2 lg:pb-0">
              <router-link
                active-class="text-green-500"
                class="px-2"
                to="/WhatWeOffer"
                @click="toggleMenu"
                >What We Offer</router-link
              >
            </li>
            <li class="pb-4 lg:border-b-0 border-b-2 lg:pb-0">
              <router-link
                active-class="text-green-500"
                class="px-2"
                to="About"
                @click="toggleMenu"
                >{{ $t('about') }}</router-link
              >
            </li>
            <li class="pb-4 lg:border-b-0 border-b-2 lg:pb-0">
              <router-link
                active-class="text-green-500"
                class="px-2"
                to="/NewsAndSubject"
                @click="toggleMenu"
                >News</router-link
              >
            </li>
            <li class="pb-4 lg:border-b-0 border-b-2 lg:pb-0">
              <router-link
                active-class="text-green-500"
                class="px-2"
                to="/ContactUs"
                @click="toggleMenu"
                >Contact Us</router-link
              >
            </li>
            <li
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              class="pb-4 lg:border-b-0 border-b-2 lg:pb-0"
            >
              <button class="px-2" @click="$i18n.locale = locale">
                {{ locale }}
              </button>
            </li>
          </ul>
        </div>
        <div @click="toggleMenu" class="px-2 text-2xl my-auto lg:hidden block">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
      </div>
    </div>
  </header>
  <div class="leading-loose mx-auto px-2">
    <RouterView :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" />
  </div>
  <footer class="bg-gray-950" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="flex flex-col md:items-center items-start container p-8 mx-auto">
      <div class="w-40 mb-4">
        <img src="./assets/main-logo.png" alt="" />
      </div>
      <div>
        <ul class="flex lg:flex-row flex-col mb-4">
          <li class="capitalize px-2 md:my-0 my-4 text-gray-200 hover:text-gray-400">
            <router-link to="/about"> About Company </router-link>
          </li>
          <li class="capitalize px-2 md:my-0 my-4 text-gray-200 hover:text-gray-400">
            <router-link to="/WhatWeOffer"> What We Offer </router-link>
          </li>
          <li class="capitalize px-2 md:my-0 my-4 text-gray-200 hover:text-gray-400">
            <router-link to="/"> contact us </router-link>
          </li>
          <li class="capitalize px-2 md:my-0 my-4 text-gray-200 hover:text-gray-400">
            <router-link to="NewsAndSubject"> News And Subject </router-link>
          </li>
        </ul>
      </div>
      <div>
        <h5 class="text-sm text-gray-400 mt-4">
          Copyright © 2024 The Green Life Company, All Rights Reserved
        </h5>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
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
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
