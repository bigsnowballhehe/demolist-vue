<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
    <state-first></state-first>
    <getter-test></getter-test>
    <div>
      <p>mutation</p>
      <mutation-first></mutation-first>
    </div>
    <div>
      <p>action</p>
      <action-first></action-first>
    </div>
  </div>
</template>

<script>
//先在html里写组件标签，就会自动。。。生成导入。
import ActionFirst from "./components/vuex/actionFirst.vue";
import GetterTest from "./components/vuex/getterTest.vue";
import MutationFirst from "./components/vuex/mutationFirst.vue";
import StateFirst from "./components/vuex/stateFirst.vue";

export default {
  name: "App",
  components: {
    StateFirst,
    GetterTest,
    MutationFirst,
    ActionFirst,
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
