<template>
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
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
