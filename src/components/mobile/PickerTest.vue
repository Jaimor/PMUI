<template>
  <div>
    <pm-picker title="测试" :columns="columns"></pm-picker>
    <div>xxxxxxxxxxxx</div>
  </div>
</template>

<script>
  export default {
    name: "PickerTest",
    data() {
      return {
        columns: [
          {
            values: ['辉腾', '2002', '2003', '哇哈哈', '辉腾', '奔驰', '可口可乐']
          },
          {
            values: ['可口可乐', '2002', '2003', '可口可乐', '奔驰', '可口可乐', '奔驰']
          },
          {
            values: ['可口可乐', '2002', '2003', '可口可乐', '奔驰', '可口可乐', '奔驰']
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
