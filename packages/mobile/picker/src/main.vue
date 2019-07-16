<template>
  <div class="pm-picker">
    <div class="pm-picker__header">
      <span class="pm-picker__header__title"> {{title}} </span>
      <span class="pm-picker__header__cancel" @click="cancel">取消</span>
      <span class="pm-picker__header__done" @click="done">完成</span>
    </div>
    <div class="pm-picker__content">
      <column
          class="pm-picker__content--touch-event"
          v-for="(col, index) in columns" :key="`${ulKey}_${index}`"
          :column="col"
          :selected="values[index] ? values[index] : 0"
          :style="{width: `${100/columns.length}%`}"
          @touch-end="touchEnd"
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
        children: [],
        values: [...this.value]
      }
    },
    components: { Column },
    props: {
      title: String,
      columns: {
        type: Array,
        required: true
      },
      value: Array
    },
    watch: {
      values(v) {
        this.$emit('input', v);
      }
    },
    methods: {
      touchEnd(childIndex, selectedIndex) {
        if (childIndex > -1) {
          const values = [...this.values];
          values[childIndex] = selectedIndex;
          this.values = values;
        }
      },
      cancel (e) {
        this.$emit('on-cancel', e);
      },
      done (e) {
        this.$emit('on-done', e);
      }
    },
    beforeDestroy() {

    }
  }
</script>
