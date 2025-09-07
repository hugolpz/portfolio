<template>
  <BCol class="cards" cols="12" sm="6" md="4">
    <a :href="url" target="_blank">
      <div class="proj-preview">
        <img v-if="imgUrl" :src="imgUrl" :alt="title" />
        <iframe v-else :src="url" :title="title" frameborder="0" scrolling="no"></iframe>
        <div class="proj-txt">
          <h4 class="cards-text">{{ title }}</h4>
          <span class="cards-text">{{ description }}</span>
        </div>
      </div>
    </a>
  </BCol>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    imgUrl: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
