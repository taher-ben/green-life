<template>
  <div class="">
    <div class="bg-gray-200 px-4 mb-4 text-center">
      <div class="p-4 pt-16 flex flex-col justify-center">
        <h4 class="text-green-500 text-2xl mb-4 underline underline-offset-8">
          {{ $t(`news.${id}.type`) }}
        </h4>
        <p class="text-black text-xl text-balance">
          {{ $t(`news.${id}.title`) }}
        </p>
      </div>
      <div class="relative top-[45px]">
        <img :src="images[id]" alt="" />
      </div>
    </div>
    <div class="py-16 lg:w-[60rem] container mx-auto">
      <p class="py-2" v-for="(text, index) in propr" :key="index">
        {{ $t(`news.${id}.paragraph_${text}`) }}
      </p>
    </div>
  </div>
</template>
<script>
import background1 from '../assets/images/big/4.jpg'
import background2 from '../assets/images/big/2.jpg'
export default {
  data() {
    return {
      images: [background2, background1],
      propr: null
    }
  },
  methods: {
    chaning() {
      this.propr = parseInt(this.pro, 10)
    }
  },
  mounted() {
    this.chaning()
  },
  props: {
    id: {
      type: String,
      required: true
    },
    pro: {
      type: String,
      required: true
    }
  }
}
</script>
