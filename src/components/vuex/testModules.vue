<template>
  <div>
    <button>{{ count }}</button>
    <button>{{ num }}</button>
    <button>{{ local }}</button>
  </div>
</template>

<script>
//vue语法糖真鸡儿多。。。
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("count", {
      count: "count",
      num: "num",
      local: "local",
    }),
  },
};
</script>

<style>
</style>