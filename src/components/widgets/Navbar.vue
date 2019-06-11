<template>
  <v-app class="xs12"> 
    <v-navigation-drawer
      :clipped="drawer.clipped"
      :fixed="drawer.fixed"
      :permanent="drawer.permanent"
      :mini-variant="drawer.mini"
      v-model="drawer.open"
      app
      dark
    >
     <v-list class="white--text dark">
        <v-list-tile>
          <v-list-tile-content>
            <v-menu bottom transition="scale-transition" origin="center center" open-on-click dark>
              <template v-slot:activator="{ on }">
                <v-btn flat primary--text v-on="on">
                  <span v-if="$route.query.lang == 'es'">
                    Costos & multas de la corte
                  </span>
                  <span v-else>
                    Court Costs & Fines</span>
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
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-menu bottom transition="scale-transition" origin="center center" open-on-click dark>
              <template v-slot:activator="{ on }">
                <v-btn flat primary--text v-on="on">
                  <span v-if="$route.query.lang == 'es'">
                    Opciones de juicio
                  </span>
                  <span v-else>
                    Trial Options</span></v-btn>
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
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-menu bottom transition="scale-transition" origin="center center" open-on-click dark>
              <template v-slot:activator="{ on }">
                <v-btn flat primary--text v-on="on">
                  <span v-if="$route.query.lang == 'es'">
                    Corte de adolescentes
                  </span>
                  <span v-else>
                    Teen Court</span>
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
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-menu bottom transition="scale-transition" origin="center center" open-on-click dark>
              <template v-slot:activator="{ on }">
                <v-btn flat primary--text v-on="on">
                  <span v-if="$route.query.lang == 'es'">
                    Servicios adicionales
                  </span>
                  <span v-else>
                    Additional Services</span></v-btn>
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
                        Court Dockets</span>
                        </a></v-list-title-tile>
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
                        </span></a>
                        </v-list-title-tile>
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
                        Texas Court Help </span>
                        </a>
                      </v-list-title-tile
                  >
                </v-list-title>
                <v-list-title>
                  <v-list-title-tile>
                    <router-link
                      :to="navItems.courtForms.path + `?lang=${lang}`"
                      >
                      <span v-if="$route.query.lang == 'es'">
                        Formularios de la corte
                      </span>
                      <span v-else>
                        Court Forms</span>
                        </router-link>
                        </v-list-title-tile>
                </v-list-title>
              </v-list>
            </v-menu>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn flat>
              <router-link :to="navItems.jurySummons.path + `?lang=${lang}`">
                <span v-if="$route.query.lang == 'es'">
                  Citaciones del jurado
                </span>
                <span v-else>
                  Jury Summons</span></router-link></v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn flat @click="changeLang">
              <span v-if="lang == 'en'"
                >ESPA&#xd1;OL&nbsp;<flag iso="es"></flag
              ></span>
              <span v-else>ENGLISH&nbsp;<flag iso="us"></flag>&nbsp;</span>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
     <v-divider></v-divider>

    <v-toolbar
      app
      :fixed="toolbar.fixed"
      :clipped-left="toolbar.clippedLeft"
      style="background-color:rebeccapurple;
      padding-left:0;"
      :height="120"
    >
      <v-toolbar-side-icon 
        @click="toggleDrawer"
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
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view>
              <home :lang="lang"></home>
            </router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import home from '../pages/Home'
//@TODO: CREATE FOOTER
export default {
  props: ["lang"],
  components: {
    home
  },
  data() {
    return {
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
      drawer: {
      open: true,
      clipped: true,
      fixed: true,
      permanent: true,
      mini: false
    },
    toolbar: {
      fixed: true,
      clippedLeft: true
    },
    footer: {
      fixed: true,
      clippedLeft: true
    },
      sidebar: false,
      window: {
        height: 0,
        width: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    changeLang() {
      this.$emit("change", "es");
    },
    makeDrawerPermanent () {
      this.drawer.permanent = true
      // set the clipped state of the drawer and toolbar
      this.drawer.clipped = false
      this.toolbar.clippedLeft = false
    },
    // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
    toggleDrawer () {
        this.drawer.open = !this.drawer.open
        this.drawer.permanent = !this.drawer.permanent
    }
  },
  updated: {}
};
</script>

<style scoped>
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
  font-size: 24px;
  font-weight: 500;
  color: white;
}
a > #lmc:hover {
  text-decoration: none !important;
}

a {
  color: white;
}

v-list-title:hover {
    background-color: #2a2929;
}
</style>
