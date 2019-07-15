<template>
  <div class="pm-picker">
    <div class="pm-picker__header">
      <span class="pm-picker__header__title"> {{title}} </span>
      <span class="pm-picker__header__cancel">取消</span>
      <span class="pm-picker__header__done">完成</span>
    </div>
    <div class="pm-picker__content">
      <div
        class="pm-picker__content--touch-event"
        v-for="(col, index) in columns" :key="`${ulKey}_${index}`"
        :style="{width: `${100/columns.length}%`}"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
      >
        <div class="pm-picker__content--top"></div>
        <div class="pm-picker__content--selected"></div>
        <div class="pm-picker__content--bottom"></div>
        <ul
          :style="{top: top}"
        >
          <li
            v-for="(v, i) in col.values"
            :key="`${liKey}_${i}`"
          > {{v}} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "PmPicker",
    data() {
      return {
        ulKey: Constant.ulKey,
        liKey: Constant.liKey,
        clientY: 0,
        top: 0
      }
    },
    props: {
      title: String,
      columns: {
        type: Array,
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
        const ul = Constant.util.getParent(e).children[3];
        this.top += e.targetTouches[0].clientY - this.clientY;
        console.log(this.top)
        ul.style.top = this.top + 'px';
        // this.$nextTick(_ => {
        //   ul.style.top = top + 'px';
        // })
      },
      touchEnd(e) {
        console.log("end")
      }
    }
  }
</script>
