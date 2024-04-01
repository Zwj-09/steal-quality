<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-80 h-80" ref="animationRef"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import lottie from "lottie-web";
import animationData from "@/assets/data/hamster.json";
const animationRef = ref(null);
let lottieAnimation = null;
onMounted(() => {
  lottieAnimation = lottie.loadAnimation({
    animationData,
    loop: true,
    autoplay: true,
    renderer: "svg",
    container: animationRef.value
  });
  lottieAnimation.setSpeed(0.5);

  setTimeout(() => {
    lottieAnimation.stop();
  }, 3000);

  setTimeout(() => {
    lottieAnimation.setSpeed(2);
    lottieAnimation.play();
  }, 7000);
});
</script>
