<template>
  <div class="container mx-auto">
    <div class="lg:grid grid-cols-2 gap-6 flex flex-col-reverse py-8 2xl:w-[100rem] mx-auto">
      <div class="pt-16 px-1">
        <h3 class="text-2xl text-green-600 font-semibold">
          {{ $t('Dr_Najib_Ali_Bishr.About_Me.name') }}
        </h3>
        <p>
          {{ $t('Dr_Najib_Ali_Bishr.About_Me.Contact') }}
        </p>
        <div class="mt-16">
          <h3 class="font-bold text-xl text-black">Education</h3>
          <ul class="">
            <li v-for="(educationItem, index) in $t('Dr_Najib_Ali_Bishr.Education')" :key="index">
              <span v-if="index < 4">
                {{ $t(`Dr_Najib_Ali_Bishr.Education[${index}]`) }}
              </span>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <h3 class="font-bold text-xl text-black">Professional Experience</h3>
          <ul>
            <li
              v-for="(educationItem, index) in $t('Dr_Najib_Ali_Bishr.Professional_Experience')"
              :key="index"
            >
              <span v-if="index < 8">
                {{ $t(`Dr_Najib_Ali_Bishr.Professional_Experience[${index}]`) }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center items-start">
        <img class="w-96 shadow-2xl rounded-md" src="../assets/Dectors/1.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educationList: []
    }
  },
  mounted() {
    this.educationList = this.$t('Dr_Najib_Ali_Bishr.Education')
    console.log(this.educationList)
  },
  computed: {
    educationArray() {
      return this.$t('Dr_Najib_Ali_Bishr.Education[]')
    },
    educationLength() {
      return this.educationArray.length
    }
  }
}
</script>
