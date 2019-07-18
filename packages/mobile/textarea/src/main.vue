<template>
  <div
    class="pm-cell pm-textarea"
  >
    <i v-if="iconClass" :class="['pm-cell__icon', iconClass]"></i>
    <pm-icon v-else-if="icon" class="pm-cell__icon" :icon="icon"></pm-icon>
    <div class="pm-textarea__box pm-cell__content">
      <label
        :class="['pm-textarea__label', `pm-textarea__label--${labelAlign}`]"
        v-if="label"
        :for="id"
      >
        <span v-if="required" style="color:red;">*</span> {{ label }}
      </label>
      <textarea
        class="pm-textarea__textarea"
        :placeholder="placeholder"
        @input="inputHandler"
        @change="changeHandler"
      ></textarea>
    </div>
  </div>
</template>

<script>
  import StrUtil from 'pmui/src/utils/str/str-util.js';
  export default {
    name: "PmTextarea",
    data() {
      return {
        id: `${this.label}_${StrUtil.generateRandomStr(3)}`,
      }
    },
    props: {
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
