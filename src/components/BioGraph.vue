<template>
  <section class="biograph" id="biograph">
    <BContainer>
      <BRow>
        <BCol cols="12">
          <div class="animate__animated animate__fadeIn">
            <h2>{{ $t('biograph.title') }}</h2>
            <p>{{ $t('biograph.description') }}</p>
            <div class="biograph-content">
              <div class="biograph-frame">
                <iframe
                  :src="encodedSparqlUrl"
                  :title="title"
                  frameborder="0"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="origin" 
                  sandbox="allow-scripts allow-same-origin allow-popups"
                ></iframe>
              </div>
            </div>
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
import colorSharp2 from '@/assets/img/color-sharp2.png'

export default {
  name: 'BioGraph',
  props: {
    sparqlQuery: {
      type: String,
      default: ''
    },
    entityId: {
      type: String,
      default: 'Q113354496' // Hugo
    }
  },
  setup(props) {
    const { t } = useI18n()
    
    /**
     * Converts a SPARQL query into an encoded URI for Wikidata Query Service embed
     * @param {string} sparqlQuery - Raw SPARQL query string
     * @param {string} entityId - Wikidata entity ID (e.g., 'Q113354496')
     * @returns {string} - Encoded URI ready for iframe src
     */
    const encodeSparqlToUri = (sparqlQuery, entityId = 'Q113354496') => {
      // Default SPARQL query if none provided
      const defaultQuery = `# tool: scholia
PREFIX target: <http://www.wikidata.org/entity/${entityId}>

#defaultView:Graph
SELECT ?node ?nodeLabel ?nodeImage ?childNode ?childNodeLabel ?childNodeImage ?rgb 
WITH {
  SELECT DISTINCT ?property WHERE {
      ?property a wikibase:Property;
                wdt:P31 wd:Q18610173 ;
                wdt:P31 wd:Q26940804 . 
    }
} AS %properties
WITH {
  SELECT DISTINCT ?node ?childNode WHERE {
      BIND(target: AS ?node)
      ?node ?p ?i.
      ?childNode ?x ?p.
      ?childNode rdf:type wikibase:Property.
      FILTER(STRSTARTS(STR(?i), "http://www.wikidata.org/entity/Q"))
      FILTER(STRSTARTS(STR(?childNode), "http://www.wikidata.org/entity/P"))
    }
  LIMIT 5000
} AS %nodes
WITH {
  SELECT DISTINCT ?childNode ?node ?rgb WHERE {
      BIND("EFFBD8" AS ?rgb)
      target: ?p ?childNode.
      ?node ?x ?p.
      ?node rdf:type wikibase:Property.
      FILTER(STRSTARTS(STR(?childNode), "http://www.wikidata.org/entity/Q"))
    }
  LIMIT 5000
} AS %childNodes
WHERE {
  {
    INCLUDE %nodes
  }
  UNION
  {
    INCLUDE %childNodes
  }

  OPTIONAL { 
    INCLUDE %properties
    ?property wikibase:directClaim ?nodeclaim.
    ?node ?nodeclaim ?nodeImage. 
  }

  OPTIONAL { 
    INCLUDE %properties
    ?property wikibase:directClaim ?childNodeclaim.
    ?childNode ?childNodeclaim ?childNodeImage. 
  }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }        
}`

      const queryToEncode = sparqlQuery || defaultQuery
      
      // URL encode the SPARQL query
      const encodedQuery = encodeURIComponent(queryToEncode)
      
      // Construct the full Wikidata Query Service embed URL
      return `https://query.wikidata.org/embed.html#${encodedQuery}`
    }

    const encodedSparqlUrl = computed(() => {
      return encodeSparqlToUri(props.sparqlQuery, props.entityId)
    })

    return {
      t,
      colorSharp2,
      encodedSparqlUrl,
      encodeSparqlToUri
    }
  }
}
</script>
