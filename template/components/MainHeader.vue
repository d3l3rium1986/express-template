<template>
    <div class="main-header fixed-top bg-white">


        <div class="mobile-nav" :class="{'in': navIn}" >

            <div class="d-flex justify-content-end p-3">
                <div class="d-block d-lg-none">
                    <div @click="setNav(false)" class="d-flex nav-btn bg-primary justify-content-center align-items-center" style="height: 40px; width: 40px;">
                        <!--<i class="fas fa-times fa-2x text-white"></i>-->
                        close
                    </div>
                </div>
            </div>

            <ul class="list-unstyled mt-4">

                <template v-for="(m, i) in menu">

                    <li
                            v-if="m.children.length > 0"
                            :key="i"
                            class="nav-item dropdown-hover">

                        <!--<nuxt-link-->
                        <!--class="nav-link"-->
                        <!--active-class="active"-->
                        <!--exact-active-class="active"-->
                        <!--&gt;{{m.title}}</nuxt-link>-->
                        <a class="nav-link" role="button" aria-haspopup="true">
                            {{m.title}}
                        </a>
                        <ul class="list-unstyled">
                            <nuxt-link
                                    v-for="(c, i) in m.children"
                                    :to="c.to"
                                    tag="li"
                                    class="dropdown-item"
                                    active-class="active"
                                    exact-active-class="active"
                            >
                                <a class="nav-link">{{c.title}}</a>
                            </nuxt-link>
                        </ul>

                    </li>

                    <nuxt-link
                            v-if="m.children.length === 0"
                            :key="i"
                            class="nav-item"
                            :to="m.to ? m.to : '/'"
                            tag="li"
                            active-class="active"
                            exact-active-class="active"
                            :exact="m.to === '/'">
                        <a class="nav-link">{{m.title}}</a>
                    </nuxt-link>

                </template>



            </ul>
        </div>






        <nav class="navbar navbar-expand-sm ">
            <div class="container">

                <div class="d-block d-lg-none">
                    <div @click="setNav(true)" class="d-flex nav-btn bg-primary justify-content-center align-items-center" style="height: 40px; width: 40px;">
                        <!--<i class="fas fa-bars fa-2x text-white"></i>-->
                        open
                    </div>
                </div>

                <nuxt-link to="/" class="navbar-brand d-flex">
                    <img class="header-logo" src="/acad_logo.svg" alt="Academy International">
                </nuxt-link>
                <ul class="navbar-nav ml-auto d-none d-sm-none d-md-none d-lg-flex">

                    <template v-for="(m, i) in menu">

                        <li
                                v-if="m.children.length > 0"
                                :key="i"
                                class="nav-item dropdown-hover">

                            <!--<nuxt-link-->
                            <!--class="nav-link"-->
                            <!--active-class="active"-->
                            <!--exact-active-class="active"-->
                            <!--&gt;{{m.title}}</nuxt-link>-->
                            <a class="nav-link dropdown-toggle" role="button" aria-haspopup="true">
                                {{m.title}}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <nuxt-link
                                        v-for="(c, i) in m.children"
                                        :to="c.to"
                                        class="dropdown-item"
                                        active-class="active"
                                        exact-active-class="active"
                                >{{c.title}}</nuxt-link>
                            </div>

                        </li>

                        <nuxt-link
                                v-if="m.children.length === 0"
                                :key="i"
                                class="nav-item"
                                :to="m.to ? m.to : '/'"
                                tag="li"
                                active-class="active"
                                exact-active-class="active"
                                :exact="m.to === '/'">
                            <a class="nav-link">{{m.title}}</a>
                        </nuxt-link>

                    </template>



                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        navIn: false,
        affixIn: false,
        menu: [
          {
            title: 'Home',
            to: `/`,
            children: []
          },
          {
            title: 'Parent - child only',
            to: null,
            children: [
              {
                title: 'Child 1',
                to: '/'
              }
            ]
          }
        ]
      }
    },
    components: {
    },
    computed: {
    },
    methods: {
      setNav (val) {
        this.navIn = val
      },
      affixtop (payload) {
        this.affixIn = false
        this.$events.$emit('header-affixtop')
      },
      affix (payload) {
        this.affixIn = true
        this.$events.$emit('header-affix')
      }
    },
    watch: {
      $route (to, from) {
        this.navIn = false
      }
    }
  }
</script>

<style lang="scss">

</style>
