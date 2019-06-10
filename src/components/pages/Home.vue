<template>
  <v-layout row wrap>
    <v-navigation-drawer
      :clipped="drawer.clipped"
      :fixed="drawer.fixed"
      :permanent="drawer.permanent"
      :mini-variant="drawer.mini"
      v-model="drawer.open"
      app
    >
      <v-list>
        <v-list-tile 
           v-if="!drawer.permanent"
           @click="makeDrawerPermanent">
          <v-list-tile-action><v-icon>chevron_right</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>Static Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="toggleMiniDrawer">
          <v-list-tile-action><v-icon>aspect_ratio</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>Mini Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>
        
        <v-list-tile>
          <v-list-tile-action><v-icon>dashboard</v-icon></v-list-tile-action>
          <v-list-tile-content><v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar
      app
      :fixed="true"
      :clipped-left="false"
    >
      <v-toolbar-side-icon
        class="hidden-lg-and-up"
        @click="sidebar = !sidebar"
        @click.stop="toggleDrawer"
      ></v-toolbar-side-icon>
      <img
        class="hidden-md-and-down"
        src="http://metrics.cityoflewisville.com/assets/pmartin_dark.png"
        style="color:white"
        width="75"
      />
      <v-toolbar-title class="white--text hidden-md-only"
        ><router-link :to="navItems.home.path + `?lang=${lang}`"
          ><span id="lmc">Lewisville Municipal Court</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu text-xs-center offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn flat dark v-on="on">
              <span v-if="$route.query.lang == 'es'">
            Costos & multas de la corte
              </span>
              <span v-else>
                Court Costs & Fines
              </span>
            </v-btn>
          </template>
          <v-list v-if="$route.query.lang == 'es'">
            <v-list-title
              v-for="(item, index) in navItems.costsOptions"
              :key="index"
              :id="index"
            >
              <v-list-title-tile
                ><router-link :to="item.path + `?lang=${lang}`">{{
                  item.title.es
                }}</router-link></v-list-title-tile
              >
            </v-list-title>
          </v-list>
          <v-list v-else>
            <v-list-title
              v-for="(item, index) in navItems.costsOptions"
              :key="index"
              :id="index"
            >
              <v-list-title-tile
                ><router-link :to="item.path + `?lang=${lang}`">{{
                  item.title.en
                }}</router-link></v-list-title-tile
              >
            </v-list-title>
          </v-list>
        </v-menu>
        <v-menu text-xs-center offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn flat dark v-on="on">
              <span v-if="$route.query.lang == 'es'">
              Opciones de juicio
              </span>
              <span v-else>
                Trial Options
              </span>
            </v-btn>
          </template>
          <v-list v-if="$route.query.lang == 'es'">
            <v-list-title
              v-for="(item, index) in navItems.trialOptions"
              :key="index"
              :id="index"
            >
              <v-list-title-tile
                ><router-link :to="item.path + `?lang=${lang}`">{{
                  item.title.es
                }}</router-link></v-list-title-tile
              >
            </v-list-title>
          </v-list>
          <v-list v-else>
            <v-list-title
              v-for="(item, index) in navItems.trialOptions"
              :key="index"
              :id="index"
            >
              <v-list-title-tile
                ><router-link :to="item.path + `?lang=${lang}`">{{
                  item.title.en
                }}</router-link></v-list-title-tile
              >
            </v-list-title>
          </v-list>
        </v-menu>
        <v-menu text-xs-center offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn flat dark v-on="on">
              <span v-if="$route.query.lang == 'es'">
              Corte de adolescentes
              </span>
              <span v-else>
                Teen Court
              </span>
            </v-btn>
          </template>
          <v-list v-if="$route.query.lang == 'es'">
            <v-list-title
              v-for="(item, index) in navItems.teenCourtOptions"
              :key="index"
              :id="index"
            >
              <v-list-title-tile
                ><router-link :to="item.path + `?lang=${lang}`">{{
                  item.title.es
                }}</router-link></v-list-title-tile
              >
            </v-list-title>
          </v-list>
          <v-list v-else>
            <v-list-title
              v-for="(item, index) in navItems.teenCourtOptions"
              :key="index"
              :id="index"
            >
              <v-list-title-tile
                ><router-link :to="item.path + `?lang=${lang}`">{{
                  item.title.en
                }}</router-link></v-list-title-tile
              >
            </v-list-title>
          </v-list>
        </v-menu>
        <v-menu text-xs-center offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn flat dark v-on="on">
              <span v-if="$route.query.lang == 'es'">
              Servicios adicionales
              </span>
              <span v-else>
                Additional Services
              </span>
            </v-btn>
          </template>
          <v-list>
            <v-list-title>
              <v-list-title-tile>
                <a
                  href="https://www.cityoflewisville.com/about-us/departments-services/municipal-court/active-warrants"
                  target="_blank"
                  >
                  <span v-if="$route.query.lang == 'es'">
              Órdenes activos
                  </span>
                  <span v-else>
                    Active Warrants
                  </span>
                </a
                >
              </v-list-title-tile>
            </v-list-title>
            <v-list-title>
              <v-list-title-tile>
                <a
                  href="http://eservices.cityoflewisville.com/courtsservices/dockets.html"
                  target="_blank"
                  >
                  <span v-if="$route.query.lang == 'es'">
              Expendientes judiciales
                  </span>
                  <span v-else>
                    Court Dockets
                  </span>
                </a
                ></v-list-title-tile
              >
            </v-list-title>
            <v-list-title>
              <v-list-title-tile>
                <a
                  href="https://www.cityoflewisville.com/about-us/city-departments/information-technology-services/performance-dashboard-1841"
                  target="_blank"
                  >
                  <span v-if="$route.query.lang == 'es'">
              Panel de rendimiento
                  </span>
                  <span v-else>
                    Performance Dashboard
                  </span>
                </a
                ></v-list-title-tile
              >
            </v-list-title>
            <v-list-title>
              <v-list-title-tile>
                <a
                  href="https://www.cityoflewisville.com/about-us/city-departments/municipal-court/texas-court-help"
                  target="_blank"
                  >
                  <span v-if="$route.query.lang == 'es'">
              Ayuda de la Corte Texas
                  </span>
                  <span v-else>
                    Texas Court Help
                  </span>
                </a
                ></v-list-title-tile
              >
            </v-list-title>
            <v-list-title>
              <v-list-title-tile>
                <router-link :to="navItems.courtForms.path + `?lang=${lang}`"
                  >
                  <span v-if="$route.query.lang == 'es'">
                  Formularios de la corte
                  </span>
                  <span v-else>
                    Court Forms
                    </span>
                    </router-link>
                </v-list-title-tile>
            </v-list-title>
          </v-list>
        </v-menu>
        <v-btn flat>
          <router-link :to="navItems.jurySummons.path + `?lang=${lang}`"
            >
            <span v-if="$route.query.lang == 'es'">
              Citaciones del jurado
            </span>
            <span v-else>
              Jury Summons
            </span>
          </router-link>
         </v-btn
        >
        <v-btn flat @click="changeLang">
          <span v-if="lang == 'en'"
            >ESPA&#xd1;OL&nbsp;<flag iso="es"></flag
          ></span>
          <span v-else>ENGLISH&nbsp;<flag iso="us"></flag>&nbsp;</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!--  -->
    <v-content>
    <v-container my-5 mx-5>
      <i-want-to></i-want-to>
      <mission-statement></mission-statement>
    </v-container>

    <!-- <v-flex xs0 md0 lg2 class="spacer"> </v-flex> -->
    <court-updates></court-updates>
    <upcoming-events></upcoming-events>
    <!-- <v-flex xs0 md0 lg2 class="spacer"> </v-flex> -->

    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>
    <v-flex xs12 sm12 md0 lg10 id="judge-card">
      <v-layout row fluid wrap>
        <judge-card></judge-card>
        <video-card></video-card>
      </v-layout>
    </v-flex>
    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>

    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>
    <v-flex xs12 sm12 m10 lg10>
      <court-metrics></court-metrics>
    </v-flex>
    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>

    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>
    <v-flex xs12 sm12 m10 lg10>
      <support></support>
    </v-flex>
    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>

    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>
    <feedback></feedback>
    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>

    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>

    <v-flex xs0 md0 lg1 class="spacer"> </v-flex>
  </v-content>
  </v-layout>
</template>

<script>
import Select from "../widgets/Select";
import MissionCard from "../widgets/MissionCard";
import CourtUpdates from "../widgets/CourtUpdates";
import UpcomingEvents from "../widgets/UpcomingEvents";
import JudgeCard from "../widgets/JudgeCard";
import VideoCard from "../widgets/VideoCard";
import CourtMetrics from "../widgets/CourtMetrics";
import Support from "../widgets/Support";
import Feedback from "../widgets/Feedback";
//import Map from '../widgets/Map'

export default {
  props: {
    source: String,
    lang: String
  },
  components: {
    "i-want-to": Select,
    "mission-statement": MissionCard,
    "court-updates": CourtUpdates,
    "upcoming-events": UpcomingEvents,
    "judge-card": JudgeCard,
    "video-card": VideoCard,
    "court-metrics": CourtMetrics,
    support: Support,
    feedback: Feedback
    // "court-map": Map
  },
  data() {
    return {
      lang: '',
      drawer: {
        // sets the open status of the drawer
        open: true,
        // sets if the drawer is shown above (false) or below (true) the toolbar
        clipped: false,
        // sets if the drawer is CSS positioned as 'fixed'
        fixed: false,
        // sets if the drawer remains visible all the time (true) or not (false)
        permanent: true,
        // sets the drawer to the mini variant, showing only icons, of itself (true) 
        // or showing the full drawer (false)
        mini: true
    },
    toolbar: {
      //
      fixed: true,
      // sets if the toolbar contents is leaving space for drawer (false) or not (true)
      clippedLeft: false
    },
    footer: {
      // sets the CSS position of the footer
      fixed: true,
      // sets if the footer is full width (true) or gives space to the drawer (false)
      clippedLeft: true
    },
    navItems: {
        home: {
          title: "Home",
          component: "Home",
          path: `/`
        },
        courtForms: {
          title: "courtForms",
          component: "CourtForms",
          path: `/court-forms`
        },
        jurySummons: {
          title: "jurySummons",
          component: "JurySummons",
          path: `/jury-summons`
        },
        costsOptions: [
          {
            title: {
              en:"Pay Court Fines",
              es:"Pague Multas de la corte"
            },
            component: "PayCourtFines",
            path: "/pay-court-fines"
          },
          {
            title: {
              en: "Fines/Court Costs",
              es: "Costos & Multas"
            },
            component: "CourtCosts",
            path: "/court-costs"
          }
        ],
        trialOptions: [
          {
            title: { 
              en:"Trial Procedures",
              es: "Procedimientos judiciales"
            },
            component: "TrialProcedures",
            path: "/trial-procedures"
          },
          {
            title: {
              en:"Alternatives to Trial",
              es:"Alternativas a trial"
            },
            component: "TrialAlternatives",
            path: "/trial-alternatives"
          }
        ],
        teenCourtOptions: [
          {
            title: {
              en:"What is Teen Court?",
              es:"¿Qué es Teen Court?"
            },
            component: "TeenCourtInfo",
            path: "/teen-court-info"
          },
          {
            title: {
              en:"Teen Court Contact Information",
              es: "Información de contacto para corte adolescentes"
            },              
            component: "TeenCourtContact",
            path: "/teen-court-contact"
          },
          {
            title: {
              en:"Volunteer for Teen Court",
              es: "Como voluntar para la corte adolescentes"
            },
            component: "TeenCourtVolunteer",
            path: "/teen-court-volunteer"
          },
          {
            title: {
              en:"Teen Court Docket",
              es: "Expedientes judiciales de adolescentes"
            },
            component: "TeenCourtDocket",
            path: "/teen-court-docket"
          },
          {
            title: { 
              en:"Teen Talks",
              es:"Charlas de adolescentes"
            },
            component: "TeenCourtTalks",
            path: "/teen-court-talks"
          }
        ]
      },
      sidebar: false,
      window: {
        height: 0,
        width: 0
      }
  }
},

  methods: {
     makeDrawerPermanent () {
      this.drawer.permanent = true
      // set the clipped state of the drawer and toolbar
      this.drawer.clipped = false
      this.toolbar.clippedLeft = false
    },
    // toggles the drawer variant (mini/full)
    toggleMiniDrawer () {
      this.drawer.mini = !this.drawer.mini
    },
    // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
    toggleDrawer () {
      if (this.drawer.permanent) {
        this.drawer.permanent = !this.drawer.permanent
        // set the clipped state of the drawer and toolbar
        this.drawer.clipped = true
        this.toolbar.clippedLeft = true
      } else {
        // normal drawer
        this.drawer.open = !this.drawer.open
      }
    },
    setLang() {
      this.lang = this.$route.query.lang
    }
  },
  created() {
    this.setLang()
  },
  watch: {
    '$route.query.lang'() {
        this.setLang()
    }
  }
};
</script>

<style>
.v-toolbar__content {
    background: rebeccapurple;
    height: 180px !important;
}
.router-link-exact-active.router-link-active {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: inherit;
  color: inherit;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
  width: inherit;
  text-decoration: none;
}
.v-list.theme--light {
  background-color: white !important;
  font-weight: 600;
}
v-list-title {
  display: block;
  text-align: center;
  padding: 6px;
  font-size: 1.1rem;
  margin-top: 3px;
  margin-right: 4px;
  margin-left: 4px;
  cursor: pointer;
}
v-list-title:hover {
  background-color: #ddd;
}

v-list-title > v-list-title-tile > a {
  text-decoration: none;
}
.v-btn__content > a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
#app
  > div
  > aside
  > div.v-list.white--text.dark.theme--light
  > div:nth-child(5)
  > div
  > div
  > button
  > div
  > a {
  color: #000;
}
#lmc {
  font-family: Times New Roman, Serif;
  font-size: 24px;
  font-weight: 500;
  color: white;
}
#lmc:hover {
  text-decoration: none !important;
}
</style>
