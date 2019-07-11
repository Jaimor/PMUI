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
    provide() {
      return {
        pmCheckboxGroup: this
      }
    },
    props: {
      value: {
        type: Array,
        default: []
      }
    },
    watch: {
      value(v) {
        this.reloadChecked(v);
      }
    },
    mounted() {
      this.reloadChecked(this.value);
    },
    methods: {
      modifyValue(child, f) {
        let value = this.value;
        const childIndex = this.children.indexOf(child);
        if (childIndex > -1) {
          if (f) {
            value.indexOf(childIndex) === -1 && value.push(childIndex);
          } else {
            value.indexOf(childIndex) > -1 && value.splice(childIndex, 1);
          }
          this.$emit('input', value);
        }
      },
      reloadChecked(checkboxIndexArr) {
        this.children.forEach(child => {
          child.checked = false;
        });
        checkboxIndexArr.forEach(v => {
          this.children[v].checked = true;
        })
      }
    }
  }
</script>
