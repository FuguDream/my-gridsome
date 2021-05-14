// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome by Fugu',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['journals', 'projects', 'categories'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        /* loginData: {
          identifier: '',
          password: ''
        } */
      }
    }
  ],
  templates: {
    StrapiJournals: [
      {
        path: '/journal/:id',
        component: './src/templates/Journal.vue'
      }
    ],
    StrapiProjects: [
      {
        path: '/project/:id',
        component: './src/templates/Project.vue'
      }
    ]
  }
}
