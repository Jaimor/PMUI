<template>
  <div class="box">
    <pm-navbar title="Navbar" left-arrow back></pm-navbar>
    <div class="item">
      <pm-navbar title="测试标题" left-text="返回" left-arrow right-text="搜索"></pm-navbar>
    </div>
    <div class="item">
      <pm-navbar title="测试标题" left-text="返回" left-arrow>
        <pm-icon slot="right" icon="search"></pm-icon>
      </pm-navbar>
      <div class="item">
        <pm-navbar title="点击测试" left-text="返回" left-arrow @left-click="back"></pm-navbar>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavbarTest",
    methods: {
      back(e) {
        this.$toast.info("点击了返回");
      }
    }
  }
</script>

<style scoped>
  .item {
    width: 100%;
    padding: 20px 0;
  }
</style>
