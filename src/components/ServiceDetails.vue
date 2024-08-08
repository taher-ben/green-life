<template>
  <div class="">
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
  </div>
  <div class="container mx-auto w-[100rem] pt-16">{{ $t(`${id}.1`) }}</div>
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
    return {}
  }
}
</script>
