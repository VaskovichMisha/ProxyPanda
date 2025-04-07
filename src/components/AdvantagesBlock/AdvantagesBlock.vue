<template>
  <div class="advantages-block">
    <img :src="block.img" alt="">
    <div class="advantages-block__content">
      <div class="advantages-block__head">
        <span class="advantages-block__title">
          {{ block.title }}
        </span>
        <div
          class="advantages-block__button"
          :class="{ 'open': isTextCollapsed }"
          @click="toggleTextVisibility"
        >
          <div></div>
          <div></div>
        </div>
      </div>
      <div :class="{ 'collapsed': !isTextCollapsed }" class="advantages-block__text">
        {{ block.text }}
      </div>
      <div class="advantages-block__gradient"></div>
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
  },
  data() {
    return {
      isTextCollapsed: false
    }
  },
  methods: {
    toggleTextVisibility() {
      this.isTextCollapsed = !this.isTextCollapsed
    }
  }
}
</script>

<style lang="scss" scoped>
@use "advantagesBlock";
</style>