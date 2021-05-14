<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <h1 class="maintitle">{{$page.general.edges[0].node.title}}</h1>
    <h4 class="subtitle">{{$page.general.edges[0].node.describe}}</h4>

    <div class="project-list">
      <g-link class="projects-list-item" v-for="edge of $page.projects.edges" :key="edge.node.id" :to="'/project/' + edge.node.id">
        <img :src="'/img' + edge.node.photo.url">
        <h4>{{edge.node.title}}</h4>
        <p>
          <span v-for="category of edge.node.categories" :key="category.id">{{category.category}}&nbsp;&nbsp;</span>
        </p>
      </g-link>
    </div>    

    <p class="journal-title">LATEST AND GREATEST</p>
    <div class="journal-list">
      <g-link class="journal-list-item" v-for="edge of $page.journals.edges" :key="edge.node.id" :to="'/journal/' + edge.node.id">
        {{edge.node.title}}
      </g-link>
    </div>

  </Layout>
</template>

<page-query>
query {
  journals: allStrapiJournals (limit: 4, sortBy: "created_at", order: DESC) {
    totalCount
    edges {
      node {
        id
        title
      }
    }
  },
  projects: allStrapiProjects (limit: 10, sortBy: "created_at", order: DESC) {
    totalCount
    edges {
      node {
        id
        title
        photo {
          url
        }
        categories {
          id
          category
        }
      }
    }
  }
  general: allStrapiGeneral {
    edges {
      node {
        title
        describe
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
  .maintitle {
    width: 480px;
    margin: 4rem 0 2rem 0;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
  }

  .subtitle {
    width: 480px;
    margin: 0 0 8rem 0;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.67;
    opacity: 0.6;
    text-align: center;
  }

  .project-list {
    width: 100%;
    max-width: 1008px;
    padding: 0 6rem;
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(472px,1fr));
    gap: 4rem;
  }

  .projects-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #000;
  }

  .projects-list-item img {
    object-fit: cover;
    max-width: 100%;
    height: 560px;
    box-shadow: 0 0 40px -20px #404040;
    transition: all 0.4s ease;
  }

  .projects-list-item img:hover {
    max-width: 102%;
    height: 571.2px;
  }

  .projects-list-item h4 {
    font-weight: 700;
    margin: 2rem 0 1rem;
  }

  .projects-list-item p {
    margin: 0;
    font-size: 0.8rem;
  }

  .journal-title {
    width: 1008px;
    margin:6rem auto 1rem;
    padding: 0 96px;
    font-size: 0.6rem;
    font-weight: 700;
    align-self: flex-start;
  }

  .journal-list {
    width: 1008px;
    height: 138px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
  }

  .journal-list-item {
    width: 187px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #f3f3f3;
    padding: 32px;
    font-weight: 700;
    transition: background .2s;
    color: #000;
    text-decoration: none;
  }

  .journal-list-item:hover {
    background: #f3f3f3;
  }

  .journal-list-item:last-of-type {
    border-right: 0;
  }
</style>
