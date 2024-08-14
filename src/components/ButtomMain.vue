<template>
  <RouterLink
    class="py-4 px-4 bg-gradient-to-l from-green-400 to-green-500 text-white font-extrabold rounded-full transition ease-in-out duration-500 transform hover:duration-500 hover:bg-gradient-to-l hover:from-green-400 hover:to-green-500 hover:scale-105 hover:rotate-1 hover:shadow-xl"
    :to="linker"
  >
    {{ linkText }}
  </RouterLink>
</template>
<script>
export default {
  name: 'ButtomMain',
  props: {
    linker: {
      type: String,
      default: '/'
    },
    linkText: {
      type: String,
      default: 'Learn More'
    }
  }
}
</script>
