<template>
  <div class="main">
    <div class="main__hero">
      <div class="_container hero">
        <Header />
        <div class="hero__container">
          <div class="hero__banner">
            <span>Лучший</span>
            Прокси сервис
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
            Обходите блокировки, сохраняйте анонимность и <br> работайте без ограничений вместе с
            <span>ProxyPanda</span>
          </div>
          <div class="hero__buttons">
            <Button type="green-arrow">
              Попробовать
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
            <span>Откройте <br> для себя:</span>
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
            <span>Мы предлагаем уникальные функции, почти не имеющие аналогов на рынке:</span>
            <Button type="green-arrow">
              Попробовать
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
            <span>Традиционно поставщики прокси-серверов конкурировали за предоставление самой большой сети с наибольшим количеством IP-адресов, жертвуя качеством своих IP-адресов. В Proxy Panda мы делаем наоборот.</span>
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
            Получите конкурентное преимущество в своей отрасли
          </span>
          <Button type="green-arrow">
            Попробовать
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
            <span>Трафик</span>
            <span>Приоритетная <br> поддержка</span>
            <span>Перенос <br> трафика</span>
            <span>Panda Fraud <br> Checker</span>
            <span>Цена за ГБ</span>
          </div>
          <div class="tariffs__table-list">
            <TariffsBlock
              v-for="block in tariffsList"
              :key="block"
              :block="block"
            />
          </div>
          <div class="tariffs__payments">
            <span>Мы принимаем</span>
            <div>
              <img src="@/assets/svg/visa-icon.svg" alt="">
              <img src="@/assets/svg/mastercard-icon.svg" alt="">
              <img src="@/assets/svg/bitcoin-icon.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__questions">
      <div class="_container questions">
        <h2 class="questions__title">Часто задаваемые вопросы</h2>
        <div class="questions__container">
          <div class="questions__list">
            <CustomDetails
              v-for="(item, index) in detailsList"
              :key="index"
              :value="item"
            />
          </div>
          <div class="questions__text">
            Остались еще вопросы? — <span>задай их нашему оператору</span>
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
          <span class="effective__text">Самый надежный прокси провайдер на рынке</span>
          <div class="effective__buttons">
            <Button type="green-arrow">
              Попробовать
              <img src="@/assets/svg/arrow-right.svg" alt="">
            </Button>
            <SignGoogle />
          </div>
        </div>
      </div>
      <img class="effective__bg" src="@/assets/image/main-lines.png" alt="">
    </div>
    <div class="main__footer">
      <Footer />
    </div>
  </div>
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

export default {
  data() {
    return {
      heroBlocks: [
        {
          text: '2 000 000 + IP адресов с чистотой выше 95%',
          icon: new URL('@/assets/svg/lock-icon.svg', import.meta.url).href,
        },
        {
          text: 'Высокую и стабильную скорость, сохранение сессии до 24 часов',
          icon: new URL('@/assets/svg/convertshape-icon.svg', import.meta.url).href,
        },
        {
          text: 'Оперативную и квалифицированную поддержку 24/7',
          icon: new URL('@/assets/svg/user-tick-icon.svg', import.meta.url).href,
        },
      ],
      advantagesBlock: [
        {
          title: 'Улучшеная IP-фильтрация',
          text: 'Благодаря технологии гибридного прокси ProxyPanda обеспечивает более длительное время сеанса, а IP-адреса сохраняются до 24 часов',
          img: new URL('@/assets/image/advantages-one.png', import.meta.url).href,
        },
        {
          title: 'Sticky сессии',
          text: 'Благодаря технологии гибридного прокси ProxyPanda обеспечивает более длительное время сеанса, а IP-адреса сохраняются до 24 часов',
          img: new URL('@/assets/image/advantages-two.png', import.meta.url).href,
        },
        {
          title: 'Опытный саппорт',
          text: 'Благодаря технологии гибридного прокси ProxyPanda обеспечивает более длительное время сеанса, а IP-адреса сохраняются до 24 часов',
          img: new URL('@/assets/image/advantages-three.png', import.meta.url).href,
        },
      ],
      howWorkBlock: [
        {
          title: 'Улучшеная IP-фильтрация',
          text: 'Когда вы подключаетесь к прокси, предоставленному другой компанией, вам назначается IP из пула, который не был проверен. В этих пулах от 75 до 99% IP-адресов были забанены, занесены в черный список или использовались для спама, что делает их рискованными для вашего бизнеса.',
          img: new URL('@/assets/image/how-work-two.png', import.meta.url).href,
        },
        {
          title: 'Sticky сессии',
          text: 'ProxyPandа предоставляет вам IP в пользование ТОЛЬКО после проверки его качества с помощью передового алгоритма. Это гарантирует вам безопасность от обнаружения и стабильность работы.',
          img: new URL('@/assets/image/how-work-one.png', import.meta.url).href,
        },
      ],
      qualityBlock: [
        {
          title: 'Bounty & Airdrop',
          img: new URL('@/assets/svg/quality-one.svg', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-1.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-2.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-3.svg', import.meta.url).href
          ]
        },
        {
          title: 'Bounty & Airdrop',
          img: new URL('@/assets/svg/quality-two.png', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-4.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-5.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-6.svg', import.meta.url).href
          ]
        },
        {
          title: 'Bounty & Airdrop',
          img: new URL('@/assets/svg/quality-one.svg', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-1.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-2.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-3.svg', import.meta.url).href
          ]
        },
        {
          title: 'Bounty & Airdrop',
          img: new URL('@/assets/svg/quality-one.svg', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-1.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-2.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-3.svg', import.meta.url).href
          ]
        },
        {
          title: 'Улучшеная IP-фильтрация',
          img: new URL('@/assets/svg/quality-one.svg', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-1.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-2.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-3.svg', import.meta.url).href
          ]
        },
        {
          title: 'Улучшеная IP-фильтрация',
          img: new URL('@/assets/svg/quality-one.svg', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-1.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-2.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-3.svg', import.meta.url).href
          ]
        },
        {
          title: 'Улучшеная IP-фильтрация',
          img: new URL('@/assets/svg/quality-one.svg', import.meta.url).href,
          images: [
            new URL('@/assets/svg/quality-1.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-2.svg', import.meta.url).href,
            new URL('@/assets/svg/quality-3.svg', import.meta.url).href
          ]
        },
      ],
      tariffsList: [
        { startTraffic: 5, endTraffic: 9, support: false, transfer: true, checker: 'Бесплатно', startCost: '6.00', endCost: '3.3' },
        { startTraffic: 10, endTraffic: 18, support: false, transfer: true, checker: 'Бесплатно', startCost: '5.60', endCost: '3.11' },
        { startTraffic: 10, endTraffic: 45, support: false, transfer: true, checker: 'Бесплатно', startCost: '5.40', endCost: '3' },
        { startTraffic: 10, endTraffic: 90, support: false, transfer: true, checker: 'Бесплатно', startCost: '4.80', endCost: '3' },
        { startTraffic: 10, endTraffic: 160, support: true, transfer: true, checker: 'Бесплатно', startCost: '4.45', endCost: '2.67' },
        { startTraffic: 10, endTraffic: 450, support: true, transfer: true, checker: 'Бесплатно', startCost: '4.00', endCost: '2.47' },
        { startTraffic: 10, endTraffic: 1000, support: true, transfer: true, checker: 'Бесплатно', anotherCost: 'По запросу', button: 'Контакты'},
      ],
      detailsList: [
        { title: 'Какие у вас есть способы оплаты?', description: 'Мы поддерживаем протоколы HTTP и SOCKS5 Мы поддерживаем протоколы HTTP и SOCKS5' },
        { title: 'Какие прокси протоколы вы поддерживаете?', description: 'Мы поддерживаем протоколы HTTP и SOCKS5' },
        { title: 'Как вы получаете прокси-серверы?', description: 'Мы поддерживаем протоколы HTTP и SOCKS5 Мы поддерживаем протоколы HTTP и SOCKS5 Мы поддерживаем протоколы HTTP и SOCKS5' },
        { title: 'Прокси каких стран есть у вас в наличии?', description: 'Мы поддерживаем протоколы HTTP и SOCKS5 Мы поддерживаем протоколы HTTP и SOCKS5' },
      ],
      delay: 0.1,
      title: ['Высочайшее качество', 'для вашей эффективной работы'],
      titleAdvantages: ['Оцените', 'преимущества', 'нашего', 'прокси-сервиса'],
      titleHowWork: ['Вот', 'как', 'работает', 'Panda', 'Fraud', 'Checker'],
      titleQuality: ['Качественная', 'работа', 'в любых', 'направлениях!'],
      titleTariffs: ['Наши', 'тарифы'],
      titleEffective: [
        'Высочайшее качество',
        'для вашей <span class="effective__title-word--highlight">эффективной</span>',
        'работы'
      ],
      visibleAdvantages: false,
      visibleHowWork: false,
      visibleQuality: false,
      visibleTariffs: false,
      visibleEffective: false,
    }
  },
  methods: {
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
  }
}
</script>

<style lang="scss">
@use "mainLayout";
</style>