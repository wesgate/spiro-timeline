<template>
  <div class="flex h-full relative z-10">
    <div class="object-rel w-1/4 text-left p-6 pr-0">
        <h1 class="text-7xl font-bold opacity-20 mb-12">{{ currentObject.number }}.</h1>
        <p>{{ currentObject.descriptive }}</p>
    </div>
    <div class="object-details w-3/4 flex pt-4 pb-4 items-center justify-center">
      <div class="object w-3/4">
        <div class="object py-4 px-6">
            <img class="border-white border-8 block max-h-full max-w-full" src="https://placehold.it/800x1000" />
            <div class="bg-red text-left flex">
                <p class="p-4 w-3/4">{{ currentObject.title }}</p>
                <a class="bg-orange block w-1/4 flex justify-center items-center text-2xl p-2" href="#"><font-awesome-icon class="fa-fw" icon="search-plus" /></a>
            </div>
        </div>
      </div>
      <div class="next-object w-1/4">
        <div class="object hide-detail">
            <a href="#">
                <img class="border-white border-4 block max-h-full max-w-full" src="https://placehold.it/1000x800" />
                <div class="bg-red text-left flex object-detail">
                    <p class="p-4 w-3/4">{{ currentObject.title }}</p>
                    <a class="bg-orange block w-1/4 flex justify-center items-center text-2xl p-2" href="#"><font-awesome-icon class="fa-fw" icon="search-plus" /></a>
                </div>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    number: {
      type: Number,
      default: 0
    },
    currentObject: {
      type: Object,
      default: () => {}
    },
    nextObject: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style scoped>
.next-object {
    overflow: hidden;
}

.next-object .object {
    margin-right: -25%;
}

.hide-detail .object-detail {
    height: 20px;
}
</style>
