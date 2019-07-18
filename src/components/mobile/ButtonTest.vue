<template>
  <div>
    <pm-navbar title="Button" left-arrow back></pm-navbar>
    <h3>按钮种类</h3>
    <div class="default">
      <pm-button type="default">默认按钮</pm-button>
      <pm-button type="primary">普通按钮</pm-button>
      <pm-button type="success">成功按钮</pm-button>
      <pm-button type="warning">警告按钮</pm-button>
      <pm-button type="danger">危险按钮</pm-button>
    </div>
    <h3>按钮大小</h3>
    <div class="size">
      <pm-button size="large" type="primary">大按钮</pm-button>
      <pm-button size="normal" type="primary">普通按钮</pm-button>
      <pm-button size="small" type="primary">小按钮</pm-button>
      <pm-button size="mini" type="primary">Mini按钮</pm-button>
    </div>
    <h3>镂空按钮</h3>
    <div class="default">
      <pm-button type="primary" plain>普通按钮</pm-button>
      <pm-button type="success" plain>成功按钮</pm-button>
      <pm-button type="warning" plain>警告按钮</pm-button>
      <pm-button type="danger" plain>危险按钮</pm-button>
    </div>
    <h3>圆形按钮</h3>
    <div class="default">
      <pm-button type="primary" shape="round">普通按钮</pm-button>
      <pm-button icon="like-o" shape="circle"></pm-button>
    </div>
    <h3>图标按钮</h3>
    <div class="size">
      <pm-button type="success" icon="like-o"></pm-button>
      <pm-button type="primary" icon="search">搜索按钮</pm-button>
<!--      <pm-button type="primary" icon="search" loading>加载中</pm-button>-->
    </div>
    <h3>按钮点击</h3>
    <div class="size">
      <pm-button @click="btnClick" type="success">支付成功</pm-button>
      <pm-button @click="btnClick2">点击我</pm-button>
      <pm-button type="danger" disabled>被禁用</pm-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ButtonTest",

    methods: {
      btnClick() {
        this.$toast.success("支付成功");
      },
      btnClick2(e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>
  .default, .size {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  button {
    margin: .2rem .6rem;
  }
  button:last-child {
    margin: .2rem 0 .2rem .6rem;
  }
</style>
