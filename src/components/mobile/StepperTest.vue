<template>
    <div>
      <pm-navbar title="Stepper" left-arrow back></pm-navbar>
      <div style="width:100px;height:50px;background-color: white;padding: 10px;">
        <pm-stepper
          v-model="num"
          :step="2"
          :max="11"
          :min="2"
          @minus-click="minusClick"
        ></pm-stepper>
      </div>
    </div>
</template>

<script>
  export default {
    name: "StepperTest",
    data() {
      return {
        num: 20
      }
    },
    watch: {
      num(v) {
        console.log(v);
      }
    },
    methods: {
      minusClick(num) {
        console.log("minus:", num);
      }
    }
  }
</script>

<style scoped>

</style>
