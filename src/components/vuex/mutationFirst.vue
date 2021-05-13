<template>
  <div>
    <button @click="add({ mount: 10 })">{{ num }}</button>
    <button @click="add1">{{ count }}</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      num: "num",
      count: "count",
    }),
  },
  methods: {
    add1() {
      this.$store.commit({
        type: "increC",
        mount: 5,
      });
    },
    ...mapMutations({
      add: "increM",
    }),
  },
};
</script>

<style>
</style>