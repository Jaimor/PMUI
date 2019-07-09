<template>
  <div>
    <transition name="pm-popup--slider">
      <div
        v-if="show"
        :class="['pm-popup', `pm-popup--${position}`]"
        :style="style"
      >
        <slot></slot>
      </div>
    </transition>
    <div
      v-if="show"
      class="pm-popup__mask"
      :style="{zIndex: maskZIndex}"
      @click="maskClickHandler"
    ></div>
  </div>
</template>

<script>
  import Constant from './constant.js';
  import StrUtil from 'pmui/src/utils/str/str-util.js';
  import ZIndex from 'pmui/src/utils/z-index/';
  export default {
    name: "PmPopup",
    data() {
      return {
        maskZIndex: ZIndex.nextZIndex(),
        zIndex: ZIndex.nextZIndex()
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: Constant.positionMap.center
      },
      height: {
        type: [String, Number],
        required: true
      },
      clickMaskToClose: {
        type: Boolean,
        default: true
      }
    },
    model: {
      prop: 'show',
      event: 'change'
    },
    computed: {
      style() {
        return {
          zIndex: this.zIndex,
          height: this.height
        }
      }
    },
    methods: {
      maskClickHandler() {
        if (this.clickMaskToClose) {
          console.log("abc")
          this.$emit('change', false);
        }
      }
    }
  }
</script>
