<template>
  <main class="layout-main" :class="{'header-affix': affix}">
    <main-header/>
    <div id="layout-main__page" class="layout-main__page">
      <nuxt/>
    </div>
    <main-footer/>
  </main>
</template>

<script>
  import MainHeader from '~/components/MainHeader.vue'
  import MainFooter from '~/components/Footer.vue'
  export default {
    data () {
      return {
        affix: false
      }
    },
    components: {
      MainHeader,
      MainFooter
    },
    computed: {
    },
    mounted () {
      this.$events.$on('header-affixtop', (payload) => {
        this.affix = false
      })
      this.$events.$on('header-affix', (payload) => {
        this.affix = true
      })
    }
  }
</script>

<style lang="scss">

</style>
