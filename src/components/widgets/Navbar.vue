<template>
  <v-app>
  <v-navigation-drawer v-model="sidebar" app v-if="sidebar && window.width < 961">
      <v-list class="white--text dark">
        <v-list-tile>
          <v-list-tile-content>
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{on}">
                <v-btn flat primary--text v-on="on">Court Costs & Fines</v-btn>
              </template>
                <v-list>
                  <v-list-title v-for="(item, index) in navItems.costsOptions" :key="index" :id="index">
                    <v-list-title-tile><router-link to="item.route">{{ item.title }}</router-link></v-list-title-tile>
                  </v-list-title>
                </v-list>
            </v-menu>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{on}">
                <v-btn flat primary--text v-on="on">Trial Options</v-btn>
              </template>
                <v-list>
                  <v-list-title v-for="(item, index) in navItems.trialOptions" :key="index" :id="index">
                    <v-list-title-tile><router-link to="item.link">{{ item.title }}</router-link></v-list-title-tile>
                  </v-list-title>
                </v-list>
            </v-menu>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{on}">
                <v-btn flat primary--text v-on="on">Teen Court</v-btn>
              </template>
                <v-list>
                  <v-list-title v-for="(item, index) in navItems.teenCourtOptions" :key="index" :id="index">
                    <v-list-title-tile><router-link to="item.link">{{ item.title }}</router-link></v-list-title-tile>
                  </v-list-title>
                </v-list>
            </v-menu>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{on}">
                <v-btn flat primary--text v-on="on">Additional Services</v-btn>
              </template>
                <v-list>
                  <v-list-title v-for="(item, index) in navItems.additionalServices" :key="index" :id="index">
                    <v-list-title-tile><router-link to="item.link">{{ item.title }}</router-link></v-list-title-tile>
                  </v-list-title>
                </v-list>
            </v-menu>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-btn flat> 
              <router-link to="jury-summons">Jury Summons</router-link></v-btn>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
        <v-list-tile-content>
          <v-btn flat>ESPA&#xd1;OL</v-btn>
        </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  <v-toolbar :height="125" dark color="#1855B0" fixed>
    <v-toolbar-side-icon class="hidden-lg-and-up" @click="sidebar = !sidebar"></v-toolbar-side-icon>
      <img class="hidden-md-and-down"
      src="http://metrics.cityoflewisville.com/assets/pmartin_dark.png"
      style="color:white"
      width="75"
      />
    <v-toolbar-title class="white--text hidden-md-only"
      ><router-link to="/"><span id="lmc">Lewisville Municipal Court</span>
        </router-link>
        </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
            <v-menu text-xs-center offset-y open-on-hover>
              <template v-slot:activator="{on}">
                <v-btn flat dark v-on="on">Court Costs & Fines</v-btn>
              </template>
                <v-list>
                  <v-list-title v-for="(item, index) in navItems.costsOptions" :key="index" :id="index">
                    <v-list-title-tile><router-link :to="item.route">{{ item.title }}</router-link></v-list-title-tile>
                  </v-list-title>
                </v-list>
            </v-menu>
            <v-menu text-xs-center offset-y open-on-hover>
              <template v-slot:activator="{on}">
                <v-btn flat dark v-on="on">Trial Options</v-btn>
              </template>
                <v-list>
                  <v-list-title v-for="(item, index) in navItems.trialOptions" :key="index" :id="index">
                    <v-list-title-tile><router-link :to="item.route">{{ item.title }}</router-link></v-list-title-tile>
                  </v-list-title>
                </v-list>
            </v-menu>
            <v-menu text-xs-center offset-y open-on-hover>
              <template v-slot:activator="{on}">
                <v-btn flat dark v-on="on">Teen Court</v-btn>
              </template>
                <v-list>
                  <v-list-title v-for="(item, index) in navItems.teenCourtOptions" :key="index" :id="index">
                    <v-list-title-tile><router-link :to="item.route">{{ item.title }}</router-link></v-list-title-tile>
                  </v-list-title>
                </v-list>
            </v-menu>
             <v-menu text-xs-center offset-y open-on-hover>
              <template v-slot:activator="{on}">
                <v-btn flat dark v-on="on">Additional Services</v-btn>
              </template>
                <v-list>
                  <v-list-title v-for="(item, index) in navItems.additionalServices" :key="index" :id="index">
                    <v-list-title-tile><router-link :to="item.route">{{ item.title }}</router-link></v-list-title-tile>
                  </v-list-title>
                </v-list>
            </v-menu>
        <v-btn flat> <router-link to="/jury-summons">Jury Summons</router-link></v-btn>
        <v-btn flat>ESPA&#xd1;OL</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</v-app>
</template>

<script>
import PayCourtFines from '../pages/PayCourtFines'
import CourtCosts from '../pages/CourtCosts'
import TrialProcedures from '../pages/TrialProcedures'
import TrialAlternatives from '../pages/TrialAlternatives'
import TeenCourtInfo from '../pages/TeenCourtInfo'
import TeenCourtContact from '../pages/TeenCourtContact'
import TeenCourtVolunteer from '../pages/TeenCourtVolunteer'
import TeenCourtDocket from '../pages/TeenCourtDocket'
import TeenCourtTalks from '../pages/TeenCourtTalks'
import CourtForms from '../pages/CourtForms'

export default {
components: {
'pay-court-fines':PayCourtFines,
'court-costs':CourtCosts,
'trial-procedures':TrialProcedures,
'trial-alternatives':TrialAlternatives,
'teen-court-info':TeenCourtInfo,
'teen-court-contact':TeenCourtContact,
'teen-court-volunteer':TeenCourtVolunteer,
'teen-court-docket':TeenCourtDocket,
'teen-court-talks':TeenCourtTalks,
'court-forms':CourtForms
},
data() {
    return {
      navItems: {
        costsOptions: [
          {
            title: 'Pay Court Fines',
            route: '/pay-court-fines'
          },
          {
            title: 'Fines/Court Costs',
            route: '/court-costs'
          }
        ],
        trialOptions: [
          {
            title: 'Trial Procedures',
            route: '/trial-procedures'
          },
          {
            title: 'Alternatives to Trial ',
            route: '/trial-alternatives'
          }
        ],
        teenCourtOptions: [
          {
            title: 'What is Teen Court?',
            route: '/teen-court-info'
          },
          {
            title: 'Teen Court Contact Information',
            route: '/teen-court-contact'
          },
          {
            title: 'Volunteer for Teen Court',
            route: '/teen-court-volunteer'
          },
          {
            title: 'Teen Court Docket',
            route: '/teen-court-docket'
          },
          {
            title: 'Teen Talks',
            route: '/teen-court-talks'
          }
        ],
        additionalServices: [
          {
            title: 'Active Warrants',
            route: 'https://www.cityoflewisville.com/about-us/departments-services/municipal-court/active-warrants'
          },
          {
            title: 'Court Forms',
            route: '/court-forms'
          },
          {
            title: 'Court Dockets',
            route: 'http://eservices.cityoflewisville.com/courtsservices/dockets.html'
          },
          {
            title: 'Performance Dashboard',
            route: 'https://www.cityoflewisville.com/about-us/city-departments/information-technology-services/performance-dashboard-1841'
          },
          {
            title: 'Texas Court Help',
            route: 'https://www.cityoflewisville.com/about-us/city-departments/municipal-court/texas-court-help'
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
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
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
  font-weight:600;
}
v-list-title {
    display: block;
    text-align: center;
    padding: 6px;
    font-size: 1.1rem;
    margin-top: 3px;
    margin-right: 4px;
    margin-left: 4px;
    cursor:pointer;
}
v-list-title:hover {
  background-color:#ddd;
}

v-list-title > v-list-title-tile > a {
  text-decoration: none;
}
.v-btn__content > a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
#app > div > aside > div.v-list.white--text.dark.theme--light > div:nth-child(5) > div > div > button > div > a {
  color: #000;
}
#lmc {
  font-family:Times New Roman,Serif;
  font-size:24px;
  font-weight:500;
  color:white;
}
#lmc:hover {
  text-decoration:none !important;
}
</style>
