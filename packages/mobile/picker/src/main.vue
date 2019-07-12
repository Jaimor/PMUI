<template>
  <div class="pm-picker">
    <div class="pm-picker__header">
      <span class="pm-picker__header__title"> {{title}} </span>
      <span class="pm-picker__header__cancel">取消</span>
      <span class="pm-picker__header__done">完成</span>
    </div>
    <div class="pm-picker__content">
      <div class="pm-picker__content--first"></div>
      <div class="pm-picker__content--selected"></div>
      <div class="pm-picker__content--bottom"></div>
      <ul v-for="(col, index) in columns" :key="`${ulKey}_${index}`" :style="{width: `${100/columns.length}%`}">
        <li v-for="(v, i) in col.values" :key="`${liKey}_${i}`"> {{v}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "PmPicker",
    data() {
      return {
        ulKey: Constant.ulKey,
        liKey: Constant.liKey
      }
    },
    props: {
      title: String,
      columns: {
        type: Array,
        required: true
      }
    }
  }
</script>
