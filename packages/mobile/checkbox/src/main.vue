<template>
  <div
    :class="['pm-checkbox']"
  >
    <div class="pm-checkbox__icon"></div>
    <div class="pm-checkbox__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PmCheckbox"
  }
</script>

<style scoped>

</style>
