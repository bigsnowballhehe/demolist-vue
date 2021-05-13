<template>
  <div>
    <button @click="incre">{{ count }}</button>
    <button @click="incre1">{{ num }}</button>
    <button @click="incre2">{{ local }}</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "stateFirst",
  data() {
    return {
      localstate: 2,
    };
  },
  methods: {
    incre() {
      this.$store.commit("increament");
    },
    incre1() {
      this.$store.commit("incre1");
    },
    incre2() {
      this.$store.commit("incre2");
    },
  },
  computed: {
    //对象，mapstate辅助里面的内容，转化。
    ...mapState({
      //传入了 this.$store.state?
      count: (state) => state.count,
      num: "num", // 全是这样子时候，可以使用 mapstate(['num']) 传个数组.
      local(state) {
        return this.localstate + state.local;
      },
    }),
  },
};
</script>

<style>
</style>