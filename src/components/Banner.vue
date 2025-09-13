<template>
  <section class="banner" id="home">
    <BContainer>
      <BRow class="aligh-items-center">
        <BCol cols="12" md="6" xl="7">
          <div class="animate__animated animate__fadeIn">
            <span class="tagline">{{ $t('banner.tagline') }}</span>
            <h1>
              {{ $t('banner.greeting') }} {{ $t('banner.firstname') }},<br>
              <span class="txt-rotate" :data-period="1000">
                <span class="wrap">{{ displayText }}</span>
              </span>
            </h1>
            <p v-html="$t('banner.description')"></p>
            <a class="decoration" href="#project">
              <button @click="scrollToProjects">
                See some of my projects 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </button>
            </a>
          </div>
        </BCol>
        <BCol cols="12" md="6" xl="5">
          <div class="animate__animated animate__zoomIn">
            <img :src="headerImg" alt="Header Img"/>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import headerImg from '@/assets/img/header-img.svg'

export default {
  name: 'Banner',
  setup() {
    const { tm } = useI18n()
    const loopNum = ref(0)
    const isDeleting = ref(false)
    const displayText = ref('')
    
    // Get roles array from i18n with fallback
    const toRotate = computed(() => {
      const roles = tm('banner.roles')
      return  tm("banner.roles") ;
    })
    
    let ticker = null

    const tick = () => {
      const roles = toRotate.value
      const i = loopNum.value % roles.length
      const fullText = roles[i]
      
      if (isDeleting.value) {
        displayText.value = fullText.substring(0, displayText.value.length - 1)
      } else {
        displayText.value = fullText.substring(0, displayText.value.length + 1)
      }

      let delay = isDeleting.value ? 50 : 150

      if (!isDeleting.value && displayText.value === fullText) {
        delay = 2000 // Pause when word is complete
        isDeleting.value = true
      } else if (isDeleting.value && displayText.value === '') {
        isDeleting.value = false
        loopNum.value++
        delay = 500 // Pause before next word
      }

      ticker = setTimeout(tick, delay)
    }

    const startTypewriter = () => {
      if (ticker) clearTimeout(ticker)
      tick()
    }

    const scrollToProjects = () => {
      document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })
    }

    onMounted(startTypewriter)
    onUnmounted(() => ticker && clearTimeout(ticker))

    return {
      displayText,
      headerImg,
      scrollToProjects
    }
  }
}
</script>
