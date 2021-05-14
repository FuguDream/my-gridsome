// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(RelativeTime)

export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  }

  )

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.filter('date', (value, format = 'YYYY-MM-DD') => {
    return dayjs(value).format(format)
  })

  Vue.filter('fromNow', (value) => {
    return dayjs(value).fromNow()
  })
}
