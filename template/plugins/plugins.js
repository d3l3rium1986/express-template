import Vue from 'vue'
import moment from 'moment'
import VueEvents from 'vue-events'

moment.locale('en-gb')
Vue.use(VueEvents)

Vue.filter('blogDate', function (value) {
  if (value) {
    return moment(String(value)).format('MMMM D, YYYY')
  }
})
