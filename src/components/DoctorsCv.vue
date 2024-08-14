<template>
  <div class="container mx-auto">
    <div class="lg:grid grid-cols-2 gap-6 flex flex-col-reverse py-8 2xl:w-[100rem] mx-auto">
      <div class="pt-16 px-2">
        <h3 class="text-2xl text-green-600 font-semibold">
          {{ $t(`experts.${id}.About_Me.name`) }}
        </h3>
        <p>
          {{ $t(`experts.${id}.About_Me.Contact`) }}
        </p>
        <div class="mt-8">
          <h3 class="font-bold text-xl text-black">Education</h3>
          <ul class="">
            <li v-for="(educationItem, index) in $t(`experts.${id}.Education`)" :key="index">
              <span v-if="index < ed">
                {{ $t(`experts.${id}.Education[${index}]`) }}
              </span>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <h3 class="font-bold text-xl text-black">Professional Experience</h3>
          <ul>
            <li v-for="(educationItem, index) in $t(`${id}.Professional_Experience`)" :key="index">
              <span v-if="index < pro">
                {{ $t(`experts.${id}.Professional_Experience[${index}]`) }}
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
  props: {
    id: {
      type: Number,
      required: true
    },
    ed: {
      type: Number,
      required: true
    },
    pro: {
      type: Number,
      required: true
    }
  }
}
</script>
