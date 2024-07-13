<template>
  <MainSlid />
  <div class="container">
    <div class="flex items-center justify-between flex-col-reverse md:flex-row mx-auto pt-16">
      <div class="md:w-5/12 mb:p-0 p-4">
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
        <img class="md:w-72 sm:w-56 md:mb-0 mb-4" src="../assets/logo.png" alt="">
        <div class="circle small-circle -z-10"></div>
        <div class="circle medium-circle -z-10"></div>
        <div class="circle large-circle -z-10"></div>
        <div class="circle extra-large-circle -z-10"></div>
      </div>
    </div>
  </div>
  <!-- Slider For Services  -->
  <div class="container mx-auto overflow-hidden">
    <!-- Content and images container -->
    <div ref="size" class="flex items-center justify-between flex-col-reverse md:flex-row mx-auto px-8 pt-16">
      <div v-for="(box, index) in boxes" :key="index" v-show="currentBoxIndex === index"
        class="flex-shrink-0 box w-full grid grid-cols-2 transition-opacity duration-500 ease-in-out transform" :class="{
          'opacity-0': currentBoxIndex !== index,
          'opacity-100': currentBoxIndex === index
        }">
        <div class="ltr:pr-24 rtl:pl-24 flex flex-col justify-center transition-transform duration-500 ease-in-out"
          :class="{
            'translate-x-full': currentBoxIndex < index,
            '-translate-x-full': currentBoxIndex > index,
            'translate-x-0': currentBoxIndex === index
          }">
          <p
            class="text-2xl pb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
            {{ box.title }}
          </p>
          <p class="leading-loose text-justify">{{ box.content }}</p>
        </div>
        <div class="transition-transform duration-500 ease-in-out" :class="{
          'translate-x-full': currentBoxIndex < index,
          '-translate-x-full': currentBoxIndex > index,
          'translate-x-0': currentBoxIndex === index
        }">
          <picture class="mx-2 w-full">
            <img :src="box.image" alt="">
          </picture>
        </div>
      </div>
    </div>
    <div class="flex rtl:flex-row-reverse px-4">
      <font-awesome-icon @click="prevBox"
        class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white"
        :icon="['fas', 'arrow-left']" />
      <font-awesome-icon @click="nextBox"
        class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white"
        :icon="['fas', 'arrow-right']" />
    </div>
  </div>

  <div class="container mx-auto">
    <RouterView />
  </div>
</template>
<script setup>
import MainSlid from '../components/MainSlider.vue';
</script>
<script>
export default {
  data() {
    return {
      currentBoxIndex: 0,
      boxes: [
        {
          title: 'To make The title more convincing',
          content: 'Green hydrogen is particularly vulnerable to price shocks from critical minerals, but this risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper.',
          image: '../assets/images/d1.jpg',
        },
        {
          title: 'Mo make The title more convincing',
          content: 'Green hydrogen is particularly vulnerable to price shocks from critical minerals, but this risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper.',
          image: '../assets/images/d1.jpg',
        },
      ],
    };
  },
  methods: {
    nextBox() {
      if (this.currentBoxIndex < this.boxes.length - 1) {
        this.currentBoxIndex++;
      }
    },
    prevBox() {
      if (this.currentBoxIndex > 0) {
        this.currentBoxIndex--;
      }
    },
  }
};
</script>


<style scoped>
.box {
  transition: all 0.5s ease-in-out;
}
</style>

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
