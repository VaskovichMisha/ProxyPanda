<template>
  <div class="header-mobile">
    <div class="header-mobile__block">
      <button @click="openBurger" class="header-mobile__burger-button">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <img class="header-mobile__logo" src="@/assets/svg/logo.svg" alt="logo">
    </div>
    <Button>
      {{ $t('main.buyNow') }}
    </Button>
  </div>
</template>

<script>
import Button from "@/components/UI/Button/Button.vue";

export default {
  methods: {
    openBurger() {
      this.$emit('open-burger')
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@use "headerMobile";
</style>