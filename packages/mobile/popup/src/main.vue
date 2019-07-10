<template>
  <div>
    <transition :name="transitionName">
      <div
        v-if="show"
        :class="['pm-popup', `pm-popup--${position}`]"
        :style="style"
      >
        <slot></slot>
      </div>
    </transition>
    <transition name="pm-popup__mask--slider">
    <div
      v-if="show"
      class="pm-popup__mask"
      :style="{zIndex: maskZIndex}"
      @click="maskClickHandler"
    ></div>
    </transition>
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
        zIndex: ZIndex.nextZIndex(),
        transitionName: ''
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
      height: [String, Number],
      width: [String, Number],
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
          height: !this.height ? undefined : typeof this.height === 'number' ? `${this.height}rem` : this.height,
          width: !this.width ? undefined : typeof this.width === 'number' ? `${this.width}rem` : this.width
        }
      }
    },
    created() {
      this.transitionName = `pm-popup--slider--${this.position}`;
    },
    methods: {
      maskClickHandler() {
        if (this.clickMaskToClose) {
          this.$emit('change', false);
        }
      }
    }
  }
</script>
