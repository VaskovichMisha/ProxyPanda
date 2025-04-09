<template>
  <div class="tariffs-mobile">
    <div class="tariffs-mobile__main">
      <div class="tariffs-mobile__info">
        <div class="tariffs-mobile__traffic">
          <span>
            <span>{{ $t('main.tariffs.headings.traffic') }}:</span>
            {{ block.endTraffic }} {{ $t('main.gb') }}
          </span>
          <div>{{ block.startTraffic }} {{ $t('main.gb') }}</div>
        </div>
        <div class="tariffs-mobile__cost">
          <span>${{ block.endCost }}/{{ $t('main.gb') }}</span>
          <span>${{ block.startCost }}/{{ $t('main.gb') }}</span>
        </div>
      </div>
      <Button>
        {{ $t('main.buy') }}
        <img src="@/assets/svg/arrow-right.svg" alt="">
      </Button>
    </div>
    <div class="tariffs-mobile__under">
      <div class="tariffs-mobile__block">
        <img v-if="!block.transfer" src="@/assets/svg/cross-icon.svg" alt="">
        <img v-else src="@/assets/svg/check-icon.svg" alt="">
        <span>{{ $t('main.tariffs.headings.transfer') }} {{ $t('main.tariffs.headings.traffics') }}</span>
      </div>
      <div class="tariffs-mobile__block">
        <img src="@/assets/svg/check-icon.svg" alt="">
        <span>Panda Fraud Checker</span>
      </div>
      <div class="tariffs-mobile__block">
        <img v-if="!block.support" src="@/assets/svg/cross-icon.svg" alt="">
        <img v-else src="@/assets/svg/check-icon.svg" alt="">
        <span>{{ $t('main.tariffs.headings.priority') }} {{ $t('main.tariffs.headings.support') }}</span>
      </div>
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
  },
}
</script>

<style lang="scss" scoped>
@use "tariffsMobile";
</style>