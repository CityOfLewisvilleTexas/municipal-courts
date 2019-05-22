import Vue from "vue";
import Router from "vue-router";
import Home from './components/pages/Home.vue'
import PayCourtFines from './components/pages/PayCourtFines'
import CourtCosts from './components/pages/CourtCosts'
import TrialProcedures from './components/pages/TrialProcedures'
import TrialAlternatives from './components/pages/TrialAlternatives'
import TeenCourtInfo from './components/pages/TeenCourtInfo'
import TeenCourtContact from './components/pages/TeenCourtContact'
import TeenCourtVolunteer from './components/pages/TeenCourtVolunteer'
import TeenCourtJobs from './components/pages/TeenCourtJobs'
import TeenCourtDocket from './components/pages/TeenCourtDocket'
import TeenCourtTalks from './components/pages/TeenCourtTalks'
import CourtForms from './components/pages/CourtForms'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/pay-court-fines',
      name: 'PayCourtFines',
      component: PayCourtFines
    },
    {
      path:'/court-costs',
      name: 'CourtCosts',
      component: CourtCosts
    },
    {
      path:'/trial-procedures',
      name: 'TrialProcedures',
      component: TrialProcedures
    },
    {
      path:'/trial-alternatives',
      name: 'TrialAlternatives',
      component: TrialAlternatives
    },
    {
      path:'/teen-court-info',
      name: 'TeenCourtInfo',
      component: TeenCourtInfo
    },
    {
      path:'/teen-court-contact',
      name: 'TeenCourtContact',
      component: TeenCourtContact
    },
    {
      path:'/teen-court-volunteer',
      name: 'TeenCourtVolunteer',
      component: TeenCourtVolunteer
    },
    {
      path:'/teen-court-jobs',
      name: 'TeenCourtJobs',
      component: TeenCourtJobs
    },
    {
      path:'/teen-court-docket',
      name: 'TeenCourtDocket',
      component: TeenCourtDocket
    },
    {
      path:'/teen-court-talks',
      name: 'TeenCourtTalks',
      component: TeenCourtTalks
    },
    {
      path:'/court-forms',
      name: 'CourtForms',
      component: CourtForms
    }
  ]
});
