<template>
  <div id="app">
    <nav class="header-app">
      <router-link to="/">主页</router-link> |
      <router-link to="/test">测试页</router-link> |
      <router-link to="/user">组件文档</router-link>
    </nav>
    <div class="main-app">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  padding: 30px;
  border-bottom: 1px solid #eee;
  position: fixed;
  width: 100%;
  background-color: #fff;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 20px;
    font-size: 20px;

    &.router-link-exact-active {
      color: rgb(251, 114, 153);
    }
  }
}

.main-app {
  margin-top: 6.5%;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
