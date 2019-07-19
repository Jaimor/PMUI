<template>
  <div class="pm-code-box">
    <pm-row class="pm-code-box__box" :gutter="gutter">
      <pm-col v-for="i in Number(length)" :key="i" :span="span">
        <box

        ></box>
      </pm-col>
    </pm-row>
    <div v-if="info" class="pm-code-box__info"> {{info}} </div>
  </div>
</template>

<script>
  import Box from './box.vue';
  export default {
    name: "PmCodeBox",
    data() {
      return {
        children: [],
        boxIndex: -1,
        values: []
      }
    },
    provide() {
      return {
        pmCodeBox: this
      }
    },
    props: {
      info: String,
      length: {
        type: [Number, String],
        default: 4
      },
      gutter: [Number, String],
      password: Boolean
    },
    components: { Box },
    watch: {
      boxIndex(i) {
        this.children.forEach((item, index) => {
          if (i === index) {
            item.modifyActive(true);
          } else {
            item.modifyActive(false);
          }
        })
      },
      values(v) {
        this.$emit("input", v);
      }
    },
    computed: {
      span() {
        return Math.floor(24 / Number(this.length));
      }
    },
    methods: {
      boxClick(box) {
        for (let i = 0, len = this.children.length; i < len; i++) {
          if (this.children[i] === box) {
            this.boxIndex = i;
            break;
          }
        }
        this.$emit('box-click');
      },
      input(v) {
        this.children[this.boxIndex].input(this.password ? '·' : v);

        this.values[this.boxIndex] = v;
        this.values = [...this.values];

        if (this.boxIndex < Number(this.length) - 1) {
          this.boxIndex++;
        }
      },
      focus() {
        if (this.boxIndex < 0 || this.boxIndex >= Number(this.length)) this.boxIndex = 0;
        this.children[this.boxIndex].notBlur = true;
      },
      blur() {
        if (this.boxIndex >= 0 && this.boxIndex < Number(this.length)) this.children[this.boxIndex].notBlur = false;
      }
    }
  }
</script>
