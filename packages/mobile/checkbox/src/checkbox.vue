<template>
  <div
    :class="['pm-checkbox']"
  >
    <div
      :class="['pm-checkbox__icon', { 'pm-checkbox__icon--disabled': disabled }]"
      :style="iconStyle"
      @click="iconClickHandler"
    >
      <pm-icon v-if="show" icon="success" color="white" font-size=".8rem"></pm-icon>
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
        iconBackgroundColor: this.value ? this.checkedColor : undefined,
        iconBorderColor: this.value ? this.checkedColor : undefined,
        checked: false,   //用于存在checkbox-group父组件的时候用于控制选中状态
        parent: this.pmCheckboxGroup
      }
    },
    inject: {
      pmCheckboxGroup: {
        default: null
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

      },
      checked(v) {
        // this.parent.modifyValue();
      }
    },
    created() {
      if (this.parent) {
        this.parent.children.push(this);
      }
    },
    computed: {
      show() {
        let show;
        if (this.parent) {
          show = this.checked;
        } else {
          show = this.value;
        }
        if (show) {
          this.iconBackgroundColor = this.checkedColor;
          this.iconBorderColor = this.checkedColor;
        } else {
          this.iconBackgroundColor = undefined;
          this.iconBorderColor = undefined;
        }
        return show;
      },
      iconStyle() {
        if (this.disabled) return {};
        return {
          backgroundColor: this.iconBackgroundColor,
          borderColor: this.iconBorderColor
        }
      }
    },
    methods: {
      toggle() {
        if (!this.disabled) {
          if (this.parent) {
            // this.checked = !this.checked;
            this.parent.modifyValue(this, !this.checked);
          } else {
            this.$emit('input', !this.value);
          }
        }
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
