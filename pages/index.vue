<template>
  <div class="bg-red h-screen">
    <div class="bg-navy absolute h-screen w-screen opacity-90" />
    <div class="relative h-screen flex items-center justify-center">
      <div class="control-wrapper bg-red w-full p-12 pt-32">
        <Logo />
        <h1 class="text-center text-3xl text-white uppercase tracking-widest leading-tight mt-8 mb-12">
          Explore Spiro and the Mississippian World through a virtual timeline
        </h1>
        <h3>
          <nuxt-link class="video-play-button text-center" to="/timeline/">
            <span class="uppercase text-white text-2xl font-bold">Explore</span>
          </nuxt-link>
        </h3>
      </div>
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
.control-wrapper {
  background-image: url('~assets/images/border.jpg');
  background-repeat: repeat-x;
  background-size: 35px;
}

.video-play-button {
  position: absolute;
  z-index: 10;
  top: 73vh;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  display: block;
  width: 260px;
  height: 60px;
  /* background: #fa183d; */
  border-radius: 50%;
  padding: 18px 20px 18px 28px;
}

.video-play-button:before {
  @apply bg-orange;
  content: "";
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  animation: pulse-border 1500ms ease-out infinite;
}

.video-play-button:after {
  @apply bg-orange;
  content: "";
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  transition: all 200ms;
}

.video-play-button span {
  display: block;
  position: relative;
  z-index: 3;
}

@keyframes pulse-border {
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
}
</style>
