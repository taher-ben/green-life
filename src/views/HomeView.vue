<template>
  <MainSlid />
  <div class="container mx-auto">
    <div class="flex items-center justify-between flex-col-reverse md:flex-row mx-auto pt-16">
      <div class="md:w-5/12 mb:p-0 p-4">
        <div class="relative">
          <h2
            class="text-2xl md:w-96 mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700"
          >
            Green Life Company's Commitment to Innovative Environmental Solutions.
          </h2>
        </div>
        <p class="mb-8">
          At Green Life Company, our mission is to collaborate with all stakeholders to elevate
          environmental commitment and promote environmental conservation through several integrated
          aspects. We place great importance on monitoring pollution and assessing potential
          environmental impacts, and we work on developing innovative environmental strategies and
          solutions to mitigate negative environmental impacts.
        </p>
        <RouterLink
          class="py-4 px-4 bg-gradient-to-l from-green-400 to-green-500 text-white font-extrabold rounded-full transition ease-in-out duration-500 transform hover:duration-500 hover:bg-gradient-to-l hover:from-green-400 hover:to-green-500 hover:scale-105 hover:rotate-1 hover:shadow-xl"
          to="/"
        >
          About Company
        </RouterLink>
      </div>
      <div class="md:w-6/12 flex justify-center relative">
        <img class="md:w-72 sm:w-56 md:mb-0 mb-4" src="../assets/logo.png" alt="" />
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
      class="max_md:hidden text-2xl w-96 pt-16 px-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 before:absolute before:w-7/12 before:h-full before:top-0 before:left-0 before:bg-gray-100 before:-z-10"
    >
      Our Projects and Initiatives in Environmental Protection
    </div>
    <div ref="size" class="flex items-center justify-between flex-col-reverse md:flex-row mx-auto">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        v-show="currentBoxIndex === index"
        class="flex-shrink-0 box rounded md:bg-transparent bg-gray-200 px-8 py-2 w-full flex flex-col-reverse md:flex-row transition-opacity duration-500 ease-in-out transform"
        :class="{
          'opacity-0': currentBoxIndex !== index,
          'opacity-100': currentBoxIndex === index
        }"
      >
        <div
          class="md:ltr:pr-24 rtl:pl-24 flex flex-col justify-center transition-transform duration-500 ease-in-out md:w-6/12"
          :class="{
            'slide-in-left': currentBoxIndex === index,
            'slide-out-right': currentBoxIndex < index,
            'slide-out-left': currentBoxIndex > index
          }"
        >
          <div class="w-10/12">
            <p class="text-2xl pb-8 text-black">
              {{ box.title }}
            </p>
            <p class="leading-loose text-gray-500 text-justify">{{ box.content }}</p>
          </div>
        </div>
        <div
          class="transition-transform duration-500 ease-in-out md:w-6/12"
          :class="{
            'slide-in-right': currentBoxIndex === index,
            'slide-out-right': currentBoxIndex < index,
            'slide-out-left': currentBoxIndex > index
          }"
        >
          <picture class="mx-2 w-full">
            <img src="../assets/images/d0.jpg" alt="" />
            <!-- <img src="../ assets / images / d1.jpg" alt=""> -->
          </picture>
        </div>
      </div>
    </div>
    <div
      class="flex rtl:flex-row-reverse md:justify-start justify-center md:my-0 pb-3 md:px-4 px-0 my-6"
    >
      <font-awesome-icon
        @click="prevBox"
        class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer"
        :icon="['fas', 'arrow-left']"
      />
      <font-awesome-icon
        @click="nextBox"
        class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer"
        :icon="['fas', 'arrow-right']"
      />
    </div>
  </div>

  <div class="container mx-auto my-28">
    <div class="flex justify-between items-center my-32">
      <h2
        class="md:w-1/6 w-3/6 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700"
      >
        Pioneers in Environmental Sustainability
      </h2>
      <span class="md:w-5/6 w-3/6 h-1 bg-gray-100"></span>
    </div>
    <div class="flex items-center">
      <div class="md:w-[45%] max_md:w-full overflow-hidden relative">
        <div
          ref="scrollContainer"
          class="flex mian justify-between scroll-smooth ease-in-out md:hidden my-8 shadow-inner overflow-x-auto"
        >
          <RouterLink
            :to="{ name: 'DoctorsCv', params: { id: 'Dr_Najib_Ali_Bishr', ed: 4, pro: 8 } }"
            class="box flex-none shadow-xl w-96 mx-2 rounded-sm"
          >
            <div>
              <img src="../assets/Dectors/unknown.jpeg" alt="" />
            </div>
            <div class="mt-4 mb-8 p-4">
              <h3 class="text-xl text-black font-bold">{{}}</h3>
            </div>
          </RouterLink>
          <RouterLink
            :to="{ name: 'DoctorsCv', params: { id: 'Dr_Nouri_Ali_Eldroughi', ed: 4, pro: 4 } }"
            class="box flex-none shadow-xl w-96 mx-2 rounded-sm"
          >
            <div>
              <img src="../assets/Dectors/1.jpeg" alt="" />
            </div>
            <div class="mt-4 mb-8 p-4">
              <h3 class="text-xl text-black font-bold">Main Title One</h3>
            </div>
          </RouterLink>
          <RouterLink
            :to="{ name: 'DoctorsCv', params: { id: 'Dr_Taher_Ibrahim_Al_Tabet', ed: 8, pro: 9 } }"
            class="box flex-none shadow-xl w-96 mx-2 rounded-sm"
          >
            <div>
              <img src="../assets/Dectors/Dr_Taher_Ibrahim_Al_Tabet.jpg" alt="" />
            </div>
            <div class="mt-4 mb-8 p-4">
              <h3 class="text-xl text-black font-bold">Dr Taher Ibrahim Al Tabet</h3>
            </div>
          </RouterLink>
          <RouterLink
            :to="{ name: 'DoctorsCv', params: { id: 'Eng_Khayri_Ali_Gharyani', ed: 3, pro: 5 } }"
            class="box flex-none shadow-xl w-96 mx-2 rounded-sm"
          >
            <div>
              <img src="../assets/Dectors/Eng_Khayri_Ali_Gharyani.jpg" alt="" />
            </div>
            <div class="mt-4 mb-8 p-4">
              <h3 class="text-xl text-black font-bold">Eng Khayri Ali Gharyani</h3>
            </div>
          </RouterLink>
          <RouterLink
            :to="{
              name: 'DoctorsCv',
              params: { id: 'Eng_Ezaddin_Hussen_Ashebeni', ed: 1, pro: 16 }
            }"
            class="box flex-none shadow-xl w-96 mx-2 rounded-sm"
          >
            <div>
              <img src="../assets/Dectors/Eng_Ezaddin_Hussen_Ashebeni.jpg" alt="" />
            </div>
            <div class="mt-4 mb-8 p-4">
              <h3 class="text-xl text-black font-bold">Eng Ezaddin Hussen Ashebeni</h3>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="w-5/12 max_md:hidden mx-8">
        <div>
          <h2 class="text-2xl text-black mb-4">The Experts of Green Life Company</h2>
          <p class="text-gray-500">
            At Green Life Environmental Studies Company, we take pride in our team of experts and
            specialists who have many years of experience in the field of environment and
            sustainability. Our team includes a select group of scientists, engineers, and
            environmental consultants who have dedicated their professional lives to serving the
            environment and contributing to a more sustainable future.
          </p>
        </div>
        <div class="flex m-4 w-8">
          <div
            @click="scrollLeft"
            class="p-4 mx rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer max_md:hidden"
          >
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </div>
          <div
            @click="scrollRight"
            class="p-4 rounded-full bg-gradient-to-l from-green-500 to-green-600 mx-1 text-white cursor-pointer max_md:hidden"
          >
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import MainSlid from '../components/MainSlider.vue'

const boxes = ref([
  {
    title: 'To make The title more convincing',
    content:
      'Green hydrogen is particularly vulnerable to price shocks from critical minerals, but this risk is largely overlooked by its developers. Explore mitigation strategies in a new MCEP whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new MCEP whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new MCEP whitepaper.'
  },
  {
    title: 'To make The title more convincing',
    content:
      'Green hydrogen is particularly vulnerable to price shocks from critical minerals, but this risk is largely overlooked by its developers. Explore mitigation strategies in a new MCEP whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new MCEP whitepaper. This risk is largely overlooked by its developers. Explore mitigation strategies in a new MCEP whitepaper.'
  }
])

const currentBoxIndex = ref(0)
// Functions to navigate slider
const nextBox = () => {
  currentBoxIndex.value = (currentBoxIndex.value + 1) % boxes.value.length
}
const prevBox = () => {
  currentBoxIndex.value = (currentBoxIndex.value - 1 + boxes.value.length) % boxes.value.length
}
</script>

<style scoped>
.mian::-webkit-scrollbar {
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
      withExperts: null
    }
  },

  methods: {
    scrollLeft() {
      const container = this.$refs.scrollContainer
      container.scrollLeft -= 350
      this.Withsize()
    },
    scrollRight() {
      const container = this.$refs.scrollContainer
      container.scrollLeft += 280
    },
    Withsize() {
      this.withExperts = this.$refs.Withsize
      console.log(this.withExperts)
    }
  },
  mounted() {
    this.Withsize()
  }
}
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
