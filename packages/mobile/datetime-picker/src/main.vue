<template>
  <pm-picker :title="title" :columns="columns" v-model="values">

  </pm-picker>
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
      formatSymbols: {
        type: Array,
        default: () => {
          return ['-', ':'];
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

      }
    },
    created() {
      switch (this.type) {
        case Constant.typeMap.date:
          break;
        case Constant.typeMap.datetime:

          break;
        case Constant.typeMap.time:

          break;
        case Constant.typeMap.year:

          break;
        case Constant.typeMap.month:

          break;
        case Constant.typeMap.year_month:
          let years = Constant.util.years(this.years);
          let months = {values:[...Constant.months]};
          this.columns = [years, months];
          break;
        default:
          break;
      }
    },
    methods: {
      done() {

      }
    }
  }
</script>
