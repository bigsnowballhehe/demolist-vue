<template>
  <div>
    <p>{{ todos }}</p>
    <p>{{ done }}</p>
    <p>{{ id(1) }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "getterTest",
  data() {
    return {
      todo: 1,
    };
  },
  computed: {
    ...mapGetters({
      todos: "doneTodos",
      done: "doneTodosCounts",
      id: "getTodoById",
    }),
  },
};
</script>

<style>
</style>