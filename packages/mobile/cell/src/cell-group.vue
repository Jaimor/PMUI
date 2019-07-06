<template>
  <div class="pm-cell-group">
    <div
      v-if="title"
      :class="['pm-cell-group__title', `pm-cell-group__title--${titlePosition}`]"
      :style="{fontSize: titleSize}"
    >
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "PmCellGroup",
    props: {
      title: String,
      titleSize: String,
      titlePosition: {
        default: Constant.group.titlePosition.left,
        type: String
      }
    }
  }
</script>
