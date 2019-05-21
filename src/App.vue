<template>
  <div id="app">
    <v-app>
      <v-container fixed grid-list-xl text-md-center>
        <v-layout row wrap>
          <navbar></navbar>
          <v-container>
            <i-want-to
              :options="options"
              :selectedOption="selectedOption"
            ></i-want-to>
            <mission-statement></mission-statement>
          </v-container>

          <v-flex xs0 md0 lg1 class="spacer"> </v-flex>
          <court-updates :updates="updates"></court-updates>
          <upcoming-events :events="events"></upcoming-events>
          <v-flex xs0 md0 lg1 class="spacer"> </v-flex>

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
        </v-layout>
      </v-container>

      

      <snackbar :snackbar="snackbar"></snackbar>
    </v-app>
  </div>
</template>

<script>
//widgets
import Navbar from "./components/widgets/Navbar";
import Select from "./components/widgets/Select";
import MissionCard from "./components/widgets/MissionCard";
import CourtUpdates from "./components/widgets/CourtUpdates";
import UpcomingEvents from "./components/widgets/UpcomingEvents";
import Snackbar from "./components/widgets/Snackbar";
import JudgeCard from "./components/widgets/JudgeCard";
import VideoCard from "./components/widgets/VideoCard";
import CourtMetrics from "./components/widgets/CourtMetrics";
import Support from './components/widgets/Support';
import Feedback from './components/widgets/Feedback';
import Map from './components/widgets/Map'

export default {
  components: {
    "navbar": Navbar,
    "i-want-to": Select,
    "mission-statement": MissionCard,
    "court-updates": CourtUpdates,
    "upcoming-events": UpcomingEvents,
    "snackbar": Snackbar,
    "judge-card": JudgeCard,
    "video-card": VideoCard,
    "court-metrics": CourtMetrics,
    "support":Support,
    "feedback":Feedback,
    "court-map": Map
  },
  data() {
    return {
      options: [
        "find the court hours",
        "find a lawyer",
        "respond to a citation",
        "learn my rights",
        "know what to expect at court"
      ],
      selectedOption: "",
      updates: [
        {
          date: "Jan 21, 2019",
          slogan: "All court forms are now available online"
        },
        {
          date: "Jan 1, 2019",
          slogan: "Happy New Year!"
        }
      ],
      events: [
        {
          date: "Jan 30",
          event: "Community Board Meeting"
        },
        {
          date: "Feb 1",
          event: "Family Neighborhood Potluck"
        },
        {
          date: "Feb 12",
          event: "Court Closed for Lincoln's Birthday"
        }
      ],
      snackbar: {
        show: false,
        text: "",
        color: "success",
        timeout: 5000
      }
    };
  },
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");

* {
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
}
button {
  text-transform: capitalize !important;
  font-size: 1.3rem;
}
hr {
  border-color: #ffffff42 !important;
}
@media only screen and (max-width: 750px) {
  #statement {
    display: none;
  }

  #mission-statement {
    display: none;
  }
}
</style>
