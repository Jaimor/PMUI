<template>
  <div>
    <pm-navbar title="密码输入框" left-arrow back></pm-navbar>
    <p>测试</p>
    <pm-code-box
      ref="psd1"
      length="4"
      gutter="1"
      info="请输入验证码"
      @box-click="boxClick('psd1')"
      v-model="password1"
    ></pm-code-box>
    <p>测试2</p>
    <pm-code-box
      ref="psd2"
      length="6"
      info="请输入验证码"
      v-model="password2"
      password
      @box-click="boxClick('psd2')"
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
        password2: [],
        ref: 'psd1'
      }
    },
    watch: {
      password1(v) {
        console.log(v);
      },
      ref(newV, oldV) {
        this.$refs[oldV].blur();
        // this.$refs[newV].focus();
      }
    },
    methods: {
      numClick(key) {
        this.$refs[this.ref].input(key);
        // this.$nextTick(() => {
        //   console.log("abc:", this.password1)
        // })
        // console.log(key)
      },
      del() {

      },
      done() {

      },
      boxClick(ref) {
        this.open = true;
        this.ref = ref;
      }
    }
  }
</script>

<style scoped>

</style>
