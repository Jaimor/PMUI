<template>
  <div class="pm-navbar" :style="{zIndex: zIndex}">
    <div class="pm-navbar__left" @click="leftClickHandler">
      <pm-icon v-if="leftArrow && !showLeftSlot" icon="arrow-left"></pm-icon><span v-if="leftText && !showLeftSlot">{{leftText}}</span>
      <slot name="left"></slot>
    </div>
    <div class="pm-navbar__title"> {{title}} </div>
    <div class="pm-navbar__right" @click="rightClickHandler">
      <span v-if="rightText && !showRightSlot"> {{rightText}} </span>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  import ZIndex from 'pmui/src/utils/z-index'
  export default {
    name: "PmNavbar",
    props: {
      title: String,
      leftText: String,
      leftArrow: Boolean,
      rightText: String,
      zIndex: {
        type: Number,
        default: ZIndex.nextZIndex()
      },
      back: Boolean
    },
    computed: {
      showLeftSlot() {
        return !!this.$slots.left;
      },
      showRightSlot() {
        return !!this.$slots.right;
      }
    },
    methods: {
      leftClickHandler(e) {
        this.$emit('left-click', e);
        if (this.back) {
          if (this.$router) this.$router.back();
          else window.history.go(-1);
        }
      },
      rightClickHandler(e) {
        this.$emit('right-click', e);
      }
    }
  }
</script>
