<template>
  <div>
    <span>this is router_props</span>
    <span>{{ sid }}</span>
  </div>
</template>

<script>
export default {
  name: "router_props",
  props: ["sid"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style>
</style>