<template>
  <div class="hero-block">
    <img :src="block?.icon" alt="">
    <span>{{ block.text[0] }} <br> {{ block.text[1] }}</span>
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