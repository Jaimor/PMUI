<template>
  <div
    :class="[
      'pm-code-box__box--item',
      {
        'pm-code-box__box--item--active': active,
        'pm-code-box__box--item--no-gutter': !this.pmCodeBox.gutter
      }
    ]"
    @click="clickHandler"
  >

    {{ value }}
  </div>
</template>

<script>
  export default {
    name: "box",
    data() {
      return {
        active: false,
        value: ''
      }
    },
    inject: {
      pmCodeBox: {
        default: null
      }
    },
    created() {
      this.pmCodeBox.children.push(this);
    },
    methods: {
      clickHandler() {
        this.pmCodeBox.boxClick(this);
      },
      modifyActive(active) {
        this.active = active;
      },
      input(v) {
        this.value = v;
      }
    }
  }
</script>
