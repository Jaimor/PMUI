<template>
  <div style="background-color: #f8f8f8;">
    <pm-cell-group title="这是一个测试" title-position="right">
      <pm-cell icon="location-o" title="哇哈哈" value="￥20"></pm-cell>
      <pm-cell icon="plus" title="点击测试" value="点我点我" @click="click1" is-link></pm-cell>
      <pm-cell icon="location-o" title="测试放大范德萨放大发" :value="2" :title-ratio="5" @click="click2"></pm-cell>
    </pm-cell-group>
  </div>
</template>

<script>
  export default {
    name: "CellTest",
    methods: {
      click1(e) {
        console.log(e);
      },
      click2() {
        console.log("click2");
      }
    }
  }
</script>

<style scoped>

</style>
