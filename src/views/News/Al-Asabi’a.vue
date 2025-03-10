<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        class="relative before:hover:opacity-80 before:transition before:duration-200 before:w-full before:absolute before:bottom-0 before:left-0 before:h-full before:bg-gradient-to-t before:opacity-70 from-black to-transparent"
      >
        <img
          class="shadow-sm shadow-white w-full h-full object-cover"
          loading="lazy"
          src="../assets/background.jpg"
          alt="Service Background"
        />
        <div class="absolute h-full top-0 flex flex-col justify-between p-3">
          <img class="w-8" src="../assets/logo.png" alt="Company Logo" />
          <p class="text-white">{{ $t('ourservices.1.title') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
