<template>
  <header></header>
  <div ref="wid" class="container mx-auto bg-white-400  mt-32 overflow-hidden">
    <div class="relative min-hh-[66vh]">
      <div class="flex relative transition-transform duration-500 h-full"
        :style="`width:${nextWidth}px; transform: translateX(-${next}px);`">
        <div class="h-full">
          <picture>
            <!-- <img class="h-full md:hidden block" src="./assets/images/d22.jpg"> -->

            <img class="h-full " src="./assets/images/d1.jpg">
          </picture>
        </div>
        <div class="h-full">
          <picture>
            <img class="h-full" src="./assets/images/d2.jpg">
          </picture>
        </div>
        <div class="h-full">
          <picture>
            <img class="h-full" src="./assets/images/d22.jpg">

            <!-- <img class="h-full" src="./assets/images/d1.jpg"> -->
          </picture>
        </div>
      </div>
      <div class="absolute bottom-0 flex">
        <div :class="{ 'with-before': afterelement == 0, 'without-before': afterelement !== 0 }"
          class="pt-2 pb-6 px-3 text-white bg-black bg-opacity-25 backdrop-blur-2xl overflow-hidden">
          <div><span>1</span><span class="">/03</span></div>
          <h5 class="uppercase text-white">main title width</h5>
        </div>
        <div :class="{ 'with-before': afterelement == 1, 'without-before': afterelement !== 1 }"
          class="pt-2 pb-6 px-3 text-white bg-black bg-opacity-25 backdrop-blur-2xl overflow-hidden">
          <div><span>2</span><span class="">/03</span></div>
          <h5 class="uppercase text-white">main title width</h5>
        </div>
        <div :class="{ 'with-before': afterelement == 2, 'without-before': afterelement !== 2 }"
          class="pt-2 pb-6 px-3 text-white bg-black bg-opacity-25 backdrop-blur-2xl overflow-hidden">
          <div><span>3</span><span class="">/03</span></div>
          <h5 class="uppercase text-white">main title width</h5>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const nextWidth = ref(0);
const next = ref(0);
const wid = ref(null);
const afterelement = ref(0);

// Function to get the width of the DOM element
const updateWidth = () => {
  if (wid.value) {
    const width = wid.value.offsetWidth;
    nextWidth.value = width * 3;
  }
};

const nextSlide = () => {
  if (next.value < (nextWidth.value - wid.value.offsetWidth)) {
    next.value += wid.value.offsetWidth;
    afterelement.value = (afterelement.value + 1) % 3;
  } else {
    next.value = 0;
    afterelement.value = 0;
  }
};

onMounted(() => {
  updateWidth();
  window.addEventListener('resize', updateWidth);

  const intervalId = setInterval(nextSlide, 5000);

  // Cleanup interval on unmount
  onUnmounted(() => {
    clearInterval(intervalId);
    window.removeEventListener('resize', updateWidth);
  });
});

</script>

<style scoped>
.with-before::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  transition: 5s;
  top: 0;
  left: 0;
  background-color: white;
}

.without-before::before {
  content: '';
  position: absolute;
  width: 100%;
  transition: 1s;
  height: 1px;
  top: 0;
  left: -100%;
}
</style>
