<template>
  <pm-icon
    :icon="icon"
    :size="size"
    :color="color"
  ></pm-icon>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "icon",
    data() {
      return {
        color: Constant.colorDefault
      }
    },
    props: {
      icon: {
        type: String,
        default: Constant.iconDefault
      },
      size: {
        type: String,
        default: Constant.sizeDefault
      }
    },
    created() {
      if (this.$parent.children) this.$parent.children.push(this);
    }
  }
</script>
