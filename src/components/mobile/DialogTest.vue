<template>
  <div>
    <pm-navbar title="对话框" left-arrow back></pm-navbar>
    <pm-button type="primary" size="small" plain @click="alert">对话框</pm-button>
    <pm-button type="primary" size="small" plain @click="confirm">confirm</pm-button>
  </div>
</template>

<script>
  export default {
    name: "DialogTest",
    methods: {
      alert() {
        this.$dialog.alert({
          title: '对话框',
          content: '对话框内容对话框内容对话框内容对话框内容对话框内容'
        }).ok(() => {
          // ok
        })
      },
      confirm() {
        this.$dialog.confirm({
          title: 'confirm',
          content: 'confirm,confirm,confirm,confirm,confirm, end',
          contentAlign: 'left'
        }).cancel(() => {
          // cancel
          console.log("cancel")
        })
      }
    }
  }
</script>

<style scoped>

</style>
