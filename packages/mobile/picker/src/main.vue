<template>
  <div class="pm-picker">
    <div class="pm-picker__header">
      <span class="pm-picker__header__title"> {{title}} </span>
      <span class="pm-picker__header__cancel">取消</span>
      <span class="pm-picker__header__done">完成</span>
    </div>
    <div class="pm-picker__content">
      <column
          class="pm-picker__content--touch-event"
          v-for="(col, index) in columns" :key="`${ulKey}_${index}`"
          :column="col"
          :style="{width: `${100/columns.length}%`}"
      >
      </column>
    </div>
  </div>
</template>

<script>
  import Constant from './constant.js';
  import Column from './column.vue';
  export default {
    name: "PmPicker",
    data() {
      return {
        ulKey: Constant.ulKey,
        liKey: Constant.liKey,
        clientY: 0,
        top: 0
      }
    },
    components: { Column },
    props: {
      title: String,
      columns: {
        type: Array,
        required: true
      }
    },
    methods: {

    }
  }
</script>
