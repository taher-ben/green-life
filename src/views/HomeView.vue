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
  <!-- Slider For Services -->
  <div class="container mx-auto relative">
    <!-- Content and images container -->
    <div ref="size" class="flex items-center justify-between flex-col-reverse md:flex-row mx-auto px-8 pt-16">
      <div v-for="(box, index) in boxes" :key="index" v-show="currentBoxIndex === index"
        class="flex-shrink-0 box rounded md:bg-transparent bg-gray-200 px-8 py-2 w-full flex flex-col-reverse md:flex-row transition-opacity duration-500 ease-in-out transform"
        :class="{
          'opacity-0': currentBoxIndex !== index,
          'opacity-100': currentBoxIndex === index
        }">
        <div
          class="md:ltr:pr-24 rtl:pl-24 flex flex-col justify-center transition-transform duration-500 ease-in-out md:w-6/12"
          :class="{
            'slide-in-left': currentBoxIndex === index,
            'slide-out-right': currentBoxIndex < index,
            'slide-out-left': currentBoxIndex > index
          }">
          <p
            class="text-2xl pb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
            {{ box.title }}
          </p>
          <p class="leading-loose text-justify">{{ box.content }}</p>
        </div>
        <div class="transition-transform duration-500 ease-in-out md:w-6/12" :class="{
          'slide-in-right': currentBoxIndex === index,
          'slide-out-right': currentBoxIndex < index,
          'slide-out-left': currentBoxIndex > index
        }">
          <picture class="mx-2 w-full">
            <img src="../assets/images/d0.jpg" alt="">
            <!-- <img src="../ assets / images / d1.jpg" alt=""> -->
          </picture>
        </div>
      </div>
    </div>
    <div class="flex rtl:flex-row-reverse md:justify-start justify-center md:my-0 my-2 md:px-4 px-0">
      <font-awesome-icon @click="prevBox"
        class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer"
        :icon="['fas', 'arrow-left']" />
      <font-awesome-icon @click="nextBox"
        class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer"
        :icon="['fas', 'arrow-right']" />
    </div>
  </div>


  <div class="grid gap-8 md:grid-cols-3 grid-cols-1">
    <div v-if="selectedDoctor"
      class="show-doctor md:col-span-2 flex md:items-center md:flex-row flex-col justify-between">
      <div class="doctor-info md:col-span-2 flex md:items-center md:flex-row flex-col justify-between">
        <div>
          <img src="../assets/Dectors/image.jpeg" alt="">
        </div>
        <div class="px-8 md:w-[600px]">
          <p class="text-2xl mb-2 font-bold">
            {{ selectedDoctor.description }}
          </p>
          <div class="mb-16">
            <h4>{{ selectedDoctor.name }}</h4>
            <p>{{ selectedDoctor.title }}</p>
          </div>
          <button>Main Button</button>
        </div>
      </div>
    </div>
    <div class="md:flex flex-col justify-center divide-y border-y-slate-700">
      <div v-for="doctor in doctors" :key="doctor.id" class="flex hover:border-e-4 border-green-500 docote"
        @click="selectDoctor(doctor)">
        <img class="w-24" src="../assets/Dectors/image.jpeg" alt="">
        <div class="flex flex-col justify-center px-4">
          <h4>{{ doctor.name }}</h4>
          <p>{{ doctor.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MainSlid from '../components/MainSlider.vue';

// Doctors data
const doctors = ref([
  {
    id: 1,
    name: 'Khairy',
    title: 'CEO Director',
    description: 'It’s important to improve accessibility and connections with our streams, rivers and greenways through restoration and enhancement.',
    image: '../assets/Doctors/image.jpeg'
  },
  {
    id: 1,
    name: 'Khairy',
    title: 'CEO Director',
    description: 'It’s important to improve accessibility and connections with our streams, rivers and greenways through restoration and enhancement.',
    image: '../assets/Doctors/image.jpeg'
  },
  {
    id: 1,
    name: 'Khairy',
    title: 'CEO Director',
    description: 'It’s important to improve accessibility and connections with our streams, rivers and greenways through restoration and enhancement.',
    image: '../assets/Doctors/image.jpeg'
  },
]);

// Local state for selected doctor
const selectedDoctor = ref(null);

// Select doctor function
const selectDoctor = (doctor) => {
  selectedDoctor.value = doctor;
};

// Data for the slider
const currentBoxIndex = ref(0);
const boxes = ref([
  {
    title: 'To make The title more convincing',
    content: 'Green hydrogen is particularly vulnerable to price shocks from critical minerals, but this risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper.',
  },
  {
    title: 'To make The title more convincing',
    content: 'Green hydrogen is particularly vulnerable to price shocks from critical minerals, but this risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new Ramboll whitepaper.',
  },
]);

// Functions to navigate slider
const nextBox = () => {
  currentBoxIndex.value = (currentBoxIndex.value + 1) % boxes.value.length;
};

const prevBox = () => {
  currentBoxIndex.value = (currentBoxIndex.value - 1 + boxes.value.length) % boxes.value.length;
};
</script>

<style scoped>
.hidden {
  display: none;
}

.box {
  transition: all 0.5s ease-in-out;
}

.slide-in-left {
  animation: slide-in-left 0.5s forwards;
}

.slide-in-right {
  animation: slide-in-left 0.5s forwards;
}

.slide-out-left {
  animation: slide-out-left 0.5s forwards;
}

.slide-out-right {
  animation: slide-out-left 0.5s forwards;
}

@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out-left {
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes slide-out-right {
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(100%);
    opacity: 0;
  }
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
