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

    <div v-for="index in arrayForServices" >
      <h2 
        :key="index"  
        v-if="checkTranslation(`ourservices.${id}.${index}.title`)" 
        class="text-xl text-green-600 py-2 font-bold"
      >
        {{ $t(`ourservices.${id}.${index}.title`) }}
        <p 
          v-for="indes in towarray"  
          :key="indes" 
          :v-if="checkTranslation(`ourservices.${id}.${index}.${indes}`)" 
          class="text-black text-lg py-1"
        >
          {{ $t(`ourservices.${id}.${index}.${indes}`) }}
        </p>
      </h2>
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
