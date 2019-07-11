<template>
  <div class="pm-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PmCheckboxGroup",
    data() {
      return {
        children: []
      }
    },
    provide: {
      pmCheckboxGroup: this
    },
    props: {
      value: {
        type: Array,
        default: []
      }
    },
    created() {
      // let len = this.value.length;
      // while (len - 1 >= 0) {
      //   this.children
      // }
      console.log("checkboxgroup-create");
      console.log(this)
    },
    mounted() {
      console.log("checkboxgroup-mounted")
    },
    methods: {
      modifyValue() {

      }
    }
  }
</script>
