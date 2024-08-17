<template>
  <div>
    <div class="grid lg:grid-cols-2 grid-cols-1">
      <div class="bg-green-950 p-4 flex flex-col justify-center">
        <h4 class="text-green-500 underline underline-offset-4">Our Company</h4>
        <p class="text-white text-xl text-balance">
          Based on the principles of preserving the environment, protecting its resources, and
          achieving ecological balance, Green Life was established as an environmental consultancy
          company specializing in conducting environmental assessments according to standard
          specifications and approved technical standards.
        </p>
      </div>
      <div class="h-full">
        <img
          class="w-full h-full object-cover"
          src="../assets/background2.jpg"
          alt="Company Background"
        />
      </div>
    </div>
  </div>
  <div class="lg:w-[60rem] mx-auto py-16 px-2">
    <p class="pt-3">
      We at Green Life Company offer a wide range of services aimed at improving the environment and
      achieving sustainable development. Our services focus on providing innovative and effective
      solutions to current environmental problems, with a commitment to sound environmental
      practices and international standards.
    </p>
    <p class="pt-3">
      Explore our diverse services and discover how we can help you achieve your environmental
      goals. Through our services, we aim to support local communities and businesses on their
      journey towards a more sustainable future. We provide solutions in the fields of sustainable
      agriculture, waste management, renewable energy, environmental awareness, and other vital
      areas.
    </p>
  </div>
  <!-- <div class="xl:w-[75rem] px-2 py-4 mx-auto">
    <h3
      class="pb-8 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-green-700"
    >
      Our Services
    </h3>
    <div class="grid xl:grid-cols-2 grid-cols-1 gap-4">
      <RouterLink
        v-for="index in services"
        :key="index"
        :to="{ name: 'ServiceDetails', params: { id: index } }"
        class="relative mt-2 before:hover:opacity-80 before:transition before:duration-200 before:w-full before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gradient-to-t before:opacity-70 from-black to-transparent"
      >
        <img
          class="shadow-sm shadow-white w-full h-full object-cover"
          loading="lazy"
          :src="images[index - 1]"
          alt="Service Background"
        />
        <div class="absolute h-full top-0 flex flex-col justify-between p-3">
          <img class="w-8" src="../assets/logo.png" alt="Company Logo" />
          <p class="text-white">Environmental Impact Studies</p>
        </div>
      </RouterLink>
    </div>
  </div> -->
</template>

<script>
import background1 from '@/assets/services/background1.jpg'
import background2 from '@/assets/services/background2.jpg'
import background3 from '@/assets/services/background3.jpg'
import background4 from '@/assets/services/background4.jpg'
import background5 from '@/assets/services/background5.jpg'
export default {
  data() {
    return {
      services: [1, 2, 3, 4, 5],
      images: [background1, background2, background3, background4, background5]
    }
  }
}
</script>
