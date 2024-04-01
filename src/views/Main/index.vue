<script setup>
import myHeader from "@/components/Header/index.vue";
import myFooter from "@/components/Footer/index.vue";
</script>

<template>
  <my-header />
  <div
    class="overflow-y-auto overflow-x-hidden py-3 px-5 box-border bg-[#E5F1FE]"
    :style="{
      height: 'calc(100vh - 124px)'
    }"
  >
    <router-view></router-view>
  </div>
  <my-footer />
</template>

<style scoped lang="less"></style>
