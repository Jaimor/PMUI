<template>
  <i :class="['pm-font', `pm-icon-${icon}`]" :style="{color: color, fontSize: size}"></i>
</template>

<script>
  export default {
    name: "PmIcon",
    props: {
      icon: {
        type: String,
        required: true
      },
      color: String,
      size: String
    }
  }
</script>
