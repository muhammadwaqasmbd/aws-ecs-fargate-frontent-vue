
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import store from "./store"
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
     primary: '#7957d5',
  },
});
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  vuetify : new Vuetify(),
  components: { App },
  template: '<App/>'
})

