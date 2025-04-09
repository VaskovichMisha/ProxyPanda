<template>
  <div class="how-work-block">
    <span class="how-work-block__title how-work-block__title--mobile">
      {{ block.title }}
    </span>
    <img :src="block.img" alt="">
    <div class="how-work-block__content">
      <span class="how-work-block__title">
        {{ block.title }}
      </span>
      <span class="how-work-block__text">
        {{ block.text }}
      </span>
    </div>
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
@use "howWorkBlock";
</style>