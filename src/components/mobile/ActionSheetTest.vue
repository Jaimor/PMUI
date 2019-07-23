<template>
  <div>
    <pm-navbar title="ActionSheet" left-arrow back></pm-navbar>
    <pm-button type="success" @click="open">打开</pm-button>
    <pm-action-sheet
        v-model="show"
        title="测试"
        :actions="actions"
        @click="action"
    ></pm-action-sheet>
  </div>
</template>

<script>
  export default {
    name: "ActionSheetTest",
    data() {
      return {
        show: false,
        actions: [{title: '按钮1'}, {title: '按钮2'}, {title: '按钮3'}]
      }
    },
    methods: {
      open() {
        this.show = true
      },
      action(index) {
        alert(index);
      }
    }
  }
</script>

<style scoped>

</style>
