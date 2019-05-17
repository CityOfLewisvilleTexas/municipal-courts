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

          <v-flex xs0 md1 lg1 class="spacer"> </v-flex>
          <court-updates :updates="updates"></court-updates>
          <upcoming-events :events="events"></upcoming-events>
          <v-flex xs0 md1 lg1 class="spacer"> </v-flex>

          <v-flex xs0 md1 lg1 class="spacer"> </v-flex>
          <v-flex xs12 sm12 m10 lg10 id="judge-card">
            <v-layout row fluid wrap>
              <judge-card></judge-card>
              <video-card></video-card>
            </v-layout>
          </v-flex>
          <v-flex xs0 md1 lg1 class="spacer"> </v-flex>

          <v-flex xs0 md1 lg1 class="spacer"> </v-flex>
          <court-metrics></court-metrics>
          <v-flex xs0 md1 lg1 class="spacer"> </v-flex>

          <v-flex xs12>
            <v-alert :value="isError" type="error">
              {{ errorMessage }}.
            </v-alert>
          </v-flex>
        </v-layout>
      </v-container>
      <snackbar :snackbar="snackbar"></snackbar>
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Select from "./components/Select";
import MissionCard from "./components/MissionCard";
import CourtUpdates from "./components/CourtUpdates";
import UpcomingEvents from "./components/UpcomingEvents";
import Snackbar from "./components/Snackbar";
import JudgeCard from "./components/JudgeCard";
import VideoCard from "./components/VideoCard";
import CourtMetrics from "./components/CourtMetrics";

export default {
  components: {
    navbar: Navbar,
    "i-want-to": Select,
    "mission-statement": MissionCard,
    "court-updates": CourtUpdates,
    "upcoming-events": UpcomingEvents,
    snackbar: Snackbar,
    "judge-card": JudgeCard,
    "video-card": VideoCard,
    "court-metrics": CourtMetrics
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
