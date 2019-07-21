<template>
  <div class="box">
    <pm-navbar title="搜索组件" left-arrow back></pm-navbar>
    <p>测试</p>
    <pm-search v-model="v1" @focus="focus"></pm-search>
    <p>测试</p>
    <pm-search v-model="v2" show-btn placeholder="请输入关键词" @change="change"></pm-search>
    <p>测试</p>
    <pm-search v-model="v3" show-btn btn-type="cancel" icon="location" placeholder="请输入地址" @input="input"></pm-search>
  </div>
</template>

<script>
  export default {
    name: "SearchTest",
    data() {
      return {
        v1: '',
        v2: '',
        v3: ''
      }
    },
    watch: {
      v1(v) {
        console.log("v1", v);
      }
    },
    methods: {
      change(v) {
        console.log(v);
      },
      input(v) {
        console.log(v);
      },
      focus() {
        console.log("focus");
      }
    }
  }
</script>

<style scoped>
  .box {
    height: 400px;
  }
</style>
