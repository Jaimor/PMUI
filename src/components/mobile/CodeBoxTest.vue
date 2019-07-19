<template>
  <div>
    <pm-navbar title="密码输入框" left-arrow back></pm-navbar>
    <p>测试</p>
    <pm-code-box
      ref="psd1"
      length="4"
      gutter="1"
      info="请输入验证码"
      @box-click="boxClick"
      password
      v-model="password1"
    ></pm-code-box>
    <p>测试2</p>
    <pm-code-box
      ref="psd2"
      length="6"
      info="请输入验证码"
      v-model="password2"
    ></pm-code-box>
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
    name: "CodeBoxTest",
    data() {
      return {
        open: false,
        password1: [],
        password2: []
      }
    },
    watch: {
      password1(v) {
        console.log(v);
      }
    },
    methods: {
      numClick(key) {
        this.$refs.psd1.input(key);
        // this.$nextTick(() => {
        //   console.log("abc:", this.password1)
        // })
      },
      del() {

      },
      done() {

      },
      boxClick() {
        this.open = true;
      }
    }
  }
</script>

<style scoped>

</style>
