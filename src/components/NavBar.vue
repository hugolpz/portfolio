<template>
  <BNavbar :class="{ scrolled: scrolled }" expand="md">
    <BContainer>
      <BNavbarToggle target="basic-navbar-nav">
        <span class="navbar-toggler-icon"></span>
      </BNavbarToggle>
      <BCollapse id="basic-navbar-nav" is-nav>

          <LanguageSwitcher />
        <BNavbarNav class="ms-auto">
          <BNavItem
            href="#home"
            :class="activeLink === 'home' ? 'active navbar-link' : 'navbar-link'"
            @click="onUpdateActiveLink('home')"
          >
            {{ $t('navbar.home') }}
          </BNavItem>
          <BNavItem
            href="#skills"
            :class="activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'"
            @click="onUpdateActiveLink('skills')"
          >
            {{ $t('navbar.skills') }}
          </BNavItem>
          <BNavItem
            href="#project"
            :class="activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'"
            @click="onUpdateActiveLink('projects')"
          >
            {{ $t('navbar.projects') }}
          </BNavItem>
          <BNavItem
            href="https://linkedin.com/in/lopez-hugo-a9402022/" target="_blank"
            :class="activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'"
            @click="onUpdateActiveLink('resume')"
          >
            {{ $t('navbar.resume') }}
          </BNavItem>
        </BNavbarNav>
        <span class="navbar-text">
          <div class="social-icon">
            <a href="https://linkedin.com/in/lopez-hugo-a9402022/" target="_blank">
              <img :src="navIcon1" alt="" />
            </a>
            <a class="gh" href="https://github.com/hugolpz" target="_blank">
              <img :src="navIcon2" alt="" />
            </a>
            <a class="hal" href="https://hal.science/search/index/q/*/authIdHal_s/hugo-pierre-lopez" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/HAL_archive-logo_(2021)-white.svg" alt="" />
            </a>
          </div>
          <a target="_blank" href="https://linkedin.com/in/lopez-hugo-a9402022/">
            <button class="vvd">
              <span>{{ $t('navbar.connect') }}</span>
            </button>
          </a>
        </span>
      </BCollapse>
    </BContainer>
  </BNavbar>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import navIcon1 from '@/assets/img/nav-icon1.svg'
import navIcon2 from '@/assets/img/gh.png'

export default {
  name: 'NavBar',
  components: {
    LanguageSwitcher
  },
  setup() {
    const activeLink = ref('home')
    const scrolled = ref(false)

    const onScroll = () => {
      if (window.scrollY > 50) {
        scrolled.value = true
      } else {
        scrolled.value = false
      }
    }

    const onUpdateActiveLink = (value) => {
      activeLink.value = value
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', onScroll)
    })

    return {
      activeLink,
      scrolled,
      onUpdateActiveLink,
      navIcon1,
      navIcon2
    }
  }
}
</script>
