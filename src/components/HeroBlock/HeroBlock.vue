<template>
  <div class="hero-block">
    <img :src="block?.icon" alt="">
    <span>{{ block.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@use "heroBlocks";
</style>