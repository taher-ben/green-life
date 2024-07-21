<template>
  <MainSlid />
  <div class="container">
    <div class="flex items-center justify-between flex-col-reverse md:flex-row mx-auto pt-16 ">
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
  <div class="container mx-auto my-28 relative">
    <!-- Content and images container -->
    <div
      class="max_md:hidden text-2xl w-72 pt-16 px-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 before:absolute before:w-7/12 before:h-full before:top-0 before:left-0 before:bg-gray-100 before:-z-10">
      Mina title for this slide title for this slid
    </div>
    <div ref="size" class="flex  items-center justify-between flex-col-reverse md:flex-row mx-auto">
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
          <p class="text-2xl pb-8 text-black">
            {{ box.title }}
          </p>
          <p class="leading-loose text-gray-500 text-justify">{{ box.content }}</p>
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
    <div class="flex rtl:flex-row-reverse md:justify-start justify-center md:my-0 pb-3 md:px-4 px-0 my-6">
      <font-awesome-icon @click="prevBox"
        class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer"
        :icon="['fas', 'arrow-left']" />
      <font-awesome-icon @click="nextBox"
        class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer"
        :icon="['fas', 'arrow-right']" />
    </div>
  </div>

  <div class="container mx-auto my-28">
    <div class="flex justify-between items-center my-32">
      <h2
        class="md:w-1/6 w-3/6 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
        How to make it well done</h2>
      <span class="md:w-5/6 w-3/6 h-1 bg-gray-100 "></span>
    </div>
    <div class=" flex items-center" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">
      <div class="md:w-[45%] max_md:w-full overflow-hidden relative ">
        <div class="flex justify-between transition-transform duration-500 ease-in-out md:hidden my-8  shadow-inner"
          :style="{ transform: `translateX(-${currentIndex * 90}%)` }">
          <div class="box flex-none shadow-xl w-96 mx-2 rounded-sm">
            <div>
              <img src="../assets/Dectors/1.jpeg" alt="">
            </div>
            <div class="mt-4 mb-8 p-4">
              <h3 class="text-xl text-black font-bold">Main Title One</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae mollitia eius rem! Eaque,</p>
            </div>
          </div>
          <div class="box flex-none shadow-xl w-96 mx-2 rounded-sm">
            <div>
              <img src="../assets/Dectors/2.jpeg" alt="">
            </div>
            <div class="mt-4 mb-8 p-4">
              <h3 class="text-xl text-black font-bold">Main Title Two</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae mollitia eius rem! Eaque,</p>
            </div>
          </div>
          <div class="box flex-none shadow-xl w-96 mx-2 rounded-sm">
            <div>
              <img src="../assets/Dectors/2.jpeg" alt="">
            </div>
            <div class="mt-4 mb-8 p-4">
              <h3 class="text-xl text-black font-bold">Main Title Three</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae mollitia eius rem! Eaque,</p>
            </div>
          </div>
          <div class="box flex-none shadow-xl w-96 mx-2 rounded-sm">
            <div>
              <img src="../assets/Dectors/1.jpeg" alt="">
            </div>
            <div class="mt-4 mb-8  mx-8 p-4">
              <h3 class="text-xl text-black font-bold">Main Title Four</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae mollitia eius rem! Eaque,</p>
            </div>
          </div>
          <div class="box flex-none shadow-xl w-96 mx-2 rounded-sm">
            <div>
              <img src="../assets/Dectors/2.jpeg" alt="">
            </div>
            <div class="mt-4 mb-8 mx-8 p-4">
              <h3 class="text-xl font-bold">Main Title Four</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae mollitia eius rem! Eaque,</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-5/12 max_md:hidden mx-8">
        <div>
          <h2 class="text-2xl text-black mb-4">
            Our Team Leaders
          </h2>
          <p class="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repudiandae minus quia fugit. Perspiciatis
            ea
            praesentium ab repellendus maxime, veniam maiores architecto dicta, ad suscipit, sit asperiores nulla unde
            necessitatibus!ium ab repellendus maxime, veniam maiores architecto dicta, ad suscipit, sit asperiores
            nulla
            unde necessitatibus!
          </p>
        </div>
        <div class="flex m-4 w-8">
          <div @click="prevox"
            class="p-4 mx rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer max_md:hidden">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </div>
          <div @click="nextox"
            class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer max_md:hidden">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue';
import MainSlid from '../components/MainSlider.vue';

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

const currentBoxIndex = ref(0);
// Functions to navigate slider
const nextBox = () => {
  currentBoxIndex.value = (currentBoxIndex.value + 1) % boxes.value.length;
};
const prevBox = () => { currentBoxIndex.value = (currentBoxIndex.value - 1 + boxes.value.length) % boxes.value.length; };
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

<script>
export default {
  data() {
    return {
      pageWidth: window.innerWidth,
      currentIndex: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
    };
  },
  // mounted() {
  //   setInterval(this.nextBox, 5000);
  // },
  methods: {
    updatePageWidth() {
      this.pageWidth = window.innerWidth;
      if (this.pageWidth > 787) {
        console.log(this.pageWidth.value)
        return 45;
      } else {
        return 100;
      }
    },
    nextox() {
      this.currentIndex = (this.currentIndex + 1) % 3;
    },
    prevox() {
      this.currentIndex = (this.currentIndex - 1 + 4) % 4;
    },
    handleTouchStart(e) {
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
    },
    handleTouchMove(e) {
      this.deltaX = e.touches[0].clientX - this.startX;
      this.deltaY = e.touches[0].clientY - this.startY;
    },
    handleTouchEnd() {
      if (Math.abs(this.deltaX) > Math.abs(this.deltaY)) {
        if (this.deltaX > 30) {
          this.prevox();
        } else if (this.deltaX < -30) {
          this.nextBox();
        }
      }
      this.startX = 0;
      this.startY = 0;
      this.deltaX = 0;
      this.deltaY = 0;
    },
  },
  computed: {
  },
  created() {
    window.addEventListener('resize', this.updatePageWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updatePageWidth);
  },
};
</script>

<style scoped>
.box img {
  width: 100%;
}

.flex {
  display: flex;
}

.w-full {
  width: 100%;
}
</style>