<template>
  <header></header>
  <MainSlid />
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

  </div>
  <RouterView />
</template>

<script setup>
import MainSlid from './components/MainSlider.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const nextWidth = ref(0);
const next = ref(0);
const wid = ref(null);

const updateWidth = () => {
  if (wid.value) {
    const width = wid.value.offsetWidth;
    nextWidth.value = width * 3;
  }
};

const nextSlide = () => {
  if (next.value < (nextWidth.value - wid.value.offsetWidth)) {
    next.value += wid.value.offsetWidth;
  } else {
    next.value = 0;
  }
};

onMounted(() => {
  updateWidth();
  window.addEventListener('resize', updateWidth);

  const intervalId = setInterval(nextSlide, 5000);

  onUnmounted(() => {
    clearInterval(intervalId);
    window.removeEventListener('resize', updateWidth);
  });
});
</script>

<style scoped>
.container {
  width: 100%;
  overflow: hidden;
}

.flex {
  display: flex;
  transition: transform 0.5s ease;
}
</style>
