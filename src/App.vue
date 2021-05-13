<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
    <state-first-vue></state-first-vue>
    <getter-test></getter-test>
    <div>
      <p>mutation</p>
      <mutation-first-vue></mutation-first-vue>
    </div>
  </div>
</template>

<script>
import getterTest from "@/components/vuex/getterTest.vue";
import stateFirstVue from "./components/vuex/stateFirst.vue";
import mutationFirstVue from "./components/vuex/mutationFirst.vue";
export default {
  name: "App",
  components: {
    stateFirstVue,
    getterTest,
    mutationFirstVue,
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
