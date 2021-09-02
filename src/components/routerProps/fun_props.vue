<template>
  <div>{{ sid }}</div>
</template>

<script>
export default {
  name: 'FunProps',
  props: {
    sid: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
