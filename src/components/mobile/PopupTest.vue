<template>
  <div>
    <pm-popup :show="show" position="top" height="100px">xxxxx</pm-popup>
    <div>
      <pm-button type="primary" @click="up">上边弹出</pm-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PopupTest",
    data() {
      return {
        show: false
      }
    },
    watch: {
      show(v) {
        console.log(v);
      }
    },
    methods: {
      up() {
        this.show = true;
        // setTimeout(_ => {
        //   this.show = false;
        // }, 3000);
      }
    }
  }
</script>

<style scoped>

</style>
