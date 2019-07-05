<template>
  <button
    :class="[
      'pm-button', `pm-button--${type}`, `pm-button--${size}`,
      {
        'pm-button--plain': plain,
        'pm-button--disabled': disabled
      },
      `pm-button--${shape}`
    ]"
    :disabled="disabled"
    @click="clickHandler"
  >
    <i v-if="loading" :class="">
<!--      <svg v-if="loading" viewBox="25 25 50 50" class="pm-button__loading">-->
<!--        <circle cx="50" cy="50" r="20" fill="none"></circle>-->
<!--      </svg>-->
    </i>
    <i v-else-if="icon" :class="['pm-button__icon van-icon', `van-icon-${icon}`]"></i>
    <slot></slot>
  </button>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "PmButton",

    data() {
      return {

      }
    },
    props: {
      type: {
        default: Constant.typeMap.default,
        type: String
      },
      size: {
        default: Constant.buttonSizeMap.normal,
        type: String
      },
      plain: {
        default: false,
        type: Boolean
      },
      icon: String,
      loading: {
        default: false,
        type: Boolean
      },
      shape: {
        default: Constant.shapeMap.default,
        type: String
      },
      disabled: Boolean
    },
    methods: {
      clickHandler(event) {
        this.$emit("click", event);
      }
    }
  }
</script>
