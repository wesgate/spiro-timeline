<template>
  <div class="p-8 flex justify-center items-end pb-20 h-full">
    <h1 class="w-1/2 leading-none font-bold text-black opacity-20">{{ category }}</h1>
    <h3 class="w-1/2 text-right font-bold">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    category: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
  h3 {
    font-size: 40px;
  }
</style>
