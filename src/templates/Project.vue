<template>
  <Layout>
    <div class="container" :style="{color}">
      <h2 class="title">{{$page.project.title}}</h2>
      <div class="info">
        <div class="info-column">
          <p class="info-title">Categories</p>
          <p>
            <span v-for="category of $page.project.categories" :key="category.id">{{category.category}}&nbsp;&nbsp;</span>
          </p>
        </div>
        <div class="info-column">
          <p class="info-title">Year</p>
          <p>{{$page.project.year}}</p>
        </div>
      </div>
      <div class="main" v-if="$page.project.introduction" v-html="mdToHtml($page.project.introduction)"></div>
      <p style="margin-top: 1.2rem">
        <img :src="'/img' + $page.project.photo.url">
      </p>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  project: strapiProjects(id: $id) {
    id
    title
    categories {
      category
    }
    year
    introduction
    photo {
      url
    }
    color
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  metaInfo: {
    title: 'Project'
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  },
  computed: {
    color () {
      return this.$page.project.color ? this.$page.project.color : '#000'
    }
  }
}
</script>

<style scoped>
  .container {
    width: 1008px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 96px;
  }

  .title {
    width: 100%;
    height: 64px;
    margin: 2rem 0 4rem 0;
    font-size: 4rem;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.8rem;
  }

  .info-column {
    margin-right: 4rem;
  }

  .info-title {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .main {
    margin: 4rem 0 0 0
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }
</style>