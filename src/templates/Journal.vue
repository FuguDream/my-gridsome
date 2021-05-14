<template>
  <Layout>
    <div class="container">
      <h2 class="title">{{$page.journal.title}}</h2>
      <div class="info">
        <div class="info-column"><p class="info-title">Author</p><p>{{$page.journal.author}}</p></div>
        <div class="info-column"><p class="info-title">Date</p><p>{{$page.journal.date | date('DD. MMM YYYY')}}</p></div>
        <div class="info-column"><p class="info-title">Time</p><p>{{$page.journal.date | fromNow}}</p></div>
      </div>
      <div class="main" v-html="mdToHtml($page.journal.main)"></div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  journal: strapiJournals (id: $id) {
    title
    author
    date
    main
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  metaInfo: {
    title: 'Journal'
  },
  methods: {
    mdToHtml (markdown) {
      return md.render(markdown)
    }
  }
}
</script>

<style scoped>
  .container {
    width: 648px;
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
</style>