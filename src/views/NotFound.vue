<template>
  <div class="bg-gray-700">
    <div class="container text-center mx-auto py-16 text-white">
      <p class="text-5xl">{{ $t('Error_404') }}</p>
    </div>
  </div>
  <div class="flex md:flex-row flex-col items-center py-32">
    <div class="md:w-6/12 my-3 flex justify-center relative">
      <img class="md:w-72 sm:w-56 md:mb-0 mb-4" src="../assets/logo.png" alt="" />
      <div class="circle small-circle -z-10"></div>
      <div class="circle medium-circle -z-10"></div>
      <div class="circle large-circle -z-10"></div>
      <div class="circle extra-large-circle -z-10"></div>
    </div>
    <div>
      <h2 class="my-3 text-3xl text-green-500 font-semibold">{{ $t('notfound') }}</h2>
      <h2 class="my-6">{{ $t('notfountext') }}</h2>
      <ButtomMain linker="/" linkText="Back Home" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
  data() {
    return {}
  }
}
</script>
<style>
.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: wave-animation 8s infinite;
  opacity: 0;
}

.small-circle {
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  animation-delay: 0s;
}

.medium-circle {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  animation-delay: 2s;
}

.large-circle {
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  animation-delay: 4s;
}

.extra-large-circle {
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  animation-delay: 6s;
}

@keyframes wave-animation {
  0%,
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }

  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
