<template>
  <div class="pm-keyboard">
    <div class="pm-keyboard__number">
      <span @click="numberClickHandler(1)">1</span><span @click="numberClickHandler(2)">2</span><span @click="numberClickHandler(3)">3</span>
      <span @click="numberClickHandler(4)">4</span><span @click="numberClickHandler(5)">5</span><span @click="numberClickHandler(6)">6</span>
      <span @click="numberClickHandler(7)">7</span><span @click="numberClickHandler(8)">8</span><span @click="numberClickHandler(9)">9</span>
      <span @click="numberClickHandler(0)">0</span><span @click="numberClickHandler('.')">.</span>
    </div>
    <div class="pm-keyboard__btn">
      <span @click="del">删除</span>
      <span @click="done">完成</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PmKeyboard",
    methods: {
      numberClickHandler(key) {
        this.$emit("number-click", key);
      },
      del() {
        this.$emit('delete');
      },
      done() {
        this.$emit('done');
      }
    }
  }
</script>
