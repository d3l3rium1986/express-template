<template>
    <vue-flux
            class="slider-image-height"
            :options="options"
            :images="images"
            :transitions="fluxTransitions"
            ref="slider">
        <flux-pagination slot="pagination" :slider="$refs.slider"></flux-pagination>
    </vue-flux>
</template>

<script>
  import { VueFlux, FluxPagination, Transitions } from 'vue-flux'
  export default {
    props: {
      options: {
        type: Object,
        default: () => {}
      },
      path: {
        type: String,
        default: ''
      },
      images: {
        type: Array,
        default: () => []
      },
      captions: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        fluxTransitions: {
          transitionTurn3d: Transitions.transitionKenburn
        }
      }
    },
    components: {
      VueFlux,
      FluxPagination
    },
    computed: {
    },
    methods: {
    },
    watch: {

    }
  }
</script>

<style lang="scss">

</style>
