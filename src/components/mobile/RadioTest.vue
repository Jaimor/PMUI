<template>
  <div>
    <pm-navbar title="单选框" left-arrow back></pm-navbar>
    <p>基本用法</p>
    <pm-radio v-model="base">这是基本用法</pm-radio>
    <p>选项组</p>
    <pm-radio-group v-model="radios1">
      <pm-radio>xxx</pm-radio>
      <pm-radio>xxx</pm-radio>
      <pm-radio>xxx</pm-radio>
    </pm-radio-group>
  </div>
</template>

<script>
  export default {
    name: "RadioTest",
    data() {
      return {
        base: false,
        radios1: -1
      }
    },
    watch: {
      base(v) {
        console.log(v);
      },
      radios1(v) {
        console.log(v);
      }
    }
  }
</script>

<style scoped>

</style>
