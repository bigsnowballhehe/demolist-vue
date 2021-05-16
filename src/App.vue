<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
    <span>test-modeles</span>
    <test-modules></test-modules>
  </div>
</template>

<script>
import TestModules from "./components/vuex/testModules.vue";
//先在html里写组件标签，就会自动。。。生成导入。

export default {
  name: "App",
  components: {
    TestModules,
  },
};
</script>
   
   

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
