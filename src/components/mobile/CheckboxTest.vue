<template>
  <div>
    <div style="margin-bottom: 10px;">
      <p>基本用法</p>
      <pm-checkbox v-model="check1">这里是基本用法</pm-checkbox>
    </div>
    <div style="margin-bottom: 10px;">
      <p>禁用状态</p>
      <pm-checkbox v-model="check2" disabled>未选中禁用</pm-checkbox>
      <pm-checkbox v-model="check3" :disabled="true">选中禁用</pm-checkbox>
    </div>
    <div style="margin-bottom: 10px;">
      <p>自定义颜色</p>
      <pm-checkbox v-model="check4" checked-color="rgb(7, 193, 96)">自定义颜色</pm-checkbox>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CheckboxTest",
    data() {
      return {
        check1: false,
        check2: false,
        check3: true,
        check4: false
      }
    }
  }
</script>

<style scoped>

</style>
