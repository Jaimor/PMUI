<template>
  <div :class="['pm-loading', { 'pm-loading--vertical': vertical }]">
    <i :class="`pm-loading__icon pm-font pm-icon-${icon}`"></i>
    <span :class="`pm-loading__text`">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "PmLoading",

    props: {
      icon: {
        default: 'loading',
        type: String
      },
      iconSize: String,
      textSize: String,
      vertical: Boolean
    },
    mounted() {
      if (this.iconSize) this.$el.children[0].style.fontSize = this.iconSize;
      if (this.textSize) this.$el.children[1].style.fontSize = this.textSize;
    }
  }
</script>
