<template>
  <div
    :class="[
      'pm-code-box__box--item',
      {
        'pm-code-box__box--item--active': active && notBlur,
        'pm-code-box__box--item--no-gutter': !this.pmCodeBox.gutter
      }
    ]"
    @click="clickHandler"
  >
    <div v-if="value === '·'" class="pm-code-box__box--item--circle"></div>
    <span v-else> {{value}} </span>
  </div>
</template>

<script>
  export default {
    name: "box",
    data() {
      return {
        active: false,
        notBlur: true,
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
        this.notBlur = true;
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
