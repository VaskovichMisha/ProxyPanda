import { createI18n } from 'vue-i18n';

const messages = {
  en: import.meta.glob('./locales/en/*.json', { eager: true }),
  ru: import.meta.glob('./locales/ru/*.json', { eager: true }),
};

const processMessages = (languageFiles) => {
  const processedMessages = {};
  for (const path in languageFiles) {
    const key = path.split('/').pop().replace('.json', '');
    processedMessages[key] = languageFiles[path];
  }
  return processedMessages;
};

const localeMessages = {
  en: processMessages(messages.en),
  ru: processMessages(messages.ru),
};

const localeStorageLang = localStorage.getItem('lang') || 'ru';

export const i18n = createI18n({
  legacy: false,
  locale: localeStorageLang,
  fallbackLocale: 'en',
  messages: localeMessages,
  globalInjection: true,
});
