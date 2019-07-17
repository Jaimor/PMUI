<template>
  <pm-picker
    :title="title"
    :columns="columns"
    :type="type"
    v-model="values"
    @on-cancel="cancel"
    @on-done="done"
  ></pm-picker>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "PmDatetimePicker",
    data() {
      return {
        columns: [
          // {
          //   values: []  //年
          // },
          // {
          //   values: []  //月
          // },
          // {
          //   values: []  //日
          // }
        ],
        values: [...this.value]
      }
    },
    props: {
      title: String,
      years: {
        type: Array,
        default: () => {
          return [new Date().getFullYear() - 10, new Date().getFullYear() + 10];
        }
      },
      type: {
        type: String,
        default: Constant.typeMap.datetime
      },
      value: Array
    },
    watch: {
      values(v) {
        const arr = [];
        v.forEach((item, i) => {
          arr.push(this.columns[i].values[item]);
        });
        this.$emit('input', arr);
      }
    },
    created() {
      let years = Constant.util.years(this.years);
      let months = {values:[...Constant.months]};
      let hours = {values:[...Constant.hours]};
      let minutes = {values:[...Constant.minutes]};
      let year, month, days;
      switch (this.type) {
        case Constant.typeMap.date:
          year = years.values[this.value[0] ? this.value[0] : 0];
          month = months.values[this.value[1] ? this.value[1] : 0];
          days = Constant.util.getCurrentMonthDays(year, month);
          this.columns = [years, months, days];
          break;
        case Constant.typeMap.datetime:
          year = years.values[this.value[0] ? this.value[0] : 0];
          month = months.values[this.value[1] ? this.value[1] : 0];
          days = Constant.util.getCurrentMonthDays(year, month);
          this.columns = [years, months, days, hours, minutes];
          break;
        case Constant.typeMap.time:
          this.columns = [hours, minutes];
          break;
        case Constant.typeMap.year:
          this.columns = [years];
          break;
        case Constant.typeMap.month:
          this.columns = [months];
          break;
        case Constant.typeMap.year_month:
          this.columns = [years, months];
          break;
        default:
          break;
      }
    },
    methods: {
      cancel(e) {
        this.$emit('on-cancel', e);
      },
      done(e) {
        this.$emit('on-done', e);
      }
    }
  }
</script>
