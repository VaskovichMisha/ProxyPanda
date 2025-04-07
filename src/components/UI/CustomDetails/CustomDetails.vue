<template>
  <div class="custom-details">
    <div class="custom-summary" @click="toggle">
      <img :class="{ 'open': isOpen }" class="custom-summary__icon" src="@/assets/svg/details-icon.svg" alt="" />
      {{ value.title }}
    </div>
    <div
      class="custom-content"
      ref="content"
      :style="{
        maxHeight: isOpen ? contentHeight + 24 + 'px' : '0px',
        paddingBottom: isOpen ? '24px' : '0'
      }"
    >
      {{ value.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedDetails',
  props: {
    value: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      isOpen: false,
      contentHeight: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.contentHeight = this.$refs.content.scrollHeight
    })
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      this.$nextTick(() => {
        this.contentHeight = this.isOpen
          ? this.$refs.content.scrollHeight
          : 0
      })
    }
  }
}
</script>

<style scoped>
.custom-details {
  border-bottom: 1px solid #0A1D2714;
  overflow: hidden;
  width: 100%;
  font-family: sans-serif;
  transition: all 0.3s ease;
  color: #0A1D27CC;
}

.custom-summary {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  padding: 24px 0;

  & > img {
    transition: all 0.3s;
  }
}

.custom-content {
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.3s ease;
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  padding-left: 40px;
}

.open {
  transform: rotate(45deg);
  transition: all 0.3s;
}

@media (max-width: 1440px) {
  .custom-summary {
    gap: 14px;
    font-size: 18px;
    padding: 20px 0;
  }

  .custom-content {
    font-size: 16px;
    padding-left: 32px;
  }
}
</style>
