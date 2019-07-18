<template>
  <div
    class="pm-cell pm-input"
  >
    <i v-if="iconClass" :class="['pm-cell__icon', iconClass]"></i>
    <pm-icon v-else-if="icon" class="pm-cell__icon" :icon="icon"></pm-icon>
    <div class="pm-cell__content">
      <div class="pm-cell__content--left" :style="{width: widthLeft}">
        <label
          :class="['pm-input__label', `pm-input__label--${labelAlign}`]"
          v-if="label"
          :for="id"
        >
          <span v-if="required" style="color:red;">*</span> {{ label }}
        </label>
        <input
          class="pm-input__input"
          :id="id"
          :type="type"
          :placeholder="placeholder"
          @input="inputHandler"
          @change="changeHandler"
        />
      </div>
      <div class="pm-cell__content--right" :style="{width: widthRight}">
        <div style="position: fixed;">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StrUtil from 'pmui/src/utils/str/str-util.js';
  export default {
    name: "PmInput",
    data() {
      return {
        id: `${this.label}_${StrUtil.generateRandomStr(3)}`,
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: null
      },
      labelAlign: {
        type: String,
        default: 'left'
      },
      required: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      value: [String, Number],
      icon: String,
      iconClass: String
    },
    computed: {
      widthLeft() {
        if (this.$slots.button) return '80%';
        else return '100%';
      },
      widthRight() {
        if (this.$slots.button) return '20%';
        return '0%';
      }
    },
    methods: {
      inputHandler(e) {
        this.$emit('input', e.target.value);
      },
      changeHandler(e) {
        this.$emit('change', e.target.value);
      }
    }
  }
</script>
