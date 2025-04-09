<template>
  <footer class="_container footer">
    <div class="footer__container">
      <div class="footer__main">
        <div class="footer__head">
          <img src="@/assets/svg/logo.svg" alt="logo">
          <span class="footer__subtitle">
            ProxyPanda. {{ $t('main.slogan') }}
          </span>
        </div>
        <div class="footer__social">
          <span>{{ $t('main.socials') }}</span>
          <div class="footer__buttons">
            <Button type="icon">
              <img src="@/assets/svg/telegram-icon.svg" alt="">
            </Button>
            <Button type="icon">
              <img src="@/assets/svg/facebook-icon.svg" alt="">
            </Button>
          </div>
        </div>
      </div>
      <div class="footer__blocks">
        <div class="footer__block">
          <span class="footer__block-title">{{ $t('main.proxy') }}</span>
          <div class="footer__block-list">
            <RouterLink to="#">{{ $t('main.mobileProxies') }}</RouterLink>
            <RouterLink to="#">{{ $t('main.residentialProxies') }}</RouterLink>
            <RouterLink to="#">{{ $t('main.proxyChecker') }}</RouterLink>
          </div>
        </div>
        <div class="footer__block">
          <span class="footer__block-title">{{ $t('main.using') }}</span>
          <div class="footer__block-list">
            <RouterLink to="#">{{ $t('main.browsers') }}</RouterLink>
            <RouterLink to="#">{{ $t('main.mobileDevices') }}</RouterLink>
            <RouterLink to="#">{{ $t('main.apps') }}</RouterLink>
          </div>
        </div>
        <div class="footer__block">
          <span class="footer__block-title">{{ $t('main.resources') }}</span>
          <div class="footer__block-list">
            <RouterLink to="#">{{ $t('main.knowledgeBase') }}</RouterLink>
            <RouterLink to="#">{{ $t('main.partners') }}</RouterLink>
            <RouterLink to="#">{{ $t('main.support') }}</RouterLink>
            <RouterLink to="#">{{ $t('main.integrations') }}</RouterLink>
          </div>
        </div>
        <div class="footer__block">
          <span class="footer__block-title">{{ $t('main.info') }}</span>
          <div class="footer__block-list">
            <RouterLink to="#">{{ $t('main.terms') }}</RouterLink>
            <RouterLink to="#">{{ $t('main.feedback') }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__under">
      <span>© ProxyPanda 2024-2025, {{ $t('main.allRights') }}</span>
      <RouterLink to="#">{{ $t('main.privacy') }}</RouterLink>
    </div>
  </footer>
</template>

<script>
import Button from "@/components/UI/Button/Button.vue";

export default {
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@use "footer";
</style>
