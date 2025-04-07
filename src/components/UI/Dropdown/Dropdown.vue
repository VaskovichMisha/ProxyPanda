<template>
  <div class="dropdown" ref="dropdown">
    <button class="dropdown__button" @click="toggleDropdown">
      {{ buttonText }}
      <img :class="{ 'rotate-180': isOpen }" src="@/assets/svg/arrow-down.svg" alt="">
    </button>
    <div :class="{ 'open': isOpen }" class="dropdown__menu">
      <div v-for="(item, index) in items" :key="index">
        <router-link :to="item.href">
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside)
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    handleClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@use "dropdown";
</style>
