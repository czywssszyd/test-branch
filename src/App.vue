<template>
  <div id="nav">
    <router-link to="/Login">Login</router-link>|
    <router-link to="/setup">setup</router-link>|
    <router-link to="/setup02">setup02</router-link>|
    <router-link to="/setup03">setup03</router-link>|
    <router-link to="/todo">todo</router-link>|
    <router-link to="/templateAbout">模板引用</router-link>|
    <router-link to="/JSX">JSX中引用</router-link>|
    <router-link to="/templateAbout2">v-for中引用</router-link>|
    <router-link to="/watchref">侦听模板引用</router-link>|
    <router-link to="/reactive">响应性基础</router-link>|
    <router-link to="/toRaw">toRaw</router-link>|
    <router-link to="/toRef">toRef</router-link>|
    <router-link to="/customRef">customRef</router-link>|
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
