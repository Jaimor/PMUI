<template>
  <div>
    <pm-picker title="测试" :columns="columns" v-model="arr"></pm-picker>
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
            values: ['辉腾', '2002', '2003', '哇哈哈', '辉腾', '奔驰', '可口可乐'],
            selected: 1
          },
          {
            values: ['可口可乐', '2002', '2003', '可口可乐', '奔驰', '可口可乐', '奔驰']
          },
          {
            values: ['可口可乐', '2002', '2003', '可口可乐', '奔驰', '可口可乐', '奔驰'],
            selected: 3
          }
        ],
        arr: []
      }
    },
    watch: {
      arr(v) {
        console.log(v)
      }
    }
  }
</script>

<style scoped>

</style>
