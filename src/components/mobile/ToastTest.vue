<template>
  <div class="default">
    <pm-navbar title="Toast" left-arrow back></pm-navbar>
    <pm-button type="primary" @click="loadingToast">加载中</pm-button>
    <pm-button type="success" @click="successToast">成功按钮</pm-button>
    <pm-button type="warning" @click="warningToast">警告按钮</pm-button>
  </div>
</template>

<script>
  export default {
    name: "ToastTest",
    methods: {
      loadingToast() {
        this.$toast.loading("加载中...");
      },
      successToast() {
        this.$toast.success("成功文本");
      },
      warningToast() {
        this.$toast.failed("警告文本");
      }
    }
  }
</script>

<style scoped>
  .default {
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
