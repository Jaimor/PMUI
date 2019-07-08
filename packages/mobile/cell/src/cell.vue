<template>
  <div
    :class="['pm-cell', {'pm-cell--clickstyle': isLink}]"
    @click="clickHandler"
  >
    <i v-if="iconClass" :class="['pm-cell__icon', iconClass]"></i>
    <pm-icon v-else-if="icon" class="pm-cell__icon" :icon="icon"></pm-icon>
    <div class="pm-cell__content">
      <div class="pm-cell__content--left" :style="{width: widthTitle}">{{ title }}</div>
      <div class="pm-cell__content--right" :style="{width: widthValue}">{{ value }}</div>
    </div>
    <pm-icon v-if="isLink" icon="arrow"></pm-icon>
  </div>
</template>

<script>
  export default {
    name: "PmCell",
    props: {
      iconClass: String,
      icon: String,
      isLink: Boolean,
      title: String,
      value: [String, Number],
      titleRatio: [String, Number]
    },
    computed: {
      widthTitle() {
        return Number(this.titleRatio) * 10 + '%';
      },
      widthValue() {
        return (10 - Number(this.titleRatio)) * 10 + '%';
      }
    },
    methods: {
      clickHandler(event) {
        this.$emit("click", event);
      }
    }
  }
</script>
