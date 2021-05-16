import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const moduleFiles = require.context("./modules", true, /\.js$/);
const modules = moduleFiles.keys().reduce((modules, modulesPath) => {
  const moduleName = modulesPath.replace(/^\.\/(.*)\.\w+$/, "$1");
  modules[moduleName] = moduleFiles(modulesPath).default;
  return modules;
}, {});

export default new Vuex.Store({
  modules
});
