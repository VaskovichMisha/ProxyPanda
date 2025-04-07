<template>
  <header class="header">
    <div class="header__logo">
      ProxyPanda
    </div>
    <div class="header__nav">
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
    <div class="header__buttons">
      <LanguageSwitcher />
      <Button type="lightgreen">
        Войти
      </Button>
      <Button>
        {{ $t('main.buyNow') }}
      </Button>
    </div>
  </header>
</template>

<script>
import Dropdown from "@/components/UI/Dropdown/Dropdown.vue";
import Button from "@/components/UI/Button/Button.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher.vue";

export default {
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
  components: {
    LanguageSwitcher,
    Button,
    Dropdown,
  }
}
</script>

<style lang="scss" scoped>
@use "header";
</style>