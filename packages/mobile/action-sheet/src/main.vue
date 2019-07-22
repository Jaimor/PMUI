<template>
  <pm-popup
    :show="value"
    :showMask="showMask"
  >

  </pm-popup>
</template>

<script>
  export default {
    name: "PmActionSheet",
    props: {
      value: Boolean,
      showMask: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
