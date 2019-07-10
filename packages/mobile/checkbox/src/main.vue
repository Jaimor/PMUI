<template>
  <div
    :class="['pm-checkbox']"
  >
    <div
      class="pm-checkbox__icon"
      :style="{backgroundColor: iconBackgroundColor}"
      @click="iconClickHandler"
    >
      <pm-icon v-if="value" icon="success" color="white" font-size=".8rem"></pm-icon>
    </div>
    <div
      class="pm-checkbox__label"
      @click="labelClickHandler"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PmCheckbox",
    data() {
      return {
        iconBackgroundColor: 'white'
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      checkedColor: {
        type: String,
        default: '#1989fa'
      }
    },
    watch: {
      value(v) {
        if (v) {
          this.iconBackgroundColor = this.checkedColor;
        } else {
          this.iconBackgroundColor = 'white';
        }
      }
    },
    methods: {
      toggle() {
        this.$emit('input', !this.value);
      },
      iconClickHandler() {
        this.toggle();
      },
      labelClickHandler() {
        this.toggle();
      }
    }
  }
</script>

<style scoped>

</style>
