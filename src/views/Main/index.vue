<script setup>
// import { useRouter } from "vue-router";
import myHeader from "@/components/Header/index.vue";
import myFooter from "@/components/Footer/index.vue";

// const router = useRouter();

// const transitionName = ref();
// router.beforeEach((to, from) => {
//   if (to.meta.index > from.meta.index) {
//     // 从右往左动画
//     transitionName.value = "slide-right";
//   } else if (to.meta.index < from.meta.index) {
//     // 从左往右动画
//     transitionName.value = "slide-left";
//   } else {
//     transitionName.value = "";
//   }
// });
</script>

<template>
  <my-header />
  <div
    class="overflow-y-auto overflow-x-hidden py-3 px-5 box-border bg-[#E5F1FE]"
    :style="{
      height: 'calc(100vh - 124px)'
    }"
  >
    <router-view #default="{ Component }">
      <!-- <transition :name="transitionName"> -->
      <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </div>
  <my-footer />
</template>

<style scoped lang="less">
// @slide-duration: 0.4s;
// .slide-left-enter-active {
//   animation: slide-left-in @slide-duration;
// }
// .slide-left-leave-active {
//   animation: slide-left-out @slide-duration;
// }
// .slide-right-enter-active {
//   animation: slide-right-in @slide-duration;
// }
// .slide-right-leave-active {
//   animation: slide-right-out @slide-duration;
// }
// @keyframes slide-left-in {
//   0% {
//     transform: translateX(-200%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }
// @keyframes slide-left-out {
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(100%);
//   }
// }
// @keyframes slide-right-in {
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }
// @keyframes slide-right-out {
//   0% {
//     transform: translateX(0%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }
</style>
