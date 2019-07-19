<template>
  <div
    :class="['pm-col', `pm-col--span-${span}`, {[`pm-col--offset-${offset}`]: offset}]"
    :style="{paddingLeft: padding, paddingRight: padding}"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PmCol",
    props: {
      span: {
        type: [String, Number],
        required: true
      },
      offset: {
        type: [String, Number],
        default: 0
      }
    },
    computed: {
      padding() {
        if (this.$parent.gutter) return `${Number(this.$parent.gutter) / 2}rem`;
        return undefined;
      }
    }
  }
</script>
