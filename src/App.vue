<template>
  <header :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" class="bg-gray-50 z-50 w-full">
    <div class="lg:container relative mx-auto z-40">
      <div class="flex justify-between">
        <div class="px-2 lg:w-52 w-40 py-2">
          <RouterLink to="/">
            <img src="./assets/greenlogo.png" alt="" />
          </RouterLink>
        </div>
        <div
          class="lg:w-auto lg:h-auto lg:bg-transparent lg:relative"
          :class="{
            'z-10 absolute right-0 top-full w-full be bg-white h-screen md:pt-0 pt-8': isMenuOpen,
            'lg:block hidden': !isMenuOpen
          }"
        >
          <ul class="items-center h-full lg:flex">
            <li
              class="pb-4 lg:border-b-0 border-b-2 lg:pb-0 overflow-hidden relative lg:h-full flex items-center before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500 before:-translate-x-full hover:before:translate-x-0 transition before:duration-300"
            >
              <RouterLink
                active-class="lg:before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500"
                class="px-2"
                to="/"
                @click="toggleMenu"
                >{{ $t('home') }}
              </RouterLink>
            </li>
            <li
              class="pb-4 lg:border-b-0 border-b-2 lg:pb-0 overflow-hidden relative lg:h-full flex items-center before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500 before:-translate-x-full hover:before:translate-x-0 transition before:duration-300"
            >
              <RouterLink
                active-class="lg:before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500"
                class="px-2"
                to="/WhatOffer"
                @click="toggleMenu"
                >{{ $t('our_services') }}</RouterLink
              >
            </li>
            <li
              class="pb-4 lg:border-b-0 border-b-2 lg:pb-0 overflow-hidden relative lg:h-full flex items-center before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500 before:-translate-x-full hover:before:translate-x-0 transition before:duration-300"
            >
              <RouterLink
                active-class="lg:before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500"
                class="px-2"
                to="/AboutView"
                @click="toggleMenu"
                >{{ $t('about') }}</RouterLink
              >
            </li>
            <li
              class="pb-4 lg:border-b-0 border-b-2 lg:pb-0 overflow-hidden relative lg:h-full flex items-center before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500 before:-translate-x-full hover:before:translate-x-0 transition before:duration-300"
            >
              <RouterLink
                active-class="lg:before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500"
                class="px-2"
                to="/NewsAndSubject"
                @click="toggleMenu"
                >{{ $t('News') }}</RouterLink
              >
            </li>
            <li
              class="pb-4 lg:border-b-0 border-b-2 lg:pb-0 overflow-hidden relative lg:h-full flex items-center before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500 before:-translate-x-full hover:before:translate-x-0 transition before:duration-300"
            >
              <RouterLink
                active-class="lg:before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500"
                class="px-2"
                to="/ContactUs"
                @click="toggleMenu"
                >{{ $t('contactus') }}</RouterLink
              >
            </li>
            <li
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              class="pb-4 lg:border-b-0 border-b-2 lg:pb-0 overflow-hidden relative lg:h-full flex items-center before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-green-500 before:-translate-x-full hover:before:translate-x-0 transition before:duration-300"
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
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" class="mx-auto leading-8 px-2">
    <RouterView />
  </div>
  <footer :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" class="bg-gray-950">
    <div class="flex flex-col md:items-center items-start container p-8 mx-auto">
      <div class="w-40 mb-4">
        <img src="./assets/main-logo.png" alt="" />
      </div>
      <div>
        <ul class="flex lg:flex-row flex-col mb-4">
          <li class="capitalize px-2 md:my-0 my-4 text-gray-200 hover:text-gray-400">
            <RouterLink to="/AboutView"> {{ $t('about') }} </RouterLink>
          </li>
          <li class="capitalize px-2 md:my-0 my-4 text-gray-200 hover:text-gray-400">
            <RouterLink to="/WhatOffer"> {{ $t('our_services') }} </RouterLink>
          </li>
          <li class="capitalize px-2 md:my-0 my-4 text-gray-200 hover:text-gray-400">
            <RouterLink to="/ContactUs"> {{ $t('contactus') }} </RouterLink>
          </li>
          <li class="capitalize px-2 md:my-0 my-4 text-gray-200 hover:text-gray-400">
            <RouterLink to="/NewsAndSubject"> {{ $t('News') }} </RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h5 class="text-sm text-gray-400 mt-4">
          {{ $t('copyright') }}
        </h5>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

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
