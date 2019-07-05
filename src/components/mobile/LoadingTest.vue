<template>
  <div>
    <pm-loading class="box" icon="loading1" icon-size="2rem"></pm-loading>
    <pm-loading class="box">加载中...</pm-loading>
    <pm-loading class="box" vertical>加载中...</pm-loading>
  </div>
</template>

<script>
  export default {
    name: "LoadingTest"
  }
</script>

<style scoped>
  .box {
    margin-bottom: 20px;
  }
</style>
