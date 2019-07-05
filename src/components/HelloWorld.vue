<template>
  <div class="hello">

  </div>
</template>

<script>
import PmButton from "../../packages/mobile/button/src/main";
export default {
  name: 'HelloWorld',
  components: {PmButton},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {

  },
  methods: {
    toast() {
      this.$toast.success("操作成功");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
