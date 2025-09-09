<template>
  <section class="skill" id="skills">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="skill-bx wow zoomIn">
            <h2>{{ $t('skills.title') }}</h2>
            <p>{{ $t('skills.description') }}</p>
            <Carousel 
              :settings="carouselSettings" 
              :breakpoints="breakpoints"
              :wrap-around="true"
              :autoplay="3000"
            >
              <Slide v-for="skill in skills" :key="skill.name">
                <div class="item">
                  <a v-if="skill.website" :href="skill.website" target="_blank" rel="noopener noreferrer">
                    <img v-if="skill.img" :src="skill.img" :alt="skill.name" />
                    <div v-else class="placeholder-logo">{{ skill.name.charAt(0) }}</div>
                  </a>
                  <div v-else>
                    <img v-if="skill.img" :src="skill.img" :alt="skill.name" />
                    <div v-else class="placeholder-logo">{{ skill.name.charAt(0) }}</div>
                  </div>
                  <h5>{{ skill.name }}</h5>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <img class="background-image-left" :src="colorSharp" alt="Image" />
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import colorSharp from '@/assets/img/color-sharp.png'

export default {
  name: 'Skills',
  components: {
    Carousel,
    Slide
  },
  setup() {
    const skills = [ 
      { img:"https://upload.wikimedia.org/wikipedia/commons/7/75/Wikimedia_France_logo.svg",website:"https://www.wikimedia.fr", name:"Wikimedia France" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Ministère_de_la_Culture.svg",website:"https://www.culture.gouv.fr/Thematiques/langue-francaise-et-langues-de-france", name:"DGLFLF (Délégation Générale à la Langue Française et aux Langues de France)" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/3/31/Wikimedia_Foundation_logo_-_vertical.svg",website:"https://meta.wikimedia.org", name:"Wikimedia Foundation" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/c/c0/URFIST_Occitanie-2023.svg",website:"https://urfist.univ-toulouse.fr", name:"URFIST Occitanie" },
      { img:"https://raw.githubusercontent.com/scribe-org/Organization/main/resources/images/logos/GSoCLogo.png",website:"https://summerofcode.withgoogle.com/", name:"Google Summer of Code" },

      { img:"https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg",website:"https://github.com", name:"GitHub" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg",website:"https://gitlab.com", name:"GitLab" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",website:"https://vuejs.org", name:"VueJS" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",website:"https://expressjs.com", name:"ExpressJS" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",website:"https://nodejs.org", name:"NodeJS" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Antu_mongodb.svg",website:"https://www.mongodb.com", name:"MongoDB" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", website: "", name: "JavaScript" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", website: "", name: "CSS3" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", website: "", name: "HTML5" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", website: "", name: "VS Code" },
      { img:"https://upload.wikimedia.org/wikipedia/en/a/aa/Microsoft_Copilot_Icon.svg", website:"https://www.microsoft.com/en-us/microsoft-365/copilot", name:"Microsoft Copilot"},
      { img:"https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg", website:"https://chat.openai.com", name:"ChatGPT"},
      { img:"https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png", website: "", name: "Docker" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", website: "", name: "Kubernetes" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Inkscape_Logo.svg", website: "", name: "Inkscape" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", website: "", name: "Python" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/b/bb/Open_Science_Logo.jpg", website: "", name: "Open Science" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg", website: "https://www.wikipedia.org", name: "Wikipedia" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/7/71/Wikidata.svg", website:"https://wikidata.org", name:"Wikidata"},
      { img:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Commons-logo.svg", website:"https://commons.wikimedia.org", name:"Wikimedia Commons"},
      { img:"https://upload.wikimedia.org/wikipedia/commons/4/46/Lingualibre_SignIt-logo-no-text.svg", website:"https://meta.wikimedia.org/wiki/Lingua_Libre/SignIt", name:"SignIt" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/5/55/Lingualibre-logo-no-text.svg", website:"https://lingualibre.org", name:"LinguaLibre" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Wikimedia_Phabricator_logo.svg", website:"https://phacility.com/phabricator/", name:"Phabricator" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/a/a6/MediaWiki-2020-icon.svg", website:"https://www.mediawiki.org", name:"MediaWiki" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg", website:"https://www.r-project.org", name:"R" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg", website:"https://www.openstreetmap.org", name:"OpenStreetMap" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/3/3e/QGIS_logo_minimal.svg", website:"https://www.qgis.org", name:"QGIS" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/d/df/GDALLogoColor.svg", website:" 	http://download.osgeo.org/gdal/", name:"Gdal" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/1/15/Logo_D3.svg", website:"https://d3js.org", name:"D3.js" },
      { img:"https://upload.wikimedia.org/wikipedia/commons/8/8f/EdX.svg", website:"https://www.edx.org", name:"OpenEdX" },
      ]

    const carouselSettings = {
      itemsToShow: 6,
      snapAlign: 'center',
      itemsToScroll: 3
    }

    const breakpoints = {
      464: {
        itemsToShow: 2,
        snapAlign: 'center',
      itemsToScroll: 2
      },
      1024: {
        itemsToShow: 4,
        snapAlign: 'center',
      itemsToScroll: 4
      },
      3000: {
        itemsToShow: 6,
        snapAlign: 'center',
      itemsToScroll: 6
      },
      4000: {
        itemsToShow: 8,
        snapAlign: 'center',
      itemsToScroll: 8
      }
    }

    return {
      skills,
      carouselSettings,
      breakpoints,
      colorSharp
    }
  }
}
</script>

<style scoped>
.placeholder-logo {
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin: 0 auto 15px auto;
}

.item a {
  text-decoration: none;
  color: inherit;
}

.item a:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
</style>
