<template>
  <div id="app">
    <div class="logo">
      PMUI
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html {
    font-size: 16px;
  }
  body {
    margin:0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(249, 249, 249);
}
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
