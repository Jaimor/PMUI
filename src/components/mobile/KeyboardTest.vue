<template>
  <div>
    <pm-navbar title="Keyboard" left-arrow back></pm-navbar>
    <p style="text-align: left;padding-left: 10px;">
      <pm-button type="primary" @click="openClick">打开键盘</pm-button>
    </p>
    <pm-popup position="bottom" v-model="open" :show-mask="false">
      <pm-keyboard
        @number-click="numClick"
        @delete="del"
        @done="done"
      ></pm-keyboard>
    </pm-popup>
  </div>
</template>

<script>
  export default {
    name: "KeyboardTest",
    data() {
      return {
        open: false
      }
    },
    methods: {
      openClick() {
        this.open = true;
      },
      numClick(key) {
        this.$toast.info("点击 " + key);
      },
      del() {
        this.$toast.failed("删除按钮")
      },
      done() {
        this.$toast.success("完成按钮")
        this.open = false;
      }
    }
  }
</script>

<style scoped>

</style>
