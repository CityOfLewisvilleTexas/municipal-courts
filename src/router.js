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
import TeenCourtDocket from './components/pages/TeenCourtDocket'
import TeenCourtTalks from './components/pages/TeenCourtTalks'
import CourtForms from './components/pages/CourtForms'
import JurySummons from './components/pages/JurySummons'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', //todo try adding ?lang=en, etc,
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path:'/pay-court-fines', //todo try adding ?lang=en, etc,
      name: 'PayCourtFines',
      component: PayCourtFines,
      props: true
    },
    {
      path:'/court-costs', //todo try adding ?lang=en, etc,
      name: 'CourtCosts',
      component: CourtCosts,
      props: true
    },
    {
      path:'/trial-procedures', //todo try adding ?lang=en, etc,
      name: 'TrialProcedures',
      component: TrialProcedures,
      props: true
    },
    {
      path:'/trial-alternatives', //todo try adding ?lang=en, etc,
      name: 'TrialAlternatives',
      component: TrialAlternatives,
      props: true
    },
    {
      path:'/teen-court-info', //todo try adding ?lang=en, etc,
      name: 'TeenCourtInfo',
      component: TeenCourtInfo,
      props: true
    },
    {
      path:'/teen-court-contact', //todo try adding ?lang=en, etc,
      name: 'TeenCourtContact',
      component: TeenCourtContact,
      props: true
    },
    {
      path:'/teen-court-volunteer', //todo try adding ?lang=en, etc,
      name: 'TeenCourtVolunteer',
      component: TeenCourtVolunteer,
      props: true
    },
    {
      path:'/teen-court-docket', //todo try adding ?lang=en, etc,
      name: 'TeenCourtDocket',
      component: TeenCourtDocket,
      props: true
    },
    {
      path:'/teen-court-talks', //todo try adding ?lang=en, etc,
      name: 'TeenCourtTalks',
      component: TeenCourtTalks,
      props: true
    },
    {
      path:'/court-forms', //todo try adding ?lang=en, etc,
      name: 'CourtForms',
      component: CourtForms,
      props: true
    },
     {
      path:'/jury-summons', //todo try adding ?lang=en, etc,
      name: 'JurySummons',
      component: JurySummons,
      props: true
    }
  ]
});
