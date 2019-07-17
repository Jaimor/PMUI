<template>
  <div>
    <pm-datetime-picker title="请选择日期" v-model="date1" type="year-month"></pm-datetime-picker>
    <p>test</p>
    <pm-datetime-picker title="请选择日期" v-model="date2" type="date"></pm-datetime-picker>
    <p>test</p>
    <pm-datetime-picker title="请选择日期" v-model="date3" type="datetime" @on-done="onDone"></pm-datetime-picker>
<!--    <pm-button @click="show1" type="primary">显示1</pm-button>-->
  </div>
</template>

<script>
  export default {
    name: "DatetimePickerTest",
    data() {
      return {
        showOne: false,
        date1: [],
        date2: [],
        date3: []
      }
    },
    watch: {
      date1(v) {
        console.log(v);
      },
      date2(v) {
        console.log("date2:", v);
      },
      date3(v) {
        console.log("date3:", v);
      }
    },
    methods: {
      show1() {
        this.showOne = true;
      },
      onDone(e) {
        console.log(e);
      }
    }
  }
</script>

<style scoped>

</style>
