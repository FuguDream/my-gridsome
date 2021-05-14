<template>
  <Layout>
    <div class="columntitle-container">
      <h1 class="columntitle">a wise person once said...</h1>
    </div>
    <div class="aritcle-container" v-for="edge of $page.journals.edges" :key="edge.node.id">
      <g-link class="article-link" :to="'/journal/' + edge.node.id">
        <div class="aritcle-inner">
          <h2 class="aritcle-title">{{edge.node.title}}</h2>
          <p class="aritcle-summarize">{{edge.node.summarize}}</p>
        </div>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  journals: allStrapiJournals {
    totalCount
    edges {
      node {
        id
        title
        summarize
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Journals'
  }
}
</script>

<style scoped>
  .columntitle-container {
    height: 192px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .columntitle {
    font-size: 3rem;
    height: 64px;
    color: #f3f3f3;
  }

  .aritcle-container{
    width: 100%;
  }

  .article-link {
    text-decoration: none;
    color: #000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .4s;
  }

  .article-link:hover {
    background: #f3f3f3;
  }

  .aritcle-inner {
    max-width: 528px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 6rem;
    transition: padding .6s;
  }

  .aritcle-inner:hover {
    padding: 80px 2rem 80px 10rem;
  }

  .aritcle-title {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }

  .aritcle-summarize {
    margin: 1.2rem 0;
    font-size: 1.2rem;
    line-height: 1.5;
  }
</style>