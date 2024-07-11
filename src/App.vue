<template>
  <div>
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
    <MainSlid />
    <div class="container">
      <div class="flex items-center justify-around flex-col-reverse md:flex-row mx-auto md:px-32  py-16">
        <div class="md:w-5/12">
          <div class="relative">
            <h2
              class="text-2xl md:w-96 mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
              Green Life Company's Commitment to Innovative
              Environmental
              Solutions.</h2>
          </div>

          <p class="mb-8">
            At Green Life Company, we are committed to preserving the environment by monitoring pollution and assessing
            environmental impacts, and developing innovative solutions to reduce negative effects. We strive to ensure
            compliance with environmental standards and provide guidance to companies for achieving sustainable
            performance.
            We raise environmental awareness through awareness campaigns and training programs to encourage eco-friendly
            behaviors.
          </p>
          <router-link
            class="py-4 px-4 bg-gradient-to-l from-green-400 to-green-500 text-white font-extrabold rounded-full transition ease-in-out duration-500 transform hover:duration-500 hover:bg-gradient-to-l hover:from-green-400 hover:to-green-500 hover:scale-105 hover:rotate-1 hover:shadow-xl"
            to="/">
            About Company
          </router-link>
        </div>
        <div class="md:w-6/12 flex justify-center relative">
          <img class="w-72" src="./assets/logo.png" alt="">
          <div class="circle small-circle -z-10"></div>
          <div class="circle medium-circle -z-10"></div>
          <div class="circle large-circle -z-10"></div>
          <div class="circle extra-large-circle -z-10"></div>
        </div>
      </div>
    </div>
    <!-- Slider For Services  -->
    <div class="container mx-auto my-40 overflow-hidden">
      <!-- Content and images container -->
      <!-- <div ref="wid" class="flex"
        :style="{ transform: `translateX(-${next.value}px)`, transition: 'transform 0.5s ease' }">
        <div class="flex-shrink-0 w-full grid grid-cols-2">
          <div class="ltr:pr-24 rtl:pl-24">
            <p class="font-bold text-2xl pb-8">To make The title more convincing</p>
            <p class="leading-loose text-justify">
              Green hydrogen is particularly vulnerable to price shocks from critical
              minerals, but this risk is largely overlooked by its developers. Explore
              mitigation strategies in a new Ramboll whitepaper. This risk is largely
              overlooked by its developers. Explore mitigation strategies in a new Ramboll
              whitepaper. This risk is largely overlooked by its developers. Explore
              mitigation strategies in a new Ramboll whitepaper.
            </p>
          </div>
          <div class="min-w-[1600px]">
            <picture class="mx-2">
              <img src="./assets/images/d1.jpg" alt="">
            </picture>
          </div>
        </div>

        <div class="flex-shrink-0 w-full grid grid-cols-2">
          <div class="ltr:pr-24 rtl:pl-24">
            <p class="font-bold text-2xl pb-8">To make The title more convincing</p>
            <p class="leading-loose text-justify">
              Green hydrogen is particularly vulnerable to price shocks from critical
              minerals, but this risk is largely overlooked by its developers. Explore
              mitigation strategies in a new Ramboll whitepaper. This risk is largely
              overlooked by its developers. Explore mitigation strategies in a new Ramboll
              whitepaper. This risk is largely overlooked by its developers. Explore
              mitigation strategies in a new Ramboll whitepaper.
            </p>
          </div>
          <div class="min-w-[1600px]">
            <picture class="mx-2">
              <img src="./assets/images/d1.jpg" alt="">
            </picture>
          </div>
        </div>
      </div> -->
    </div>
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import MainSlid from './components/MainSlider.vue';
</script>

<style>
.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: wave-animation 8s infinite;
  opacity: 0;
}

.small-circle {
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  animation-delay: 0s;
}

.medium-circle {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  animation-delay: 2s;
}

.large-circle {
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  animation-delay: 4s;
}

.extra-large-circle {
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  animation-delay: 6s;
}

@keyframes wave-animation {

  0%,
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }

  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
