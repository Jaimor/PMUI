<template>
  <div
    class="pm-row"
    :style="{marginLeft: margin, marginRight: margin}"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PmRow",
    props: {
      gutter: {
        default: 0,
        type: [String, Number]
      }
    },
    computed: {
      margin() {
        return `-${Number(this.gutter) / 2}rem`
      }
    }
  }
</script>
