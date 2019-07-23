<template>
  <div>
    <transition name="pm-dialog-show">
      <div v-if="show" class="pm-dialog" :style="{zIndex: dialogZIndex}">
        <div v-if="title" class="pm-dialog__title"> {{ title }} </div>
        <div :class="['pm-dialog__content', `pm-dialog__content--${contentAlign}`]"> {{ content }} </div>
        <div class="pm-dialog__btn">
          <div v-if="cancelBtn" class="pm-dialog__btn--cancel" @click="cancelClickHandler">取消</div>
          <div class="pm-dialog__btn--ok" @click="okClickHandler">确定</div>
        </div>
      </div>
    </transition>
    <transition name="pm-dialog__mask--slider">
      <div v-if="show" class="pm-dialog__mask" :style="{zIndex: maskZIndex}"></div>
    </transition>
  </div>
</template>

<script>
  import ZIndex from 'pmui/src/utils/z-index'
  export default {
    name: "PmDialog",
    data() {
      return {
        maskZIndex: ZIndex.nextZIndex(),
        dialogZIndex: ZIndex.nextZIndex(),
        show: false,
        okClick: () => {},
        cancelClick: () => {}
      }
    },
    props: {
      title: String,
      content: {
        type: String,
        required: true
      },
      contentAlign: {
        type: String,
        default: 'center'
      },
      cancelBtn: Boolean
    },
    methods: {
      cancelClickHandler(e) {
        this.show = false;
        this.cancelClick();
      },
      okClickHandler(e) {
        this.show = false;
        this.okClick();
      },
      ok(fn) {
        if (typeof fn === 'function') this.okClick = fn;
        return this;
      },
      cancel(fn) {
        if (typeof fn === 'function') this.cancelClick = fn;
        return this;
      }
    }
  }
</script>
