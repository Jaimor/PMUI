<template>
  <div>
    <pm-navbar title="Picker" left-arrow back></pm-navbar>
    <pm-picker title="测试" :columns="columns" v-model="arr"></pm-picker>
    <div style="margin-top: 20px;">
      <pm-button type="primary" @click="show">显示</pm-button>
    </div>
    <pm-popup v-model="showPopup" position="bottom">
      <pm-picker title="测试" :columns="columns" v-model="arr1" @on-done="onDone"></pm-picker>
    </pm-popup>
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
        ],
        arr: [],
        arr1: [1,2,0],
        showPopup: false
      }
    },
    watch: {
      arr(v) {
        console.log(v)
      }
    },
    methods: {
      show() {
        this.showPopup = true;
      },
      onDone() {
        console.log(this.arr1);
        this.showPopup = false;
      }
    }
  }
</script>

<style scoped>

</style>
