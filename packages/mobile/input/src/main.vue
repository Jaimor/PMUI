<template>
  <div
    class="pm-cell pm-input"
  >
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
    />
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
      value: String
    }
  }
</script>
