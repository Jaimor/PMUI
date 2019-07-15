<template>
  <div
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
  >
    <div class="pm-picker__content--top"></div>
    <div class="pm-picker__content--selected"></div>
    <div class="pm-picker__content--bottom"></div>
    <ul
        :style="{top: top + 'px'}"
    >
      <li
          v-for="(v, i) in column.values"
          :key="`${i}`"
      > {{v}} </li>
    </ul>
  </div>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "column",
    data() {
      return {
        clientY: 0,
        top: 0
      }
    },
    props: {
      column: {
        type: Object,
        required: true
      }
    },
    methods: {
      touchStart(e) {
        e.preventDefault();
        this.clientY = e.targetTouches[0].clientY;
      },
      touchMove(e) {
        e.preventDefault();
        // const ul = Constant.util.getParent(e).children[3];
        this.top += e.targetTouches[0].clientY - this.clientY;
        this.clientY = e.targetTouches[0].clientY;
        // ul.style.top = this.top + 'px';
      },
      touchEnd(e) {
        e.preventDefault();
        const integer = Math.floor(this.top / Constant.selectedHeight);
        const remainder = this.top % Constant.selectedHeight;
        if (remainder === 0) { //刚好滑动到指定位置

        } else if (remainder > 0) { //ul在初始点的下方
          if (remainder >= Constant.selectedHeight / 2) { //滑动到下一个
            this.top = (integer + 1) * Constant.selectedHeight;
          } else {  //当前不变
            this.top = integer * Constant.selectedHeight;
          }
        } else { //ul在初始位置上方
          if (-remainder >= Constant.selectedHeight / 2) {  //滑动到下一个
            this.top = integer * Constant.selectedHeight;
          } else {  //当前不变
            this.top = (integer + 1) * Constant.selectedHeight;
          }
        }
        console.log(remainder)
        console.log(this.top)
      }
    }
  }
</script>

<style scoped>

</style>
