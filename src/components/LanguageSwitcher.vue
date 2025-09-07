<template>
  <div class="language-switcher">
    <BDropdown :text="currentLanguage" variant="outline-light" size="sm">
      <BDropdownItem 
        v-for="lang in languages" 
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        :active="currentLocale === lang.code"
      >
        {{ lang.flag }} {{ lang.name }}
      </BDropdownItem>
    </BDropdown>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n()
    
    const languages = [
      { code: 'en', flag: '🇺🇸', name: 'English' },
      { code: 'fr', flag: '🇫🇷', name: 'Français' }
    ]
    
    const currentLocale = computed(() => locale.value)
    
    const currentLanguage = computed(() => {
      const current = languages.find(lang => lang.code === locale.value)
      return current ? `${current.flag} ${current.name}` : 'Language'
    })
    
    const changeLanguage = (langCode) => {
      locale.value = langCode
      // Save to localStorage for persistence
      localStorage.setItem('portfolio-language', langCode)
    }
    
    // Load saved language on component mount
    const savedLanguage = localStorage.getItem('portfolio-language')
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      locale.value = savedLanguage
    }
    
    return {
      languages,
      currentLocale,
      currentLanguage,
      changeLanguage
    }
  }
}
</script>

<style scoped>
.language-switcher {
  margin-left: 15px;
}
</style>
