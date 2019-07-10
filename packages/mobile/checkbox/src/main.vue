<template>
  <div
    :class="['pm-checkbox']"
  >
    <div
      :class="['pm-checkbox__icon', { 'pm-checkbox__label--disabled': disabled }]"
      :style="{backgroundColor: iconBackgroundColor, borderColor: iconBorderColor}"
      @click="iconClickHandler"
    >
      <pm-icon v-if="value" icon="success" color="white" font-size=".8rem"></pm-icon>
    </div>
    <label
      :class="['pm-checkbox__label', { 'pm-checkbox__label--disabled': disabled }]"
      @click="labelClickHandler"
    >
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "PmCheckbox",
    data() {
      return {
        iconBackgroundColor: this.value ? this.checkedColor : Constant.checkbox.iconBackgroundColorDefault,
        iconBorderColor: this.value ? this.checkedColor : Constant.checkbox.iconBorderColorDefault
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      checkedColor: {
        type: String,
        default: Constant.checkbox.iconCheckedColorDefault
      },
      disabled: Boolean
    },
    watch: {
      value(v) {
        if (v) {
          this.iconBackgroundColor = this.checkedColor;
          this.iconBorderColor = this.checkedColor;
        } else {
          this.iconBackgroundColor = Constant.checkbox.iconBackgroundColorDefault;
          this.iconBorderColor = Constant.checkbox.iconBorderColorDefault;
        }
      }
    },
    created() {
      if (this.disabled) {
        this.iconBackgroundColor = Constant.checkbox.iconBorderColorDefault;
        this.iconBorderColor = Constant.checkbox.iconDisabledBorderColor
      }
    },
    methods: {
      toggle() {
        if (!this.disabled) this.$emit('input', !this.value);
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
