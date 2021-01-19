<template>
  <div class="bg-red flex flex-col justify-center items-center min-h-screen text-white">
    <div class="heading w-full">
      <Heading :category="currentObject.categoryTitle" :title="currentObject.title" />
    </div>
    <div class="timeline-content border-l-20 border-orange text-center w-full">
      <Object :current-object="currentObject" :next-object="nextObject" />
    </div>
    <div class="timeline w-full text-center">
      <Timeline :timeline-categories="timelineCategories" />
    </div>
  </div>
</template>

<script>
import Heading from '~/components/heading'
import Object from '~/components/object'
import Timeline from '~/components/timeline'
export default {
  components: {
    Heading,
    Object,
    Timeline
  },
  data () {
    return {
      currentObject: {
        title: 'Sample Title',
        number: 2,
        category: 'category-2',
        categoryTitle: 'Category 2',
        descriptive: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus molestie eleifend. Pellentesque mattis nunc laoreet, pellentesque libero suscipit, lobortis enim.'
      },
      nextObject: {
        title: 'Sample Next Object',
        number: 3,
        category: 'category-2',
        categoryTitle: 'Category 2',
        descriptive: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus molestie eleifend. Pellentesque mattis nunc laoreet, pellentesque libero suscipit, lobortis enim.'
      },
      objects: [
        {
          title: 'Title',
          number: 1,
          category: 'category-2',
          categoryTitle: 'Category 2',
          descriptive: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus molestie eleifend. Pellentesque mattis nunc laoreet, pellentesque libero suscipit, lobortis enim.'
        },
        {
          title: 'Sample Title 2',
          number: 2,
          category: 'category-2',
          categoryTitle: 'Category 2',
          descriptive: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus molestie eleifend. Pellentesque mattis nunc laoreet, pellentesque libero suscipit, lobortis enim.'
        },
        {
          title: 'Sample Next Object',
          number: 3,
          category: 'category-2',
          categoryTitle: 'Category 2',
          descriptive: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus molestie eleifend. Pellentesque mattis nunc laoreet, pellentesque libero suscipit, lobortis enim.'
        }
      ],
      timelineCategories: [
        {
          title: 'Category 1',
          slug: 'category-1',
          sort: 1,
          year: '400BC - 700BC',
          color: 'blue'
        },
        {
          title: 'Category 2',
          slug: 'category-2',
          sort: 2,
          year: '700BC - 900BC',
          color: 'red'
        },
        {
          title: 'Category 3',
          slug: 'category-3',
          sort: 3,
          year: '900BC - 100AD',
          color: 'orange'
        },

        {
          title: 'Category 3',
          slug: 'category-3',
          sort: 4,
          year: '100AD - 700AD',
          color: 'blue'
        }
      ]
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
.heading {
  height: 25vh;
}

.timeline-content {
  height: 50vh;
  position: relative;
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
</style>
