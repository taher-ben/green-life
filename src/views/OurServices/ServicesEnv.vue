<template>
    <div>
      <div class="grid lg:grid-cols-2 grid-cols-1">
        <div class="bg-green-950 p-4 flex flex-col justify-center">
          <h4 
            v-if="checkTranslation(`ourservices.${id}.title`)" 
            class="text-green-500 underline underline-offset-4"
          >
            {{ $t(`ourservices.${id}.title`) }}
          </h4>
          <p 
            v-if="checkTranslation('ourservices.1.head')" 
            class="text-white text-xl text-balance"
          >
            {{ $t('ourservices.1.head') }}
          </p>
        </div>
        <div class="h-full">
          <img class="" src="../assets/background2.jpg" alt="Background image" />
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
        arrayForServices: Array.from({ length: 5 }, (_, i) => i + 1), // مصفوفة من 1 إلى 5
        towarray: Array.from({ length: 4 }, (_, i) => i + 1) // مصفوفة من 1 إلى 4
      };
    },
  methods: {
    checkTranslation(key) {
      const translation = this.$t(key);
      return translation  && translation.trim() == key;
    }
  }
  }
  </script>
  