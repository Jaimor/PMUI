<template>
  <div class="pm-search">
    <div class="pm-search__content">
      <div class="pm-search__content__icon">
        <pm-icon :icon="icon"></pm-icon>
      </div>
      <div class="pm-search__content__input">
        <input
          type="text"
          :value="value"
          :placeholder="placeholder"
          @input="input"
          @change="change"
          @focus="focus"
          @blur="blur"
        />
      </div>
    </div>
    <div v-if="showBtn" class="pm-search__btn">
      <span v-if="btnType === Constant.btnTypeMap.search" @click="search">搜索</span>
      <span v-if="btnType === Constant.btnTypeMap.cancel" @click="cancel">取消</span>
    </div>
  </div>
</template>

<script>
  import Constant from './constant.js'
  export default {
    name: "PmSearch",
    data() {
      return {
        Constant: Constant
      }
    },
    props: {
      value: String,
      placeholder: String,
      showBtn: {
        type: Boolean,
        default: Constant.showBtnDefault
      },
      btnType: {
        type: String,
        default: Constant.btnTypeMap.search
      },
      // focusShowBtn: Boolean,    //获取到焦点后才显示
      icon: {
        type: String,
        default: 'search'
      }
    },
    methods: {
      search(e) {
        this.$emit('search-click', e);
      },
      cancel(e) {
        this.$emit('cancel-click', e);
      },
      input(e) {
        this.$emit('input', e.target.value);
      },
      change(e) {
        this.$emit('change', e.target.value);
      },
      focus(e) {
        this.$emit('focus', e);
      },
      blur(e) {
        this.$emit("blur", e)
      }
    }
  }
</script>
