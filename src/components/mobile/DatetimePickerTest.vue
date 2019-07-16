<template>
  <div>
    <pm-datetime-picker title="请选择日期" v-model="date" type="year-month"></pm-datetime-picker>
    <pm-button @click="show1" type="primary">显示1</pm-button>
  </div>
</template>

<script>
  export default {
    name: "DatetimePickerTest",
    data() {
      return {
        showOne: false,
        date: []
      }
    },
    methods: {
      show1() {
        this.showOne = true;
      }
    }
  }
</script>

<style scoped>

</style>
