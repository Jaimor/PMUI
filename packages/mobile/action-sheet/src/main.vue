<template>
  <pm-popup
    :show="value"
    :showMask="showMask"
  >
    <div :class="['pm-action-sheet']">
      <div v-if="title" class="pm-action-sheet__title"> {{title}} </div>
      <div
          class="pm-action-sheet__btn"
          v-for="(action, i) in actions" :key="i"
          @click="btnClickHandler(i)"
      > {{actionKey ? action[actionKey] : action.title}} </div>
      <div class="pm-action-sheet__cancel">
        <div class="pm-action-sheet__cancel--btn" @click="cancelClickHandler">取消</div>
      </div>
    </div>
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
      },
      title: String,
      actions: {
        type: Array,
        required: true
      },
      actionKey: String
    },
    computed: {
    },
    methods: {
      btnClickHandler(index) {
        this.$emit('action-click', index);
      },
      cancelClickHandler(e) {
        this.$emit('input', false);
        this.$emit('cancel-click', e);
      }
    }
  }
</script>
