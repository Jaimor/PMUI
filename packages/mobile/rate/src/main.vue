<template>
  <div class="pm-rate">
    <icon
      v-for="i in count"
      :key="i"
      :icon="icon"
      :size="size"
      :style="style(i)"
      @click.native="iconClick(i)"
    ></icon>
  </div>
</template>

<script>
  import Constant from './constant.js'
  import icon from './icon.vue'
  export default {
    name: "PmRate",
    data() {
      return {
        children: []
      }
    },
    components: { icon },
    props: {
      icon: {
        type: String,
        default: Constant.iconDefault
      },
      size: {
        type: String,
        default: Constant.sizeDefault
      },
      color: {
        type: String,
        default: Constant.colorDefault
      },
      activeColor: {
        type: String,
        default: Constant.activeColorDefault
      },
      count: {
        type: Number,
        default: 5
      },
      value: Number,
      gutter: {
        type: String,
        default: '0.25rem'
      },
      canNotClick: Boolean
    },
    watch: {
      value(v) {
        this.reloadChild(v);
      }
    },
    mounted() {
      this.reloadChild(this.value);
    },
    computed: {
      style() {
        return (i) => {
          let style = {marginLeft: this.gutter};
          return i === 1 ? undefined : style;
        }
      }
    },
    methods: {
      iconClick(num) {
        if (this.canNotClick) return;
        this.$emit('input', num);
        this.$emit('click', num);
      },
      reloadChild(v) {
        for (let i = 0; i < this.count; i ++) {
          if (i < v) this.children[i].color = this.activeColor;
          else this.children[i].color = this.color;
        }
      }
    }
  }
</script>
