<template>
  <section class="project" id="project">
    <BContainer>
      <BRow>
        <BCol class="container-projects" cols="12">
          <div class="animate__animated animate__fadeIn">
            <h2>{{ $t('projects.title') }}</h2>
            <p>{{ $t('projects.description') }}
            </p>
            <BTabs content-class="mt-3" justified>
              <BTab :title="$t('projects.tabs.webProjects')" active>
                <div 
                  id="slideInUp" 
                  title="div2"
                  class="animate__animated animate__slideInUp"
                >
                  <div class="div3 projects">
                    <ProjectCard
                      v-for="(project, index) in projects"
                      :key="index"
                      :title="project.title"
                      :description="project.description"
                      :img-url="project.imgUrl"
                      :url="project.url"
                    />
                  </div>
                </div>
              </BTab>
              
              <BTab :title="$t('projects.tabs.moocs')">
                <div 
                  id="slideInUp" 
                  class="animate__animated animate__slideInUp"
                >
                  <div class="moocs">
                    <ProjectCard
                      v-for="(project, index) in moocs"
                      :key="index"
                      :title="project.title"
                      :description="project.description"
                      :img-url="project.imgUrl"
                      :url="project.url"
                    />
                  </div>
                </div>
              </BTab>
            </BTabs>
          </div>
        </BCol>
      </BRow>
    </BContainer>
    <img class="background-image-right" :src="colorSharp2" alt="Background" />
  </section>
</template>

<script>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from './ProjectCard.vue'
import uberclone from '@/assets/img/uberclone.jpg'
import portfolio from '@/assets/img/portfolio.jpg'
import pokemonapi from '@/assets/img/pokemonapi.png'
import colorSharp2 from '@/assets/img/color-sharp2.png'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  setup() {
    const { t } = useI18n()
    
    const projects = computed(() => [
      {
        title: t('projects.webProjects.uberClone.title'),
        description: t('projects.webProjects.uberClone.description'),
        imgUrl: uberclone,
        url: 'https://github.com/hugolpz/uber-clone'
      },
      {
        title: t('projects.webProjects.pokedexApi.title'),
        description: t('projects.webProjects.pokedexApi.description'),
        imgUrl: pokemonapi,
        url: 'https://github.com/hugolpz/api-pokedex'
      },
      {
        title: t('projects.webProjects.portfolio.title'),
        description: t('projects.webProjects.portfolio.description'),
        imgUrl: portfolio,
        url: 'https://github.com/hugolpz/portfolio'
      }
    ])

    const moocs = [
      { url: "https://www.fun-mooc.fr/en/cours/kit-de-contact-en-langues-orientales-chinois/", title:"Kit de contact en langues orientale : Chinois", description:"" },
      { url: "https://projects.learningplanetinstitute.org/profile/hugo-lopez/summary", title:"Hugo Lopez in the Learning Planete Institute's website", description:"" },
      { url: "https://projects.learningplanetinstitute.org/projects/mooc-education-par-la-recherche-conversion-n/summary", title:"MOOC: L'Éducation par la recherche", description:"" },
      { url: "https://hugolpz.github.io/OpenEdx-hanzi/", title: "OpenEdx-Hanzi", description: "" }
    ]

    return {
      projects,
      moocs,
      colorSharp2
    }
  }
}
</script>
