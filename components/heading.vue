<template>
  <div class="p-0 flex justify-center items-end pb-20 h-full">
    <div class="w-1/2 leading-none font-bold text-orange px-8 text-4xl">
      <div v-html="$md.render(category.history)"></div>
    </div>
    <div class="w-1/2 bg-orange flex text-navy relative justify-center items-center pl-8">
      <div class="image py-4 w-1/3">
        <img :src="category.referenceImage + '?nf_resize=fit&w=110&h=175'" :title="category.title" />
      </div>
      <div class="text p-8">
        <h4 class="font-bold mb-2"><font-awesome-icon class="fa-fw" icon="history" /> In World History</h4>
        <div v-html="$md.render(category.reference)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    category: {
      type: Object,
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
