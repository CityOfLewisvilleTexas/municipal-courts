import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Vuetify from "vuetify";
import FlagIcon from 'vue-flag-icon'

Vue.config.productionTip = false;
Vue.use(axios);
Vue.use(Vuetify);
Vue.use(FlagIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
