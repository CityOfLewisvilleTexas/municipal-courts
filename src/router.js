import Vue from "vue";
import Router from "vue-router";
import Home from "./components/pages/Home";
import MeetYourJudge from "./components/widgets/MeetYourJudge";

import TeenCourtInfo from "./components/pages/teencourt/TeenCourtInfo";
import TeenCourtContact from "./components/pages/teencourt/TeenCourtContact";
import TeenCourtVolunteer from "./components/pages/teencourt/TeenCourtVolunteer";
import TeenCourtDocket from "./components/pages/teencourt/TeenCourtDocket";
import TeenCourtTalks from "./components/pages/teencourt/TeenCourtTalks";

import KnowYourRights from './components/pages/citations/KnowYourRights'
import Options from './components/pages/citations/Options'
import TrialAlternatives from "./components/pages/citations/TrialAlternatives";
import HoursDirections from './components/pages/court/HoursDirections'
import DressCode from './components/pages/court/DressCode'
import Security from './components/pages/court/Security'
import CellPhones from './components/pages/court/CellPhones'
import PayFinesOnline from './components/pages/fines/PayFinesOnline'
import Alternatives from './components/pages/fines/Alternatives'
import CourtCosts from './components/pages/fines/CourtCosts'
import CasePresentation from './components/pages/trial/CasePresentation'
import Continuances from './components/pages/trial/Continuances'
import CourtAppearances from './components/pages/trial/CourtAppearances'
import JudgementsVerdicts from './components/pages/trial/JudgementsVerdicts'
import AdmittingExhibits from './components/pages/trial/AdmittingExhibits'
import JurorExpectations from './components/pages/juror/JurorExpectations'
import JurorQualifications from './components/pages/juror/JurorQualifications'
import JurorExemptions from './components/pages/juror/JurorExemptions'
import JurorSummonsFailure from './components/pages/juror/JurorSummonsFailure'
import JurorContact from './components/pages/juror/JurorContact'
import ClearWarrants from './components/pages/warrants/ClearWarrants'
import ActiveWarrants from './components/pages/warrants/ActiveWarrants'
import FormsContinuance from './components/pages/forms/FormsContinuance'
import FormsAttorneyAppearance from './components/pages/forms/FormsAttorneyAppearance'
import FormsDeferredDisposition from './components/pages/forms/FormsDeferredDisposition'
import FormsDrivingSafety from './components/pages/forms/FormsDrivingSafety'
import FormsFinancialInformation from './components/pages/forms/FormsFinancialInformation'
import FormsPleaForm from './components/pages/forms/FormsPleaForm'
import FormsDrivingRecord from './components/pages/forms/FormsDrivingRecord'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/", 
      name: "Home",
      component: Home,
      props: true
    },
    {
      path: "/meet-your-judge", 
      name: "Meet Your Judge",
      component: MeetYourJudge,
      props: true
    },
    {
      path: "/citation-alternatives", 
      name: "TrialAlternatives",
      component: TrialAlternatives,
      props: true
    },
    {
      path: "/teen-court-info", 
      name: "TeenCourtInfo",
      component: TeenCourtInfo,
      props: true
    },
    {
      path: "/teen-court-contact", 
      name: "TeenCourtContact",
      component: TeenCourtContact,
      props: true
    },
    {
      path: "/teen-court-volunteer", 
      name: "TeenCourtVolunteer",
      component: TeenCourtVolunteer,
      props: true
    },
    {
      path: "/teen-court-docket",
      name: "TeenCourtDocket",
      component: TeenCourtDocket,
      props: true
    },
    {
      path: "/teen-court-talks", 
      name: "TeenCourtTalks",
      component: TeenCourtTalks,
      props: true
    },
    {
      path: "/citation-rights",
      name: "KnowYourRights",
      component: KnowYourRights,
      props: true
    },
    {
      path: "/citation-options",
      name: "Options",
      component: Options,
      props: true
    },
    {
      path: "/citation-alternatives",
      name: "HoursDirections",
      component: HoursDirections,
      props: true
    },
    {
      path: "/court-dress-code",
      name: "DressCode",
      component: DressCode,
      props: true
    },
    {
      path: "/court-security",
      name: "Security",
      component: Security,
      props: true
    },
    {
      path: "/court-phones",
      name: "CellPhones",
      component: CellPhones,
      props: true
    },
    {
      path: "/fines-pay-online",
      name: "PayFinesOnline",
      component: PayFinesOnline,
      props: true
    },
    {
      path: "/fines-alternatives",
      name: "Alternatives",
      component: Alternatives,
      props: true
    },
    {
      path: "/fines-court-costs",
      name: "CourtCosts",
      component: CourtCosts,
      props: true
    },
    {
      path: "/trial-case-presentation",
      name: "CasePresentation",
      component: CasePresentation,
      props: true
    },
    {
      path: "/trial-continuances",
      name: "Continuances",
      component: Continuances,
      props: true
    },
    {
      path: "/trial-court-appearances",
      name: "CourtAppearances",
      component: CourtAppearances,
      props: true
    },
    {
      path: "/trial-judgements",
      name: "JudgementsVerdicts",
      component: JudgementsVerdicts,
      props: true
    },
    {
      path: "/trial-admitting-exhibits",
      name: "AdmittingExhibits",
      component: AdmittingExhibits,
      props: true
    },
    {
      path: "/juror-expectations",
      name: "JurorExpectations",
      component: JurorExpectations,
      props: true
    },
    {
      path: "/juror-qualifications",
      name: "JurorQualifications",
      component: JurorQualifications,
      props: true
    },
    {
      path: "/juror-exemptions",
      name: "JurorExemptions",
      component: JurorExemptions,
      props: true
    },
    {
      path: "/juror-summons-failure",
      name: "JurorSummonsFailure",
      component: JurorSummonsFailure,
      props: true
    },
    {
      path: "/juror-contact-us",
      name: "JurorContact",
      component: JurorContact,
      props: true
    },
    {
      path: "/warrants-clear",
      name: "ClearWarrants",
      component: ClearWarrants,
      props: true
    },
    {
      path: "/warrants-active",
      name: "ActiveWarrants",
      component: ActiveWarrants,
      props: true
    },
    {
      path: "/court-forms-continuance",
      name: "FormsContinuance",
      component: FormsContinuance,
      props: true
    },
    {
      path: "/court-forms-attorney-appearance",
      name: "FormsAttorneyAppearance",
      component: FormsAttorneyAppearance,
      props: true
    },
    {
      path: "/court-forms-deferred-disposition",
      name: "FormsDeferredDisposition",
      component: FormsDeferredDisposition,
      props: true
    },
    {
      path: "court-forms-driving-safety",
      name: "FormsDrivingSafety",
      component: FormsDrivingSafety,
      props: true
    },
    {
      path: "/court-forms-financial-information",
      name: "FormsFinancialInformation",
      component: FormsFinancialInformation,
      props: true
    },
    {
      path: "/court-forms-plea-form",
      name: "FormsPleaForm",
      component: FormsPleaForm,
      props: true
    },
    {
      path: "court-forms-driving-record",
      name: "FormsDrivingRecord",
      component: FormsDrivingRecord,
      props: true
    }
  ]
});
