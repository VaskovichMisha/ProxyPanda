<template>
  <div class="quality-block">
    <div class="quality-block__content">
      <img :src="block.img" alt="icon">
      <div class="quality-block__images">
        <img
          v-for="img in block.images"
          :src="img"
          alt="icon"
        >
      </div>
    </div>
    <span class="quality-block__title">
      {{ block.title }}
    </span>
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
@use "qualityBlock";
</style>