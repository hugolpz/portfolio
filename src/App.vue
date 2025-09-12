<template>
  <div class="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <BioGraph entity-id="Q113354496" />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Banner from './components/Banner.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import BioGraph from './components/BioGraph.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Banner,
    Skills,
    Projects,
    BioGraph,
    Footer
  }
}
</script>
