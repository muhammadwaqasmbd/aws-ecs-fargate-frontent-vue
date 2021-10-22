
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import store from "./store"
import { Auth0Plugin } from "./auth";
import { domain, clientId } from "../auth_config.json";

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
     primary: '#7957d5',
  },
});
Vue.use(Vuex);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
new Vue({
  el: '#app',
  router,
  store,
  vuetify : new Vuetify(),
  components: { App },
  template: '<App/>'
})

