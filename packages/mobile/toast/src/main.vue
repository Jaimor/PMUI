<template>
  <transition name="pm-toast-fade">
    <div
      :class="['pm-toast', `pm-toast--${type}`, `pm-toast--${position}`]"
      v-show="visible"
    >
      <i v-if="iconClass" :class="iconClass"></i>
      <i v-else-if="type !== 'info'" :class="['pm-toast__icon', iconTypeClass]"></i>
      <div class="pm-toast__text">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
  import Constant from './constant.js';
  export default {
    name: "PmToast",
    data() {
      return {
        visible: false,
        closed: false
      }
    },
    props: {
      type: {
        default: Constant.typeMap.info,
        type: String
      },
      position: {
        default: Constant.positionMap.middle,
        type: String
      },
      iconClass: {
        default: '',
        type: String
      },
      text: {
        type: String,
        required: true
      },
      duration: {
        default: Constant.duration,
        type: Number
      },
      onClose: {
        default: _ => {},
        type: Function
      },
      loading: Boolean
    },
    computed: {
      iconTypeClass() {
        return Constant.typeMap[this.type] !== Constant.typeMap.info && this.iconClass === ''
          ? `van-icon van-icon-${ Constant.typeMap[this.type] }`
          : '';
      }
    },
    methods: {
      setTimeoutClose() {
        if (this.duration > 0) {
          setTimeout(_ => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
      close() {
        this.closed = true;
        // 移除节点
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
        // 调用 用户关闭 事件
        this.onClose(this);
      },
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy();
        this.$el.parentElement.removeChild(this.$el);
      }
    },
    mounted() {
      this.setTimeoutClose();
    }
  }
</script>

