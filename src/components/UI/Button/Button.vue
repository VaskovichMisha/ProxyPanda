<template>
  <button class="button" :class="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  height: 44px;
  width: fit-content;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  background: #C0F54D;
  border-radius: 12px;
  white-space: nowrap;
  cursor: pointer;

  &.lightgreen {
    background: #C0F54D99;
  }

  &.green-arrow {
    height: 62px;
    gap: 8px;
    font-size: 18px;
    padding: 0 24px;
  }

  &.icon {
    width: 56px;
    height: 56px;
  }
}

@media (max-width: 1440px) {
  .button {
    gap: 8px;
    padding: 0 18px;
    height: 40px;
    font-size: 13px;
    border-radius: 10px;

    &.green-arrow {
      height: 54px;
      gap: 8px;
      font-size: 16px;
      padding: 0 20px;
    }

    &.icon {
      width: 52px;
      height: 52px;
    }
  }
}

@media (max-width: 992px) {
  .button {
    gap: 8px;
    padding: 0 18px;
    height: 44px;
    font-size: 14px;
    border-radius: 12px;

    &.green-arrow {
      height: 50px;
      font-size: 14px;
      padding: 0 20px;
    }

    &.icon {
      width: 48px;
      height: 48px;
      padding: 12px;

      & img {
        width: 24px;
      }
    }
  }
}
</style>