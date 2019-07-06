<template>
  <div :class="['pm-loading', { 'pm-loading--vertical': vertical }]">
    <i
      :class="`pm-loading__icon pm-font pm-icon-${icon}`"
      :style="{fontSize: iconSize}"
    ></i>
    <span :class="`pm-loading__text`"
          :style="{fontSize: iconSize}"
    >
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
    }
  }
</script>
