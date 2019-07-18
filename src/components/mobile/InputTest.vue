<template>
  <div class="box">
    <pm-navbar title="Input" left-arrow back></pm-navbar>
    <pm-input placeholder="请输入用户名"></pm-input>
    <pm-input label="密码" placeholder="请输入密码" type="password"></pm-input>
    <pm-cell-group title="用户注册">
      <pm-input v-model="username" label="用户名" placeholder="请输入用户名" required></pm-input>
      <pm-input v-model="password" label="密码" placeholder="请输入密码" type="password" required></pm-input>
    </pm-cell-group>
    <pm-cell-group title="自定义图标">
      <pm-input label="用户名" placeholder="请输入用户名" icon="manager" @change="onChange"></pm-input>
      <pm-input label="密码" placeholder="请输入密码" type="password" icon="success"></pm-input>
      <pm-input label="验证码" placeholder="请输入验证码" icon="info">
        <pm-button slot="button" type="primary" size="mini">获取验证码</pm-button>
      </pm-input>
      <pm-textarea label="内容" placeholder="请输入内容" icon="comment"></pm-textarea>
    </pm-cell-group>
  </div>
</template>

<script>
  export default {
    name: "InputTest",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    watch: {
      username(u) {
        console.log(u);
      },
      password(p) {
        console.log(p);
      }
    },
    methods: {
      onChange() {
        alert("change");
      }
    }
  }
</script>

<style scoped>
  .box {
    /*background-color: #eee;*/
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
