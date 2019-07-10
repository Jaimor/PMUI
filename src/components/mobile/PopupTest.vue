<template>
  <div>
    <pm-popup v-model="showTop" position="top" height="100px">我是从顶部弹出来的</pm-popup>
    <pm-popup v-model="showRight" position="right" width="100px">我是从右边弹出来的</pm-popup>
    <pm-popup v-model="showBottom" position="bottom" height="200px">我是从底部弹出来的</pm-popup>
    <pm-popup v-model="showLeft" position="left" width="100px">我是从左边弹出来的</pm-popup>
    <pm-popup v-model="showNoMask" position="bottom" height="200px" :show-mask="false">
      <div style="border-top:1px solid gray;">我是从底部弹出来的，不显示mask</div>
    </pm-popup>
    <div style="margin: 10px;">
      <pm-button type="primary" @click="show('top')">Top弹出</pm-button>
      <pm-button type="primary" @click="show('right')">Right弹出</pm-button>
    </div>
    <div style="margin: 10px;">
      <pm-button type="primary" @click="show('bottom')">Bottom弹出</pm-button>
      <pm-button type="primary" @click="show('left')">Left弹出</pm-button>
    </div>
    <div style="margin: 10px;">
      <pm-button type="primary" @click="show('no-mask')">no-mask弹出</pm-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PopupTest",
    data() {
      return {
        showTop: false,
        showRight: false,
        showBottom: false,
        showLeft: false,
        showNoMask: false
      }
    },
    methods: {
      show(dir) {
        if (dir === 'top') this.showTop = true;
        if (dir === 'right') this.showRight = true;
        if (dir === 'bottom') this.showBottom = true;
        if (dir === 'left') this.showLeft = true;
        if (dir === 'no-mask') this.showNoMask = true;
      }
    }
  }
</script>

<style scoped>

</style>
