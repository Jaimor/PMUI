<template>
  <div
    class="pm-cell pm-input"
  >
    <i v-if="iconClass" :class="['pm-cell__icon', iconClass]" style="padding-right:.4rem;"></i>
    <pm-icon v-else-if="icon" class="pm-cell__icon" :icon="icon" style="padding-right:.4rem;"></pm-icon>
    <label
      :class="['pm-input__label', `pm-input__label--${labelAlign}`]"
      v-if="label"
      :for="id"
    >
      <span v-if="required" style="color:red;">*</span> {{ label }}
    </label>
    <input
      v-if="type !== 'textarea'"
      class="pm-input__input"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      @input="inputHandler"
      @change="changeHandler"
    />
    <textarea v-if="type === 'textarea'"></textarea>
  </div>
</template>

<script>
  import StrUtil from 'pmui/src/utils/str/str-util.js';
  export default {
    name: "PmInput",
    data() {
      return {
        id: `${this.label}_${StrUtil.generateRandomStr(3)}`
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
