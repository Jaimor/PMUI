<template>
  <div>
    <pm-picker title="测试" :columns="columns"></pm-picker>
  </div>
</template>

<script>
  export default {
    name: "PickerTest",
    data() {
      return {
        columns: [
          {
            values: ['2001', '2002', '2003', '哇哈哈', '辉腾']
          },
          {
            values: ['2001', '2002', '2003', '可口可乐', '奔驰']
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
