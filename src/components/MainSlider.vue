<template>
  <div ref="wid" class="container MainSlider mx-auto bg-white-400 overflow-hidden">
    <div class="relative">
      <div
        class="flex relative transition-transform duration-500 h-full"
        :style="`width:${nextWidth}px; transform: translateX(-${next}px);`"
      >
        <div class="w-full">
          <picture>
            <img class="w-full md:hidden block" src="../assets/images/small/7.jpg " />
            <img class="h-full md:block hidden" src="../assets/images/big/7.jpg" />
          </picture>
        </div>
        <div class="w-full">
          <picture>
            <img class="w-full md:hidden block" src="../assets/images/small/5.jpg" />
            <img class="h-full md:block hidden" src="../assets/images/big/5.jpg" />
          </picture>
        </div>
        <div class="w-full">
          <picture>
            <img class="w-full md:hidden block" src="../assets/images/small/2.jpg" />
            <img class="h-full md:block hidden" src="../assets/images/big/2.jpg" />
          </picture>
        </div>
      </div>
      <div class="overflow-x-auto md:absolute md:bottom-0 md:overflow-hidden slideNumerContainer">
        <div class="flex w-max md:min-w-[1500px]">
          <div
            v-for="(item, index) in 3"
            :key="index"
            @click="show(index)"
            :class="{
              'with-before': afterelement == index,
              'without-before': afterelement !== index
            }"
            class="pt-2 pb-6 px-3 text-white cursor-pointer bg-black bg-opacity-25 backdrop-blur-2xl overflow-hidden 1xl:w-72 w-44"
          >
            <div>
              <span>{{ index + 1 }}</span
              ><span class="opinter">/3</span>
            </div>
            <h5 class="text-white text-sm">{{ $t(`titles.${index + 1}`) }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const nextWidth = ref(0)
const next = ref(0)
const wid = ref(null)
const afterelement = ref(0)

const show = (index) => {
  next.value = index * wid.value.offsetWidth
  afterelement.value = index
}

const updateWidth = () => {
  if (wid.value) {
    const width = wid.value.offsetWidth
    nextWidth.value = width * 3
  }
  show(0)
}

const nextSlide = () => {
  if (next.value < nextWidth.value - wid.value.offsetWidth) {
    next.value += wid.value.offsetWidth
    afterelement.value = (afterelement.value + 1) % 4
  } else {
    next.value = 0
    afterelement.value = 0
  }
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)

  const intervalId = setInterval(nextSlide, 5000)

  onUnmounted(() => {
    clearInterval(intervalId)
    window.removeEventListener('resize', updateWidth)
  })
})
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

.slideNumerContainer > div {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.slideNumerContainer > div > div {
  flex-shrink: 0;
}
</style>
