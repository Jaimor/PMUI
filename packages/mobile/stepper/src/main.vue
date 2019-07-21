<template>
  <div class="pm-stepper">
    <div
      :class="['pm-stepper__reduce', {'pm-stepper__reduce--disabled': minusDisabled}]"
      @click="minusHandler"
    >
      <i class="pm-font pm-icon-plus"></i>
    </div>
    <div class="pm-stepper__number"> {{ value }} </div>
    <div
      :class="['pm-stepper__addition', {'pm-stepper__addition--disabled': plusDisabled}]"
      @click="plusHandler"
    >
      <i class="pm-font pm-icon-plus"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PmStepper",
    data() {
      return {
        plusDisabled: false,
        minusDisabled: false
      }
    },
    props: {
      value: Number,
      max: Number,
      min: Number,
      step: {
        type: Number,
        default: 1
      }
    },
    watch: {
      value: {
        handler(v) {
          if (typeof this.max !== 'undefined') {
            this.plusDisabled = v + this.step > this.max;
            if (v > this.max) this.$emit('input', this.max);
          }
          if (typeof this.min !== 'undefined') {
            this.minusDisabled = v - this.step < this.min;
            if (v < this.min) this.$emit('input', this.min);
          }
        },
        immediate: true
      }
    },
    methods: {
      plusHandler(e) {
        let curValue = this.value + this.step;
        if (typeof this.max !== 'undefined' && curValue > this.max) return;
        this.$emit('input', curValue);
        this.$emit('plus-click', curValue, e);
      },
      minusHandler(e) {
        let curValue = this.value - this.step;
        if (typeof this.min !== 'undefined' && curValue < this.min) return;
        this.$emit('input', curValue);
        this.$emit('minus-click', curValue, e);
      }
    }
  }
</script>
