<template>
  <div class="pm-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PmRadioGroup",
    data() {
      return {
        children: []
      }
    },
    provide() {
      return {
        pmRadioGroup: this
      }
    },
    props: {
      value: Number
    },
    watch: {
      value(v, oldV) {
        this.reloadChecked(v, oldV);
      }
    },
    mounted() {
      this.reloadChecked(this.value);
    },
    methods: {
      modifyValue(child) {
        const childIndex = this.children.indexOf(child);
        this.$emit('input', childIndex);
      },
      reloadChecked(v, oldV) {
        if (oldV && oldV >= 0 && oldV < this.children.length) {
          this.children[oldV].checked = false;
        }
        if (v && v >= 0 && v < this.children.length) this.children[v].checked = true;
      }
    }
  }
</script>
