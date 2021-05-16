<template>
  <div>
    <button @click="add">{{ count }}</button>
    <button>{{ num }}</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      count: "count",
      num: "num",
    }),
  },
  methods: {
    ...mapActions({
      add: "actionB",
    }),
  },
};
</script>

<style>
</style>