<template>
  <header class="header">
    <img class="header__logo" src="@/assets/svg/logo.svg" alt="logo">
    <div class="header__nav">
      <Dropdown
        :buttonText="$t('main.proxy')"
        :items="proxy"
      />
      <Dropdown
        :buttonText="$t('main.using')"
        :items="using"
      />
      <router-link :to="'/'">
        {{ $t('main.price') }}
      </router-link>
      <Dropdown
        :buttonText="$t('main.resources')"
        :items="resources"
      />
    </div>
    <div class="header__buttons">
      <LanguageSwitcher />
      <Button type="lightgreen">
        {{ $t('main.login') }}
      </Button>
      <Button>
        {{ $t('main.buyNow') }}
      </Button>
    </div>
  </header>
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
  computed: {
    proxy() {
      return [
        { label: this.$t('main.mobileProxies'), href: '/' },
        { label: this.$t('main.residentialProxies'), href: '/' },
        { label: this.$t('main.proxyChecker'), href: '/' },
      ];
    },
    using() {
      return [
        { label: this.$t('main.browsers'), href: '/' },
        { label: this.$t('main.mobileDevices'), href: '/' },
        { label: this.$t('main.apps'), href: '/' },
      ]
    },
    resources() {
      return [
        { label: this.$t('main.knowledgeBase'), href: '/' },
        { label: this.$t('main.partners'), href: '/' },
        { label: this.$t('main.support'), href: '/' },
        { label: this.$t('main.integrations'), href: '/' },
      ]
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
@use "header";
</style>