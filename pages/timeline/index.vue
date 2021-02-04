<template>
  <div>
    <div class="bg-red flex flex-col justify-center items-center min-h-screen text-white">
      <div class="heading w-full">
        <Heading :category="currentObject.category" :title="currentObject.title" />
      </div>
      <div class="timeline-content border-l-20 border-orange text-center flex w-full h-full">
        <div class="object-rel w-1/4 text-left p-6 pr-0">
          <h1 class="text-7xl font-bold opacity-20 mb-12">
            {{ currentObject.number }}.
          </h1>
          <p>{{ currentObject.subtitle }}</p>
        </div>
        <div class="w-3/4">
          <vueper-slides
            ref="mySlides"
            class="no-shadow"
            :transition-speed="400"
            :arrows="true"
            :bullets="false"
            :visible-slides="1.8"
            :slide-ratio="800 / 1000"
            :gap="0"
            :dragging-distance="70"
            :arrows-outside="false"
            @slide="onVueperSlide($event)"
          >
            <vueper-slide
              v-for="(object) in objects"
              :key="object.number"
              :title="object.title"
            >
              <template #content>
                <div class="flex h-full relative object-holder">
                  <div class="object-details w-full flex pt-24 pl-4 pb-4 items-center justify-center">
                    <div class="object w-full">
                      <div class="object pl-10">
                        <img class="border-white border-8 block max-h-full max-w-full" :src="object.image">
                        <div class="bg-red text-left flex">
                          <p class="p-4 w-3/4">
                            {{ object.title }} ( {{ object.year | datePolarity }})
                          </p>
                          <a class="bg-orange block w-1/4 flex justify-center items-center text-2xl p-2" href="#" @click.prevent="showModal = true"><font-awesome-icon class="fa-fw" icon="search-plus" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </div>
      </div>
      <div class="timeline w-full text-center">
        <div class="p-8 flex justify-center items-center pb-20 h-full">
          <div class="relative flex justify-center items-center w-full">
            <div v-for="(cat, index) in timelineCategories" :key="index" class="text-left" :style="{ width: catWidthInPx(cat) + 'px' }">
              <p class="category-title text-xs uppercase">
                {{ cat.year }}
              </p>
              <div class="bg-white py-2">
                <div class="p-4" :class="'bg-' + cat.color" />
              </div>
            </div>
            <input
              id="myRange"
              ref="myRange"
              type="range"
              :min="earliestYear"
              :max="latestYear"
              :value="currentObject.year"
              class="slider absolute w-full"
              @change="onRangeSliderChange"
            >
          </div>
        </div>
      </div>
    </div>
    <transition v-if="showModal" name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container bg-red border-l-20 border-orange flex flex-col justify-center items-center text-white">
            <div class="modal-header flex w-full">
              <div class="w-3/4 text-left">
                <h1>{{ currentObject.title }}</h1>
                <h2>{{ currentObject.category }}</h2>
              </div>
              <div class="w-1/4 flex flex-row-reverse items-center">
                <button class="modal-default-button text-2xl p-2 bg-orange" @click="showModal = false">
                  OK
                </button>
              </div>
            </div>

            <div class="modal-body">
              <img :src="currentObject.image">
            </div>

            <div class="modal-footer flex">
              <div class="w-full text-2xl">
                {{ currentObject.descriptive }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import Heading from '~/components/heading'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: {
    Heading,
    VueperSlides,
    VueperSlide
  },
  filters: {
    datePolarity (year) {
      const dateText = year?.toString() || ''
      return dateText.startsWith('-') ? `${dateText.substring(1)} BC` : `${dateText} AD`
    }
  },
  data () {
    return {
      showModal: false,
      currentObject: this.$store.state.objects[0]
    }
  },
  computed: {
    objects () {
      return this.$store.state.objects
    },
    timelineCategories () {
      return this.$store.state.categories
    },
    earliestYear () {
      return this.timelineCategories[0].begin
    },
    latestYear () {
      return this.timelineCategories[this.timelineCategories.length - 1].end
    },
    yearWidth () {
      const totWidth = this.$refs.myRange?.offsetWidth || 984
      const totalYears = this.latestYear - this.earliestYear
      const yearWidth = totWidth / totalYears
      return yearWidth
    }
  },
  methods: {
    catWidthInPx (cat) {
      const yearsInCat = cat.end - cat.begin
      const catWidth = yearsInCat * this.yearWidth
      return catWidth
    },
    onRangeSliderChange (evt) {
      const selectedYear = evt.target.valueAsNumber
      let nearestIdx = 0
      for (let i = 0; i < this.objects.length - 1; i++) {
        const nearestObj = this.objects[nearestIdx]
        console.log(nearestObj)
        const obj = this.objects[i]
        if (Math.abs(obj.year - selectedYear) < Math.abs(nearestObj.year - selectedYear)) {
          nearestIdx = i
        }
      }
      const nearestObj = this.objects[nearestIdx]
      console.log(`nearest object is ${nearestObj.title} with year ${nearestObj.year}`)
      this.$refs.mySlides.goToSlide(nearestIdx)
      this.$refs.myRange.value = nearestObj.year
    },
    onVueperSlide (params) {
      // The last slide is 'fake' to keep styling looking corect; can't display that one.
      if (params.currentSlide.index === this.objects.length - 1) {
        console.log('naughty, naughty. You went to the last slide!')
        return this.$refs.mySlides.goToSlide(this.objects.length - 2)
      }

      this.currentObject = this.objects[params.currentSlide.index]
    }
  }
}
</script>

<style>

.heading {
  height: 25vh;
}

.timeline-content {
  height: 50vh;
}

.timeline-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/img/timeline-bg.jpg');
  filter: grayscale(100%);
  opacity: 0.15;
}

.timeline {
  height: 25vh;
}

.vueperslides,
.vueperslides__inner,
.vueperslides__parallax-wrapper {
  height: 100%;
}

.vueperslide .object {
  transform: scale(0.6, 0.6);
  transition: all 1s ease-out;
}
.vueperslide--active .object {
  transform: scale(1.2, 1.2);
  transition: all 1s ease-in;
}
.vueperslide--active .object-holder {
  z-index: 999;
}
.vueperslides__bullets {
  position: absolute;
  width: 1060px;
  left: -275px;
}

.vueperslide:last-of-type {
  visibility: hidden;
}

.vueperslides__arrows .vueperslides__arrow--prev {
  display: none;
}

.vueperslides__arrows .vueperslides__arrow--next {
  height: 300px;
  width: 150px;
  opacity: 0;
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 864px;
  height: 1704px;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
