import Vue from "vue";
import Router from "vue-router";
import ComingToCourt from './components/pages/ComingToCourt.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/coming-to-court',
      name: 'Court',
      component: ComingToCourt
    }
  ]
});
