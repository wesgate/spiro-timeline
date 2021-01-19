<template>
  <div class="bg-red flex flex-col justify-center items-center min-h-screen text-white">
    <div class="">
      <h1 class="text-5xl">
        Spiro Start
      </h1>
      <nuxt-link class="bg-yellow font-bold text-center py-2 px-6 block mt-4 text-red" to="/timeline">
        Timeline
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
