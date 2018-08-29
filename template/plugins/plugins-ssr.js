import Vue from 'vue'
import VueAffix from 'vue-affix'

import FluxWrapper from '~/components/FluxWrapper'
if (process.browser) {
  const fluxWrapper = {
    install (Vue, options) {
      Vue.component('flux-wrapper', FluxWrapper)
    }
  }
  Vue.use(fluxWrapper)
  Vue.use(VueAffix)
}
