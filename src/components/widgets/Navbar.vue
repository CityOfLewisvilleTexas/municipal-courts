<template>
  <v-app class="xs12"> 
    <v-navigation-drawer
     v-model="sidebar"
      app
      dark
      hidden-sm-and-down
    >
     <v-list class="white--text dark">
        <v-list-tile>
          <v-list-tile-content>
            <v-menu bottom transition="scale-transition" origin="center center" open-on-click dark>
              <template v-slot:activator="{ on }">
                <v-btn flat primary--text v-on="on">
                  <span v-if="$route.query.lang == 'es'">
                    Responder a una cita&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon>
                  </span>
                  <span v-else>
                    Respond to a Citation&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></span>
                    </v-btn>
              </template>
              <v-list v-if="$route.query.lang == 'es'">
                <v-list-title
                  v-for="(item, index) in navItems.citationOptions"
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
                  v-for="(item, index) in navItems.citationOptions"
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
                    Llegando a la corte&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon>
                  </span>
                  <span v-else>
                    Coming to Court&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></span></v-btn>
              </template>
              <v-list v-if="$route.query.lang == 'es'">
                <v-list-title
                  v-for="(item, index) in navItems.courtOptions"
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
                  v-for="(item, index) in navItems.courtOptions"
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
              <v-list>
                 <v-list-title>
                  <v-list-title-tile>
                    <span v-if="$route.query.lang == 'es'">
                      <a href="http://eservices.cityoflewisville.com/courtsservices/dockets.html">
                      ¿Cuándo es mi cita de corte?&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></a>
                    </span>
                    <span v-else>
                      <a href="http://eservices.cityoflewisville.com/courtsservices/dockets.html">
                      When is my Court Date?&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></a>
                    </span>
                  </v-list-title-tile>
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
                    Pague mi multa&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon>
                  </span>
                  <span v-else>
                    Pay my Fine&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></span>
                    </v-btn>
              </template>
              <v-list v-if="$route.query.lang == 'es'">
                <v-list-title
                  v-for="(item, index) in navItems.fineOptions"
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
                  v-for="(item, index) in navItems.fineOptions"
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
                    Llegando a juicio&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon>
                  </span>
                  <span v-else>
                    Going to Trial&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></span>
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
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-menu bottom transition="scale-transition" origin="center center" open-on-click dark>
              <template v-slot:activator="{ on }">
                <v-btn flat primary--text v-on="on">
                  <span v-if="$route.query.lang == 'es'">
                    Servicio de jurado&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon>
                  </span>
                  <span v-else>
                    Jury Duty&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></span>
                    </v-btn>
              </template>
              <v-list v-if="$route.query.lang == 'es'">
                <v-list-title
                  v-for="(item, index) in navItems.juryDutyOptions"
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
                  v-for="(item, index) in navItems.juryDutyOptions"
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
                  <span>
                    Teen Court&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon>
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
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-menu bottom transition="scale-transition" origin="center center" open-on-click dark>
              <template v-slot:activator="{ on }">
                <v-btn flat primary--text v-on="on">
                  <span v-if="$route.query.lang == 'es'">
                    ¿Tengo una orden?&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon>
                  </span>
                  <span v-else>
                    Do I Have a Warrant?&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></span>
                    </v-btn>
              </template>
              <v-list v-if="$route.query.lang == 'es'">
                <v-list-title
                  v-for="(item, index) in navItems.warrantOptions"
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
                  v-for="(item, index) in navItems.warrantOptions"
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
                    Formularios de la corte&nbsp;<v-icon small dark>arrow_drop_down</v-icon>
                  </span>
                  <span v-else>
                    Court Forms&nbsp;<v-icon small dark>arrow_drop_down</v-icon></span>
                    </v-btn>
              </template>
              <v-list v-if="$route.query.lang == 'es'">
                <v-list-title
                  v-for="(item, index) in navItems.courtForms"
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
                  v-for="(item, index) in navItems.courtForms"
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
              <v-list>
                <v-list-title>
                  <v-list-title-tile>
                    <span v-if="$route.query.lang == 'es'">
                      <a href="http://www.txdps.state.tx.us/driverlicense/driverrecords.htm">
                      Ordene su registro de manejo</a>
                    </span>
                    <span v-else>
                      <a href="http://www.txdps.state.tx.us/driverlicense/driverrecords.htm">
                      Order Your Driving Record</a>
                    </span>
                  </v-list-title-tile>
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
                    Ayuda de la corte Tejas&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon>
                  </span>
                  <span v-else>
                   Texas Court Help&nbsp;<v-icon class="drop" small dark>arrow_drop_down</v-icon></span>
                    </v-btn>
              </template>
              <v-list>
                <v-list-title>
                  <v-list-title-tile>
                    <span v-if="$route.query.lang == 'es'">
                      <a href="https://www.tdlr.texas.gov/DESSearch">
                      Encuentre un curso de seguridad para conducir aprobado por el estado</a>
                    </span>
                    <span v-else>
                      <a href="https://www.tdlr.texas.gov/DESSearch">
                      Find a State Approved Driving Safety Course</a>
                    </span>
                  </v-list-title-tile>
                </v-list-title>
                <v-list-title>
                  <v-list-title-tile>
                    <span v-if="$route.query.lang == 'es'">
                      <a href="https://lewisvillepl.driving-tests.org/texas/">
                      Pruebas gratis de conducción DMV</a>
                    </span>
                    <span v-else>
                      <a href="https://lewisvillepl.driving-tests.org/texas/">
                      Free DMV Driving Tests</a>
                    </span>
                  </v-list-title-tile>
                </v-list-title>
                <v-list-title>
                  <v-list-title-tile>
                    <span v-if="$route.query.lang == 'es'">
                      <a href="http://www.txcourts.gov/programs-services/self-help/">
                      Poder Judicial de Texas - Autoayuda</a>
                    </span>
                    <span v-else>
                      <a href="http://www.txcourts.gov/programs-services/self-help/">
                      Texas Judicial Branch - Self Help</a>
                    </span>
                  </v-list-title-tile>
                </v-list-title>
                <v-list-title>
                  <v-list-title-tile>
                    <span v-if="$route.query.lang == 'es'">
                      <a href="https://www.sll.texas.gov/self-help/">
                      Biblioteca de Leyes del Estado de Texas - Autoayuda</a>
                    </span>
                    <span v-else>
                      <a href="https://www.sll.texas.gov/self-help/">
                      Texas State Law Library – Self Help</a>
                    </span>
                  </v-list-title-tile>
                </v-list-title>
                <v-list-title>
                  <v-list-title-tile>
                    <span v-if="$route.query.lang == 'es'">
                      <a href="http://texascourthelp.gov/">
                      Ayuda de la Corte de Texas</a>
                    </span>
                    <span v-else>
                      <a href="http://texascourthelp.gov/">
                      Texas Court Help</a>
                    </span>
                  </v-list-title-tile>
                </v-list-title>
              </v-list>
            </v-menu>
          </v-list-tile-content>
        </v-list-tile>
        
         <v-list-tile>
          <v-list-tile-content>
            <v-btn flat>
              <span style="color:white" v-if="lang == 'en'"
                ><a href="http://eservices.cityoflewisville.com/courtsservices/dockets.html">View Court Dockets&nbsp;<v-icon small>open_in_new</v-icon></a></span>
              <span style="color:white" v-else><a href="http://eservices.cityoflewisville.com/courtsservices/dockets.html">Expedientes de la corte&nbsp;<v-icon small>open_in_new</v-icon></a></span>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-btn flat>
              <span style="color:white" v-if="lang == 'en'"
                ><a href="http://metrics.cityoflewisville.com/d/#/dashboard/public/details/court">Performance Dashboard&nbsp;<v-icon small>open_in_new</v-icon></a></span>
              <span style="color:white" v-else><a href="http://metrics.cityoflewisville.com/d/#/dashboard/public/details/court">Panel de rendimiento&nbsp;<v-icon small>open_in_new</v-icon></a></span>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-btn flat @click="changeLang">
              <span style="color:white" v-if="lang == 'en'"
                >ESPA&#xd1;OL&nbsp;<flag iso="es"></flag
              ></span>
              <span style="color:white" v-else>ENGLISH&nbsp;<flag iso="us"></flag>&nbsp;</span>
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
      style="background-color:#54258a;
      padding-left:0;"
      :height="120"
    >
      <v-toolbar-side-icon 
      style="color:white;"
        @click="sidebar = !sidebar"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="white--text"
        ><div>
          <router-link :to="navItems.home.path + `?lang=${lang}`"
          >
           <img v-if="window.width > 961"
        src="http://metrics.cityoflewisville.com/assets/pmartin_dark.png"
        width="75"
        :class="{'hide': $route.name != 'Home'}"
      />&nbsp;
      <span id="lmc" :class="{'smaller-text': window.width < 961}"><span v-if="window.width > 961"></span>
      Lewisville
      <span v-if="window.width < 420"><br/></span>
      <span v-else> </span>Municipal
      <span v-if="window.width < 420"><br/></span>
      <span v-else> </span>Court</span>
        </router-link>
        </div>
      </v-toolbar-title>
       <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-list>
              <v-list-title>
                <v-list-title-tile>
                   <router-link :to="navItems.home.path + `?lang=${lang}`"
          >
                  <v-icon style="color:white;">home</v-icon>
                  Home
                   </router-link>
                </v-list-title-tile>
              </v-list-title>
            </v-list>
          </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view>
              <home :lang="lang" :window="windowObj"></home>
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
  props: ["lang", "window"],
  components: {
    home
  },
  data() {
    return {
      windowObj: this.window,
      sidebar: true,
      navItems: {
        home: {
          title: "Home",
          component: "Home",
          path: `/`
        },
        citationOptions: [
          {
            title: {
              en:"Know your Rights",
              es:"Conoce tus derechos"
            },
            component: "KnowYourRights",
            path: "/citation-rights"
          },
          {
            title: {
              en: "Options",
              es: "Opciones"
            },
            component: "Options",
            path: "/citation-options"
          },
          {
            title: {
              en: "Alternatives to Trial",
              es: "Alternativas al trial"
            },
            component: "TrialAlternatives",
            path: "/citation-alternatives"
          }
        ],
        courtOptions: [
          {
            title: { 
              en:"Hours and Directions",
              es: "Horas y Direcciones"
            },
            component: "HoursDirections",
            path: "/court-hours-directions"
          },
          {
            title: {
              en:"Dress Code & Decorum",
              es:"Código de vestimenta y decoro"
            },
            component: "DressCode",
            path: "/court-dress-code"
          },
          {
            title: {
              en:"Court Security",
              es:"Seguridad de la corte"
            },
            component: "Security",
            path: "/court-security"
          },
          {
            title: {
              en:"Mobile / Cell Phones",
              es:"Móviles / Celulares"
            },
            component: "CellPhones",
            path: "/court-phones"
          }
        ],
        fineOptions: [
          {
            title: {
              en:"Pay Fines Online",
              es:"Pagar multas en línea"
            },
            component: "PayFinesOnline",
            path: "/fines-pay-online"
          },
          {
            title: {
              en:"Fines/Court Costs",
              es: "Multas / Costos de la Corte"
            },              
            component: "CourtCosts",
            path: "/fines-court-costs"
          },
          {
            title: {
              en:"Alternatives",
              es: "Alternativas"
            },
            component: "Alternatives",
            path: "/fines-alternatives"
          }
        ],
        trialOptions: [
          {
            title: {
              en: "Presenting your Case",
              es: "Presentando su caso",
            },
            component: "CasePresentation",
            path: "/trial-case-presentation"
          },
          {
             title: {
              en: "Continuances",
              es: "Continuas",
            },
            component: "Continuances",
            path: "/trial-continuances"
          },
          {
             title: {
              en: "Court Appearances",
              es: "Apariciones en la Corte",
            },
            component: "CourtAppearances",
            path: "/trial-court-appearances"
          },
          {
             title: {
              en: "Judgements and Verdicts",
              es: "Juicios y veredictos",
            },
            component: "JudgementsVerdicts",
            path: "/trial-judgements"
          }
        ],
        juryDutyOptions: [
          {
            title: {
              en: "What to Expect",
              es: "Qué esperar"
            },
            component: "JurorExpectations",
            path: "/juror-expectations"
          },
           {
            title: {
              en: "Juror Qualifications",
              es: "Calificaciones de los jurados"
            },
            component: "JurorQualifications",
            path: "/juror-qualifications"
          },
           {
            title: {
              en: "Juror Exemptions",
              es: "Exenciones de Jurado"
            },
            component: "JurorExemptions",
            path: "/juror-exemptions"
          },
           {
            title: {
              en: "Failure to Answer a Jury Summons",
              es: "Fallas de responder a una citación"
            },
            component: "JurorSummonsFailure",
            path: "/juror-summons-failure"
          },
           {
            title: {
              en: "Contact Us",
              es: "Contáctenos"
            },
            component: "JurorContact",
            path: "/juror-contact-us"
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
              en:"Contact Information",
              es: "Contacto para corte adolescentes"
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
        ],
        warrantOptions: [
          {
            title: {
              en: 'Clear a Warrant',
              es: 'Borrar una orden'
            },
            component: "ClearWarrants",
            path: "/warrants-clear"
          },
          {
            title: {
              en: "Active Warrants",
              es: "Ordenes activas"
            },
            component: "ActiveWarrants",
            path: "/warrants-active"
          }
        ],
        courtForms: [
          {
            title: {
              en: 'Request for Continuance',
              es: 'Solicitud de continuidad'
            },
            component: "FormsContinuance",
            path: "/court-forms-continuance"
          },
          {
            title: {
              en: 'Attorney Appearance Bond',
              es: 'Bond de apariencia de abogado'
            },
            component: "FormsAttorneyAppearance",
            path: "/court-forms-attorney-appearance"
          },
          {
            title: {
              en: 'Deferred Disposition Request by Mail',
              es: 'Solicitud de Disposición Diferida por Correo'
            },
            component: "FormsDeferredDisposition",
            path: "/court-forms-deferred-disposition"
          },
          {
            title: {
              en: 'Driving Safety Course Request by Mail',
              es: 'Curso de seguridad en la conducción Solicitud de curso por correo'
            },
            component: "FormsDrivingSafety",
            path: "/court-forms-driving-safety"
          },
          {
            title: {
              en: 'Financial Information Form (Indigency Questionnaire)',
              es: 'Formulario de Información Financiera (Cuestionario de Indigencia)'
            },
            component: "FormsFinancialInformation",
            path: "/court-forms-financial-information"
          },
          {
            title: {
              en: 'Plea Form',
              es: 'Formulario de petición'
            },
            component: "FormsPleaForm",
            path: "/court-forms-plea-form"
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
    }
  };
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.checkWindowWidth()
    console.log(this.$route)
  },
  destroyed: function() {
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
      this.drawer.clipped = !this.drawer.clipped
        this.drawer.open = !this.drawer.open
        this.drawer.permanent = !this.drawer.permanent
    },
    checkWindowWidth: function() {
      if(this.window.width > 961) {
        this.sidebar = true
      }
      else {
        this.sidebar = false
      }
    }
  },
  watch: {
    window: function() {
      this.checkWindowWidth()
    }
  }
};
</script>

<style scoped>
a.router-link-exact-active.router-link-active {
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
aside > v-list-title:hover {
  background-color: #ddd;
}

aside > v-list-title > v-list-title-tile > a {
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
  font-weight: 500;
  color: white;
}
aside > a > #lmc:hover {
  text-decoration: none !important;
}
a { 
  color: white;
}
aside > a {
  color: white;
}
v-list-title:hover {
    background-color: #2a2929;
}
.v-list__tile__content {
   border-bottom: 1px solid #81818169;
}
.center {
    position: absolute;
    bottom: 25%;
    left: 33%;
}
button.v-btn.v-btn--flat.theme--dark {
    width: -webkit-fill-available;
}
#app > div > aside > div.v-list.white--text.dark.theme--dark > div {
  margin: 16px 0;
}
#app > div.v-menu__content.theme--dark.v-menu__content--fixed.menuable__content__active > div:nth-child(2) {
    margin-top: -20px;
}
.smaller-text {
  font-size: smaller;
}
#app > div > aside > div.v-list.white--text.dark.theme--dark {
    margin-top: 105px;
}
.hide {
  display: none;
}
v-list-title {
    margin-top: 34px !important;
}
.v-list.theme--light[data-v-1bd271a0] {
    background-color: #54258a!important;
    font-weight: 600;
    color: white;
}
.v-list.theme--light[data-v-1bd271a0]:hover {
  background-color:#2a2929 !important;
}
v-list-title[data-v-1bd271a0]:hover {
  background-color:inherit;
}
</style>
