<template>
  <div>
    <div class="bg-gray-200 px-4 mb-4 text-center">
      <div class="p-4 pt-16 flex flex-col justify-center">
        <h4 class="text-green-500 text-2xl mb-4 underline underline-offset-8">
          {{ $t('whatoffer.headtitle') }}
        </h4>
        <p class="text-black text-xl text-balance">
          {{ $t('whatoffer.headparagraph') }}
        </p>
      </div>
      <div class="relative lg:w-10/12 mx-auto top-[45px]">
        <img src="../assets/background2.jpg" alt="" />
      </div>
    </div>
  </div>
  <div class="lg:w-[60rem] mx-auto py-16 px-2">
    <p class="pt-3">
      {{ $t('whatoffer.paragraph_1') }}
    </p>
    <p class="pt-3">
      {{ $t('whatoffer.paragraph_2') }}
    </p>
  </div>
  <div class="xl:w-[75rem] px-2 py-4 mx-auto">
    <h3
      class="pb-8 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-green-700"
    >
      {{ $t('our_services') }}
    </h3>
    <div class="grid xl:grid-cols-2 grid-cols-1 gap-4">
      <RouterLink
        to="ServicesEC"
        class="relative mt-2 before:hover:opacity-80 before:transition before:duration-200 before:w-full before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gradient-to-t before:opacity-70 from-black to-transparent"
      >
        <img
          class="shadow-sm shadow-white w-full h-full object-cover"
          loading="lazy"
          src="../assets/background4.jpg"
          alt="Service Background"
        />
        <div class="absolute h-full top-0 flex flex-col justify-between p-3">
          <img class="w-8" src="../assets/logo.png" alt="Company Logo" />
          <p class="text-white">{{ $t('ourservices.1.title') }}</p>
        </div>
      </RouterLink>
      <RouterLink
        to="ServicesEIA"
        class="relative mt-2 before:hover:opacity-80 before:transition before:duration-200 before:w-full before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gradient-to-t before:opacity-70 from-black to-transparent"
      >
        <img
          class="shadow-sm shadow-white w-full h-full object-cover"
          loading="lazy"
          src="../assets/background.jpg"
          alt="Service Background"
        />
        <div class="absolute h-full top-0 flex flex-col justify-between p-3">
          <img class="w-8" src="../assets/logo.png" alt="Company Logo" />
          <p class="text-white">{{ $t('ourservices.2.title') }}</p>
        </div>
      </RouterLink>
      <RouterLink
        to="ServicesAWSQME"
        class="relative mt-2 before:hover:opacity-80 before:transition before:duration-200 before:w-full before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gradient-to-t before:opacity-70 from-black to-transparent"
      >
        <img
          class="shadow-sm shadow-white w-full h-full object-cover"
          loading="lazy"
          src="../assets/background3.jpg"
          alt="Service Background"
        />
        <div class="absolute h-full top-0 flex flex-col justify-between p-3">
          <img class="w-8" src="../assets/logo.png" alt="Company Logo" />
          <p class="text-white">{{ $t('ourservices.3.title') }}</p>
        </div>
      </RouterLink>
      <RouterLink
        to="ServicesWNRS"
        class="relative mt-2 before:hover:opacity-80 before:transition before:duration-200 before:w-full before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gradient-to-t before:opacity-70 from-black to-transparent"
      >
        <img
          class="shadow-sm shadow-white w-full h-full object-cover"
          loading="lazy"
          src="../assets/images/big/1.jpg"
          alt="Service Background"
        />
        <div class="absolute h-full top-0 flex flex-col justify-between p-3">
          <img class="w-8" src="../assets/logo.png" alt="Company Logo" />
          <p class="text-white">{{ $t('ourservices.4.title') }}</p>
        </div>
      </RouterLink>
      <RouterLink
        to="ServicesEATP"
        class="relative mt-2 before:hover:opacity-80 before:transition before:duration-200 before:w-full before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gradient-to-t before:opacity-70 from-black to-transparent"
      >
        <img
          class="shadow-sm shadow-white w-full h-full object-cover"
          loading="lazy"
          src="../assets/background5.jpg"
          alt="Service Background"
        />
        <div class="absolute h-full top-0 flex flex-col justify-between p-3">
          <img class="w-8" src="../assets/logo.png" alt="Company Logo" />
          <p class="text-white">{{ $t('ourservices.5.title') }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
