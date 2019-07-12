<template>
  <pm-popup v-model="jump" height="14rem" :show-mask="false">
    <div class="pm-datetime-picker">
      <div class="pm-datetime-picker__header">
        <span class="pm-datetime-picker__header__title"> {{title}} </span>
        <span class="pm-datetime-picker__header__cancel" @click="show=false">取消</span>
        <span class="pm-datetime-picker__header__done" @click="done">完成</span>
      </div>
      <div class="pm-datetime-picker__content">
        content
      </div>
    </div>
  </pm-popup>
</template>

<script>
  export default {
    name: "PmDatetimePicker",
    data() {
      return {

      }
    },
    props: {
      title: String,
      show: Boolean
    },
    computed: {
      jump() {
        return this.show;
      }
    },
    methods: {
      done() {

      }
    }
  }
</script>
