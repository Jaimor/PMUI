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
  import DatetimeConstant from '../../datetime-picker/src/constant.js';
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
      value: Array,
      type: { //只用于datetime-picker
        type: String,
        default: ''
      }
    },
    watch: {
      values(v) {
        this.$emit('input', v);
      }
    },
    methods: {
      touchEnd(childIndex, selectedIndex, flag) {
        if (childIndex > -1) {
          const values = [...this.values];
          values[childIndex] = selectedIndex;

          if (!flag) {
            switch (this.type) {
              case DatetimeConstant.typeMap.date:
                if (childIndex !== 2) {
                  const year = this.columns[0].values[values[0]], month = this.columns[1].values[values[1]],
                    dayIndex = values[2];
                  const days = DatetimeConstant.util.getCurrentMonthDays(year, month);
                  DatetimeConstant.util.setTop(this.children[2], year, month, dayIndex, values, 2);
                  this.columns[2].values = days.values;
                }
                break;
              case DatetimeConstant.typeMap.datetime:
                if (childIndex === 0 || childIndex === 1) {
                  const year = this.columns[0].values[values[0]], month = this.columns[1].values[values[1]],
                    dayIndex = values[2];
                  const days = DatetimeConstant.util.getCurrentMonthDays(year, month);
                  DatetimeConstant.util.setTop(this.children[2], year, month, dayIndex, values, 2);
                  this.columns[2].values = days.values;
                }
                break;
            }
          }

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
