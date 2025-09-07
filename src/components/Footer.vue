<template>
  <footer class="footer">
    <BContainer>
      <BRow class="align-items-center">
        <BCol class="name" cols="12" sm="6">
        </BCol>
        <BCol cols="12" sm="6" class="text-center text-sm-end">
          <div class="social-icon" style="margin-top: 30px">
            <a target="_blank" href="https://linkedin.com/in/lopez-hugo-a9402022/">
              <img :src="navIcon1" alt="LinkedIn" />
            </a>
            <a href="https://github.com/hugolpz" target="_blank">
              <img :src="navIcon2" alt="GitHub" />
            </a>
          </div>
          <p>{{ $t('footer.copyright') }}</p>
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template>

<script>
import navIcon1 from '@/assets/img/nav-icon1.svg'
import navIcon2 from '@/assets/img/gh.png'

export default {
  name: 'Footer',
  setup() {
    return {
      navIcon1,
      navIcon2
    }
  }
}
</script>
