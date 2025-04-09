<template>
  <div class="main">
    <HeaderMobile @open-burger="isBurger = true" />
    <div class="main__hero">
      <div class="_container hero">
        <Header />
        <div class="hero__container">
          <div class="hero__banner">
            <span>{{ $t('main.hero.best') }}</span>
            {{ $t('main.hero.service') }}
          </div>
          <h1 class="hero__title">
            <div v-for="(line, lineIndex) in title" :key="lineIndex" class="hero__title-line">
              <span
                v-for="(word, wordIndex) in line.split(' ')"
                :key="wordIndex"
                class="hero__title-word"
                :style="{ animation: `fadeInUp 0.5s ease forwards ${getDelay(wordIndex)}s` }"
              >
                {{ word }}
              </span>
            </div>
          </h1>
          <div class="hero__subtitle">
            {{ $t('main.hero.subtitle.prefix') }} <br> {{ $t('main.hero.subtitle.suffix') }}
            <span>ProxyPanda</span>
          </div>
          <div class="hero__buttons">
            <Button type="green-arrow">
              {{ $t('main.hero.try') }}
              <img src="@/assets/svg/arrow-right.svg" alt="">
            </Button>
            <SignGoogle />
          </div>
        </div>
        <div class="hero__info-list">
          <HeroBlock
            v-for="(block, index) in heroBlocks"
            :key="block"
            :block="block"
            :style="{
              animation: `fadeInUp 0.5s ease forwards ${index * 0.3}s`
            }"
          />
          <div class="hero__info-list__absolute-text">
            <span>{{ $t('main.hero.discover') }} <br> {{ $t('main.hero.forYou') }}:</span>
            <img src="@/assets/svg/arrow-round-main.svg" alt="">
          </div>
        </div>
      </div>
      <div class="hero__absolute-button">
        <Button type="icon">
          <img src="@/assets/svg/message-time-icon.svg" alt="">
        </Button>
      </div>
      <img class="main__bg" src="@/assets/image/main-lines.png" alt="">
    </div>
    <div class="hero__info-list hero__info-list--mobile">
      <HeroBlock
        v-for="(block, index) in heroBlocks"
        :key="block"
        :block="block"
        :style="{
              animation: `fadeInUp 0.5s ease forwards ${index * 0.3}s`
            }"
      />
      <div class="hero__info-list__absolute-text">
        <span>{{ $t('main.hero.discover') }} <br> {{ $t('main.hero.forYou') }}:</span>
        <img src="@/assets/svg/arrow-round-main.svg" alt="">
      </div>
    </div>
    <div class="main__advantages">
      <div class="_container advantages">
        <div class="advantages__head">
          <div
            class="advantages__title"
            ref="advantagesTitle"
          >
            <span
              v-for="(word, wordIndex) in titleAdvantages"
              :key="wordIndex"
              class="advantages__title-word"
              :style="{ animation: visibleAdvantages ? `fadeInUp 0.5s ease forwards ${wordIndex * 0.1}s` : '' }"
            >
              {{ word }}
            </span>
          </div>
          <div class="advantages__description">
            <span>{{ $t('main.advantages.description') }}</span>
            <Button type="green-arrow">
              {{ $t('main.hero.try') }}
              <img src="@/assets/svg/arrow-right.svg" alt="">
            </Button>
          </div>
        </div>

        <div class="advantages__container">
          <AdvantagesBlock
            v-for="block in advantagesBlock"
            :key="block"
            :block="block"
          />
        </div>

        <div class="advantages__carousel">
          <Carousel v-bind="carouselConfig">
            <Slide v-for="block in advantagesBlock" :key="block">
              <AdvantagesBlock
                :block="block"
              />
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>

      </div>
    </div>
    <div class="main__how-work">
      <div class="_container how-work">
        <div class="how-work__head">
          <div
            class="how-work__title"
            ref="howWorkTitle"
          >
            <span
              v-for="(word, wordIndex) in titleHowWork"
              :key="wordIndex"
              class="how-work__title-word"
              :style="{ animation: visibleHowWork ? `fadeInUp 0.5s ease forwards ${wordIndex * 0.1}s` : '' }"
            >
              {{ word }}
            </span>
          </div>
          <div class="how-work__description">
            <span>{{ $t('main.howWork.description') }}</span>
          </div>
        </div>
        <div class="how-work__container">
          <HowWorkBlock
            v-for="block in howWorkBlock"
            :key="block"
            :block="block"
          />
        </div>
      </div>
    </div>
    <div class="main__quality">
      <div class="_container quality">
        <div class="quality__head">
          <div
            class="quality__title"
            ref="qualityTitle"
          >
            <span
              v-for="(word, wordIndex) in titleQuality"
              :key="wordIndex"
              class="quality__title-word"
              :style="{ animation: visibleQuality ? `fadeInUp 0.5s ease forwards ${wordIndex * 0.1}s` : '' }"
            >
              {{ word }}
            </span>
          </div>
          <span class="quality__subtitle">
            {{ $t('main.quality.subtitle') }}
          </span>
          <Button type="green-arrow">
            {{ $t('main.hero.try') }}
            <img src="@/assets/svg/arrow-right.svg" alt="">
          </Button>
        </div>
        <div class="quality__container">
          <QualityBlock
            v-for="block in qualityBlock"
            :key="block"
            :block="block"
          />
        </div>
      </div>
      <img class="quality__bg" src="@/assets/image/main-lines.png" alt="">
    </div>
    <div class="main__tariffs">
      <div class="_container tariffs">
        <div
          class="tariffs__title"
          ref="tariffsTitle"
        >
            <span
              v-for="(word, wordIndex) in titleTariffs"
              :key="wordIndex"
              class="tariffs__title-word"
              :style="{ animation: visibleTariffs ? `fadeInUp 0.5s ease forwards ${wordIndex * 0.1}s` : '' }"
            >
              {{ word }}
            </span>
        </div>
        <div class="tariffs__table">
          <div class="tariffs__table-head">
            <span>{{ $t('main.tariffs.headings.traffic') }}</span>
            <span>{{ $t('main.tariffs.headings.priority') }} <br> {{ $t('main.tariffs.headings.support') }}</span>
            <span>{{ $t('main.tariffs.headings.transfer') }} <br> {{ $t('main.tariffs.headings.traffics') }}</span>
            <span>Panda Fraud <br> Checker</span>
            <span>{{ $t('main.tariffs.headings.price') }}</span>
          </div>
          <div class="tariffs__table-list">
            <TariffsBlock
              v-for="block in tariffsList"
              :key="block"
              :block="block"
            />
          </div>
          <div class="tariffs__table-list--mobile">
            <TariffsMobile
              v-for="block in (showAll ? tariffsList : tariffsList.slice(0, 3))"
              :key="block"
              :block="block"
            />
          </div>
          <Button @click="toggleShow">
            {{ showAll ? $t('main.showLess') : $t('main.showMore') }}
          </Button>
          <div class="tariffs__payments">
            <span>{{ $t('main.tariffs.payments') }}</span>
            <div>
              <img src="@/assets/svg/visa-icon.svg" alt="">
              <img src="@/assets/svg/mastercard-icon.svg" alt="">
              <img src="@/assets/svg/bitcoin-icon.svg" alt="">
            </div>
          </div>
        </div>
        <div v-if="!showAll" class="tariffs__gradient"></div>
      </div>
    </div>
    <div class="main__questions">
      <div class="_container questions">
        <h2 class="questions__title">{{ $t('main.questions.title') }}</h2>
        <div class="questions__container">
          <div class="questions__list">
            <CustomDetails
              v-for="(item, index) in detailsList"
              :key="index"
              :value="item"
            />
          </div>
          <div class="questions__text">
            {{ $t('main.questions.more.0') }} — <span>{{ $t('main.questions.more.1') }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main__effective">
      <div class="_container effective">
        <div class="effective__container">
          <div
            class="effective__title"
            ref="effectiveTitle"
          >
            <span
              v-for="(word, wordIndex) in titleEffective"
              :key="wordIndex"
              class="effective__title-word"
              v-html="word"
              :style="{ animation: visibleEffective ? `fadeInUp 0.5s ease forwards ${wordIndex * 0.1}s` : '' }"
            />
          </div>
          <span class="effective__text">{{ $t('main.effective.text') }}</span>
          <div class="effective__buttons">
            <Button type="green-arrow">
              {{ $t('main.hero.try') }}
              <img src="@/assets/svg/arrow-right.svg" alt="">
            </Button>
            <SignGoogle />
          </div>
        </div>
      </div>
      <img class="effective__bg" src="@/assets/image/main-lines.png" alt="">
      <img class="effective__gradient" src="@/assets/image/qulity-grad.png" alt="">
    </div>
    <div class="main__footer">
      <Footer />
    </div>
  </div>
  <BurgerMenu
    :isBurger="isBurger"
    @close-burger="isBurger = false"
  />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Button from "@/components/UI/Button/Button.vue";
import SignGoogle from "@/components/UI/SignGoogle/SignGoogle.vue";
import HeroBlock from "@/components/HeroBlock/HeroBlock.vue";
import AdvantagesBlock from "@/components/AdvantagesBlock/AdvantagesBlock.vue";
import HowWorkBlock from "@/components/HowWorkBlock/HowWorkBlock.vue";
import QualityBlock from "@/components/QualityBlock/QualityBlock.vue";
import TariffsBlock from "@/components/TariffsBlock/TariffsBlock.vue";
import CustomDetails from "@/components/UI/CustomDetails/CustomDetails.vue"
import Footer from "@/components/Footer/Footer.vue";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile.vue";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu.vue";
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import TariffsMobile from "@/components/TariffsMobile/TariffsMobile.vue";

export default {
  data() {
    return {
      showAll: false,
      isBurger: false,
      delay: 0.1,
      visibleAdvantages: false,
      visibleHowWork: false,
      visibleQuality: false,
      visibleTariffs: false,
      visibleEffective: false,
      carouselConfig: {
        itemsToShow: 1.1,
        wrapAround: true,
        gap: 8,
        snapAlign: 'start',
        breakpointMode: 'carousel',
        breakpoints: {
          576: {
            itemsToShow: 2.5,
          },
          400: {
            itemsToShow: 1.8,
          },
        }
      }
    }
  },
  computed: {
    title() {
      return [this.$t('main.hero.title.0'), this.$t('main.hero.title.1')]
    },
    titleAdvantages() {
      return [this.$t('main.advantages.title.0'), this.$t('main.advantages.title.1'), this.$t('main.advantages.title.2'), this.$t('main.advantages.title.3')]
    },
    titleHowWork() {
      return [this.$t('main.howWork.title.0'), this.$t('main.howWork.title.1'), this.$t('main.howWork.title.2'), this.$t('main.howWork.title.3')]
    },
    titleQuality() {
      return [this.$t('main.quality.title.0'), this.$t('main.quality.title.1'), this.$t('main.quality.title.2'), this.$t('main.quality.title.3')]
    },
    titleTariffs() {
      return [this.$t('main.tariffs.title.0'), this.$t('main.tariffs.title.1')]
    },
    titleEffective() {
      return [
        this.$t('main.effective.title.0'),
        `${this.$t('main.effective.title.1.0')} <span class="effective__title-word--highlight">${this.$t('main.effective.title.1.1')}</span>`,
        this.$t('main.effective.title.2')
      ]
    },
    heroBlocks() {
      return [
        {
          text: [this.$t('main.heroBlocks.block1')],
          icon: new URL('@/assets/svg/lock-icon.svg', import.meta.url).href,
        },
        {
          text: [this.$t('main.heroBlocks.block2.0'), this.$t('main.heroBlocks.block2.1')],
          icon: new URL('@/assets/svg/convertshape-icon.svg', import.meta.url).href,
        },
        {
          text: [this.$t('main.heroBlocks.block3.0'), this.$t('main.heroBlocks.block3.1')],
          icon: new URL('@/assets/svg/user-tick-icon.svg', import.meta.url).href,
        },
      ]
    },
    advantagesBlock() {
      return [
        {
          title: this.$t('main.advantages.block1.title'),
          text: this.$t('main.advantages.block1.text'),
          img: new URL('@/assets/image/advantages-one.png', import.meta.url).href,
        },
        {
          title: this.$t('main.advantages.block2.title'),
          text: this.$t('main.advantages.block2.text'),
          img: new URL('@/assets/image/advantages-two.png', import.meta.url).href,
        },
        {
          title: this.$t('main.advantages.block3.title'),
          text: this.$t('main.advantages.block3.text'),
          img: new URL('@/assets/image/advantages-three.png', import.meta.url).href,
        },
      ]
    },
    howWorkBlock() {
      return [
        {
          title: this.$t('main.howWork.block1.title'),
          text: this.$t('main.howWork.block1.text'),
          img: new URL('@/assets/image/how-work-one.png', import.meta.url).href,
        },
        {
          title: this.$t('main.howWork.block2.title'),
          text: this.$t('main.howWork.block2.text'),
          img: new URL('@/assets/image/how-work-two.png', import.meta.url).href,
        },
      ]
    },
    qualityBlock() {
      return [
        {
          title: this.$t('main.quality.block.title1'),
          img: new URL('@/assets/svg/quality-one.svg', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-1.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-2.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-3.svg', import.meta.url).href
          ]
        },
        {
          title: this.$t('main.quality.block.title2'),
          img: new URL('@/assets/svg/quality-two.png', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-4.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-5.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-6.svg', import.meta.url).href
          ]
        },
        {
          title: this.$t('main.quality.block.title3'),
          img: new URL('@/assets/svg/quality-three.png', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-7.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-8.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-9.svg', import.meta.url).href
          ]
        },
        {
          title: this.$t('main.quality.block.title4'),
          img: new URL('@/assets/svg/quality-four.png', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-10.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-11.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-12.svg', import.meta.url).href
          ]
        },
        {
          title: this.$t('main.quality.block.title5'),
          img: new URL('@/assets/svg/quality-five.png', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-13.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-14.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-15.svg', import.meta.url).href
          ]
        },
        {
          title: this.$t('main.quality.block.title6'),
          img: new URL('@/assets/svg/quality-six.png', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-16.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-17.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-18.svg', import.meta.url).href
          ]
        },
        {
          title: this.$t('main.quality.block.title7'),
          img: new URL('@/assets/svg/quality-seven.png', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-19.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-20.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-21.svg', import.meta.url).href
          ]
        },
      ]
    },
    tariffsList() {
      return [
        { startTraffic: 5, endTraffic: 9, support: false, transfer: true, checker: this.$t('main.tariffs.free'), startCost: '6,00', endCost: '3,3' },
        { startTraffic: 10, endTraffic: 18, support: false, transfer: true, checker: this.$t('main.tariffs.free'), startCost: '5,60', endCost: '3,11' },
        { startTraffic: 10, endTraffic: 45, support: false, transfer: true, checker: this.$t('main.tariffs.free'), startCost: '5,40', endCost: '3' },
        { startTraffic: 10, endTraffic: 90, support: false, transfer: true, checker: this.$t('main.tariffs.free'), startCost: '4,80', endCost: '3' },
        { startTraffic: 10, endTraffic: 160, support: true, transfer: true, checker: this.$t('main.tariffs.free'), startCost: '4,45', endCost: '2,67' },
        { startTraffic: 10, endTraffic: 450, support: true, transfer: true, checker: this.$t('main.tariffs.free'), startCost: '4,00', endCost: '2,47' },
        { startTraffic: 10, endTraffic: 1000, support: true, transfer: true, checker: this.$t('main.tariffs.free'), anotherCost: this.$t('main.tariffs.anotherCost'), button: this.$t('main.tariffs.button')},
      ]
    },
    detailsList() {
      return [
        { title: this.$t('main.questions.list.0.q'), description: this.$t('main.questions.list.0.a') },
        { title: this.$t('main.questions.list.1.q'), description: this.$t('main.questions.list.1.a') },
        { title: this.$t('main.questions.list.2.q'), description: this.$t('main.questions.list.2.a') },
        { title: this.$t('main.questions.list.3.q'), description: this.$t('main.questions.list.3.a') },
      ]
    }
  },
  methods: {
    toggleShow()  {
      this.showAll = !this.showAll
    },
    getDelay(wordIndex) {
      return (wordIndex * this.delay).toFixed(2)
    },
    observeIntersection() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.target === this.$refs.advantagesTitle && entry.isIntersecting) {
            this.visibleAdvantages = true
          }
          if (entry.target === this.$refs.howWorkTitle && entry.isIntersecting) {
            this.visibleHowWork = true
          }
          if (entry.target === this.$refs.qualityTitle && entry.isIntersecting) {
            this.visibleQuality = true
          }
          if (entry.target === this.$refs.tariffsTitle && entry.isIntersecting) {
            this.visibleTariffs = true
          }
          if (entry.target === this.$refs.effectiveTitle && entry.isIntersecting) {
            this.visibleEffective = true
          }
        })
      }, options)

      observer.observe(this.$refs.advantagesTitle)
      observer.observe(this.$refs.howWorkTitle)
      observer.observe(this.$refs.qualityTitle)
      observer.observe(this.$refs.tariffsTitle)
      observer.observe(this.$refs.effectiveTitle)
    }
  },
  mounted() {
    this.observeIntersection()
  },
  components: {
    TariffsMobile,
    BurgerMenu,
    HeaderMobile,
    Footer,
    CustomDetails,
    TariffsBlock,
    QualityBlock,
    HowWorkBlock,
    AdvantagesBlock,
    HeroBlock,
    SignGoogle,
    Button,
    Header,
    Carousel,
    Slide,
    Pagination,
  }
}
</script>

<style lang="scss">
@use "mainLayout";
</style>