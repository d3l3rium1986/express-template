<template>
  <nuxt-child/>
</template>

<script>
  export default {
    fetch ({ store, params, env }) {
    },
    asyncData (context) {
    },
    head (context) {
      return {
        // titleTemplate: `%s | ${this.configuration.base_seo_title}`,
        titleTemplate: `%s | Site Name`,
        meta: (function ($this) {
          return [
            // TODO - Add validation
            { hid: 'google-site-verification', name: 'google-site-verification', content: 'TODO' }
          ]
        }(this))
      }
    }
  }
</script>

<style lang="scss">

</style>
