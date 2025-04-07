<template>
  <div class="language-switcher" ref="languageSwitcher" @click="toggleDropdown">
    <div class="language-switcher__current-lang">
      <span>{{ currentLang.code }}</span>
      <img :class="{ 'rotate-180': dropdownOpen }" src="@/assets/svg/arrow-down.svg" alt="">
    </div>
    <ul :class="{ 'open': dropdownOpen }" class="language-switcher__dropdown">
      <li
        v-for="lang in availableLocales"
        :key="lang.code"
        @click.stop="changeLanguage(lang.code)"
      >
        <img :src="lang?.flag" :alt="lang.label" />
        <span>{{ lang.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      availableLocales: [
        {
          code: 'ru',
          label: 'Русский',
          flag: new URL('@/assets/svg/ru-flag.svg', import.meta.url).href,
        },
        {
          code: 'en',
          label: 'English',
          flag: new URL('@/assets/svg/en-flag.svg', import.meta.url).href,
        },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
      this.dropdownOpen = false
    },
    handleClickOutside(event) {
      const clickInside = this.$refs.languageSwitcher.contains(event.target)
      if (!clickInside) {
        this.dropdownOpen = false
      }
    }
  },
  computed: {
    currentLang() {
      return this.availableLocales.find(
        (lang) => lang.code === this.$i18n.locale
      );
    },
  },
  mounted() {
    const savedLang = localStorage.getItem('lang')
    if (!savedLang) {
      const browserLang = navigator.language || navigator.userLanguage
      const langCode = browserLang.startsWith('ru') ? 'ru' : 'en'
      this.$i18n.locale = langCode
      localStorage.setItem('lang', langCode)
    }

    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
}
</script>

<style lang="scss" scoped>
@use "languageSwitcher";
</style>
