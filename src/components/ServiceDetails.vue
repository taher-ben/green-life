<template>
  <div>
    <div class="grid lg:grid-cols-2 grid-cols-1">
      <div class="bg-green-950 p-4 flex flex-col justify-center">
        <h4 class="text-green-500 underline underline-offset-4">Our Company</h4>
        <p class="text-white text-xl text-balance">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequuntur iure ea
          expedita exercitationem voluptatibus doloribus quidem quasi earum odio delectus neque quis
          voluptatem necessitatibus possimus, optio debitis rem fugit.
        </p>
      </div>
      <div class="h-full">
        <img class="" src="../assets/background2.jpg" alt="Background image" />
      </div>
    </div>
    <div>
      <h2>{{ $t('ourservices.1.title') }}</h2>
      <div v-for="index in arrayForServices" :key="index">
        <h3 v-if="checkTranslation(`ourservices.1.title_${index}`)">
          {{ $t(`ourservices.1.title_${index}`) }}
        </h3>
        <ul class="list-disc list-inside">
          <li v-if="checkTranslation(`ourservices.1.${index}`)">
          {{ $t(`ourservices.1.${index}`) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      arrayForServices: Array.from({ length: 10 }, (_, i) => i + 1)
    };
  },
  methods: {
    checkTranslation(key) {
      const translation = this.$t(key);
      return translation && translation.trim() !== key; 
    }
  }
}
</script>
