<template>
  <footer class="_container footer">
    <div class="footer__container">
      <div class="footer__main">
        <span class="footer__title">ProxyPanda</span>
        <span class="footer__subtitle">ProxyPanda. Самое качественное прокси-решение на рынке</span>
        <div class="footer__social">
          <span>Мы в соцсетях</span>
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
          <span class="footer__block-title">Прокси</span>
          <div class="footer__block-list">
            <RouterLink to="#">Мобильные прокси</RouterLink>
            <RouterLink to="#">Резидентские прокси</RouterLink>
            <RouterLink to="#">Прокси-чекер</RouterLink>
          </div>
        </div>
        <div class="footer__block">
          <span class="footer__block-title">Использование</span>
          <div class="footer__block-list">
            <RouterLink to="#">Браузеры</RouterLink>
            <RouterLink to="#">Мобильные устройства</RouterLink>
            <RouterLink to="#">Приложения</RouterLink>
          </div>
        </div>
        <div class="footer__block">
          <span class="footer__block-title">Ресурсы</span>
          <div class="footer__block-list">
            <RouterLink to="#">База знаний</RouterLink>
            <RouterLink to="#">Партнерская программа</RouterLink>
            <RouterLink to="#">Саппорт</RouterLink>
            <RouterLink to="#">Интеграции</RouterLink>
          </div>
        </div>
        <div class="footer__block">
          <span class="footer__block-title">Информация</span>
          <div class="footer__block-list">
            <RouterLink to="#">Условия обслуживания</RouterLink>
            <RouterLink to="#">Отзывы и предложения</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__under">
      <span>© ProxyPanda 2024-2025, Все права защищены</span>
      <RouterLink to="#">Политика конфиденциальности</RouterLink>
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