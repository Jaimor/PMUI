<template>
  <div>
    <pm-navbar title="评分" left-arrow back></pm-navbar>
    <p>测试</p>
    <pm-rate @click="cli" v-model="rate1"></pm-rate>
    <p>测试</p>
    <pm-rate @click="cli" v-model="rate2" size="1.5rem"></pm-rate>
    <p>测试</p>
    <pm-rate @click="cli" v-model="rate3" size="1.5rem" gutter=".5rem" can-not-click></pm-rate>
    <p>测试</p>
    <pm-rate @click="cli" v-model="rate4" icon="like-o"></pm-rate>
  </div>
</template>

<script>
  export default {
    name: "RateTest",
    data() {
      return {
        rate1: 0,
        rate2: 2,
        rate3: 3,
        rate4: 4
      }
    },
    methods: {
      cli(number) {

      }
    }
  }
</script>

<style scoped>

</style>
