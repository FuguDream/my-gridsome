<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/"><g-image alt="Example image" src="/img/logo.svg" class="title-logo"/><!-- {{ $static.metadata.siteName }} --></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" :class="{'link-active': linkActive.startsWith('/journal')}" to="/journal">Journal</g-link>
        <g-link class="nav__link" :class="{'link-active': linkActive === '/contact'}" to="/contact">Say Hi!</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      <span>Copyright © 2021</span>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    linkActive() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.title-logo {
  height: 1.5rem;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  max-width: 1008px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
}

.nav__link {
  margin-right: 3rem;
  padding-bottom: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  border: 0;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s;
}

.nav__link:last-of-type {
  margin-right: 0;
}

.nav__link:hover {
  border-bottom: 1px solid #000;
}

.link-active {
  border-bottom: 1px solid #000;
}

.footer {
  margin: 0 350px;
  max-width: 1008px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-between;
  padding: 6rem;
  font-size: 0.8rem;
}
</style>
