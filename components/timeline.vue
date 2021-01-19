<template>
  <div class="p-8 flex justify-center items-center pb-20 h-full">
      <div class="relative flex justify-center items-center w-full">
        <div v-for="(cat, index) in timelineCategories" :key="index" class="w-1/4 text-left">
            <p class="category-title text-xs uppercase">{{ cat.year }}</p>
            <div class="bg-white py-2">
                <div class="p-4" :class="'bg-' + cat.color"></div>
            </div>
        </div>
        <input type="range" min="1" max="100" value="35" class="slider absolute w-full" id="myRange">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
   timelineCategories: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
  h3 {
    font-size: 40px;
  }
  
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 100px;
    background: none;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    top: 1rem;
    }

    .slider:hover {
    opacity: 1;
    }

    .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 50px;
    height: 100px;
    background: #fff;
    cursor: pointer;
    }

</style>
