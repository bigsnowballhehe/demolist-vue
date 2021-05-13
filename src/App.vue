<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
    <state-first></state-first>
    <getter-test></getter-test>
  </div>
</template>

<script>
import stateFirst from "@/components/vuex/stateFirst";
import getterTest from "@/components/vuex/getterTest";

export default {
  name: "App",
  components: {
    stateFirst,
    getterTest,
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
