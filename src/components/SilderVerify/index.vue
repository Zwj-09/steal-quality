<template>
  <div
    class="silder-range"
    :class="rangeStatus ? 'success' : ''"
    @mousedown="rangeMove"
  >
    <i :class="rangeStatus ? successIcon : startIcon"></i>
    {{ rangeStatus ? successText : startText }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["success", "failed"]);

const successIcon = "el-icon-success";
const successText = "验证成功";
const startIcon = "el-icon-d-arrow-right";
const startText = "拖动滑块到最右侧";

const rangeStatus = ref("");
let disX = 0;

const rangeMove = (e) => {
  const ele = e.target;
  const startX = e.clientX;
  const eleWidth = ele.offsetWidth;
  const parentWidth = ele.parentElement.offsetWidth;
  const MaxX = parentWidth - eleWidth;
  if (rangeStatus.value) {
    return false;
  }
  const moveHandler = (e) => {
    const endX = e.clientX;
    disX = endX - startX;
    if (disX <= 0) {
      disX = 0;
    }
    if (disX >= MaxX - eleWidth) {
      disX = MaxX;
    }
    ele.style.transition = ".1s all";
    ele.style.transform = "translateX(" + disX + "px)";
    e.preventDefault();
  };
  const upHandler = () => {
    if (disX !== MaxX) {
      ele.style.transition = ".5s all";
      ele.style.transform = "translateX(0)";
      emit("failed", rangeStatus.value);
    } else {
      rangeStatus.value = true;
      emit("success", rangeStatus.value);
    }
    document.removeEventListener("mousemove", moveHandler);
    document.removeEventListener("mouseup", upHandler);
  };
  document.addEventListener("mousemove", moveHandler);
  document.addEventListener("mouseup", upHandler);
};
</script>

<style scoped>
.silder-range {
  background-color: #e3e4e6;
  position: relative;
  transition: 1s all;
  user-select: none;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
}
.silder-range i {
  position: absolute;
  left: 0;
  width: 60px;
  height: 100%;
  color: #919191;
  background-color: #fff;
  border: 1px solid #eee;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.silder-range.success {
  background-color: #7ac23c;
  color: #fff;
}
.silder-range.success i {
  color: #7ac23c;
}
</style>
