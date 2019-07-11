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
      <pm-checkbox v-model="check5" checked-color="red">自定义颜色默认选中</pm-checkbox>
    </div>
    <div style="margin-bottom: 10px;">
      <p>多选框组</p>
      <pm-checkbox-group v-model="checkGroup">
        <pm-checkbox>组1</pm-checkbox>
        <pm-checkbox>组2</pm-checkbox>
        <pm-checkbox disabled>组3</pm-checkbox>
        <pm-checkbox>组4</pm-checkbox>
      </pm-checkbox-group>
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
        check4: false,
        check5: true,
        checkGroup: [1,2]
      }
    },
    watch: {
      checkGroup(v) {
        console.log(v);
      }
    }
  }
</script>

<style scoped>
p {
  text-align: left;
  padding-left: 10px;
}
</style>
