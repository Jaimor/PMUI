<template>
  <div class="hello">
    <div class="logo">
      PMUI
    </div>
    <pm-cell-group>
      <pm-cell title="Button按钮" is-link path="/button"></pm-cell>
      <pm-cell title="Cell/CellGroup" is-link path="/cell"></pm-cell>
      <pm-cell title="Checkbox/CheckboxGroup" is-link path="/checkbox"></pm-cell>
      <pm-cell title="DatetimePicker" is-link path="/datetime-picker"></pm-cell>
      <pm-cell title="Icon图标" is-link path="/icon"></pm-cell>
      <pm-cell title="Input/Textarea" is-link path="/input"></pm-cell>
      <pm-cell title="数字键盘" is-link path="/keyboard"></pm-cell>
      <pm-cell title="Loading" is-link path="/loading"></pm-cell>
      <pm-cell title="Navbar" is-link path="/navbar"></pm-cell>
      <pm-cell title="密码输入框" is-link path="/code-box"></pm-cell>
      <pm-cell title="Picker" is-link path="/picker"></pm-cell>
      <pm-cell title="Popup" is-link path="/popup"></pm-cell>
      <pm-cell title="单选框" is-link path="/radio"></pm-cell>
      <pm-cell title="评分" is-link path="/rate"></pm-cell>
      <pm-cell title="RowCol" is-link path="/rowcol"></pm-cell>
      <pm-cell title="搜索组件" is-link path="/search"></pm-cell>
      <pm-cell title="Stepper" is-link path="/stepper"></pm-cell>
      <pm-cell title="Toast" is-link path="/toast"></pm-cell>
    </pm-cell-group>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    width: 100%;
    height: 50px;
    padding: 50px 5px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }
</style>
