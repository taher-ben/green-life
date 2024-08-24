import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ar from './locales/ar.json';

function loadLocaleMessages() {
  const locales = [{ en: en }, { ar: ar }];
  const messages = {};
  locales.forEach(lang => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages;
}

// Retrieve the last selected language from local storage or default to 'en'
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

export default createI18n({
  locale: selectedLanguage, // Use the saved language or default to 'en'
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
});
