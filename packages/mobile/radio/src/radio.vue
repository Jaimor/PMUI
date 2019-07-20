<template>
  <div
      :class="['pm-radio']"
  >
    <div
        :class="['pm-radio__icon', { 'pm-radio__icon--disabled': disabled }]"
        :style="iconStyle"
        @click="iconClickHandler"
    >
      <pm-icon v-if="show" icon="success" color="white" font-size=".8rem"></pm-icon>
    </div>
    <label
        :class="['pm-radio__label', { 'pm-radio__label--disabled': disabled }]"
        @click="labelClickHandler"
    >
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "PmRadio",
    data() {
      return {
        iconBackgroundColor: this.value ? this.checkedColor : undefined,
        iconBorderColor: this.value ? this.checkedColor : undefined,
        checked: false,   //用于存在checkbox-group父组件的时候用于控制选中状态
      }
    },
    inject: {
      pmRadioGroup: {
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
    created() {
      if (this.pmRadioGroup) {
        this.pmRadioGroup.children.push(this);
      }
    },
    computed: {
      show() {
        let show = this.value;
        if (this.pmRadioGroup) show = this.checked;
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
          if (this.pmRadioGroup) {
            this.pmRadioGroup.modifyValue(this);
          } else {
            this.$emit('input', true);
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
