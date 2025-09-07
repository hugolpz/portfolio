import { createI18n } from 'vue-i18n'

// Import locale messages
import en from './locales/en.json'
import fr from './locales/fr.json'

const messages = {
  en,
  fr
}

// Create i18n instance
const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: 'en', // Default locale
  fallbackLocale: 'en',
  messages
})

export default i18n
