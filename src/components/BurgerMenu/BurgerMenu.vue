<template>
  <div :class="{ 'open': isBurger }" class="burger-menu">
    <div class="burger-menu__container">
      <div class="burger-menu__head">
        <div class="burger-menu__block">
          <button @click="closeBurger" class="burger-menu__close">
            <div></div>
            <div></div>
          </button>
          <span class="burger-menu__title">
        ProxyPanda
      </span>
        </div>
        <LanguageSwitcher />
      </div>
      <div class="burger-menu__nav">
        <Dropdown
          buttonText='Прокси'
          :items="proxy"
        />
        <Dropdown
          buttonText='Использование'
          :items="using"
        />
        <router-link :to="'/'">
          Цена
        </router-link>
        <Dropdown
          buttonText='Ресурсы'
          :items="resources"
        />
      </div>
    </div>
    <div class="burger-menu__buttons">
      <Button type="lightgreen">
        Войти
      </Button>
      <Button>
        {{ $t('main.buyNow') }}
      </Button>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher.vue";
import Button from "@/components/UI/Button/Button.vue";
import Dropdown from "@/components/UI/Dropdown/Dropdown.vue";

export default {
  props: {
    isBurger: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      proxy: [
        { label: 'Мобильные прокси', href: '/' },
        { label: 'Резидентские прокси', href: '/' },
        { label: 'Прокси-чекер', href: '/' },
      ],
      using: [
        { label: 'Мобильные прокси', href: '/' },
        { label: 'Резидентские прокси', href: '/' },
        { label: 'Прокси-чекер', href: '/' },
      ],
      resources: [
        { label: 'Мобильные прокси', href: '/' },
        { label: 'Резидентские прокси', href: '/' },
        { label: 'Прокси-чекер', href: '/' },
      ],
    }
  },
  methods: {
    closeBurger() {
      this.$emit('close-burger')
    }
  },
  components: {
    Dropdown,
    Button,
    LanguageSwitcher,
  }
}
</script>

<style lang="scss" scoped>
@import "burgerMenu";
</style>