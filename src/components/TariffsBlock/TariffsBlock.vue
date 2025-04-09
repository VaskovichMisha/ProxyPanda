<template>
  <div class="tariffs-block">
    <div class="tariffs-block__traffic">
      <span>{{ block.startTraffic }}{{ $t('main.gb') }}</span>
      <span>{{ block.endTraffic }}{{ $t('main.gb') }}</span>
    </div>
    <div class="tariffs-block__support">
      <img v-if="!block.support" src="@/assets/svg/cross-icon.svg" alt="">
      <img v-else src="@/assets/svg/check-icon.svg" alt="">
    </div>
    <div class="tariffs-block__transfer">
      <img v-if="!block.transfer" src="@/assets/svg/cross-icon.svg" alt="">
      <img v-else src="@/assets/svg/check-icon.svg" alt="">
    </div>
    <div class="tariffs-block__checker">
      <span>{{ block.checker }}</span>
    </div>
    <div v-if="!block?.anotherCost" class="tariffs-block__cost">
      <span>${{ block?.startCost }}/{{ $t('main.gb') }}</span>
      <span>${{ block?.endCost }}/{{ $t('main.gb') }}</span>
    </div>
    <div v-else class="tariffs-block__cost">
      {{ block.anotherCost }}
    </div>
    <div>
      <Button>
        {{ block.button ? block.button : $t('main.buy') }}
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button/Button.vue";

export default {
  props: {
    block: {
      type: Object,
      default: {}
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@use "tariffsBlock";
</style>