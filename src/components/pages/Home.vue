<template>
  <v-layout row wrap>
    <v-container>
      <i-want-to></i-want-to>
    </v-container>

    <v-container id="mission-card">
      <mission-statement :window="window"></mission-statement>
    </v-container>

    <court-updates></court-updates>
    <upcoming-events></upcoming-events>
  

    <v-container>
    <v-flex xs12 sm12 md12 lg12 id="judge-card">
      <v-layout row fluid wrap>
        <judge-card></judge-card>
        <video-card></video-card>
      </v-layout>
    </v-flex>
    </v-container>

    <v-container>
    <v-flex xs12 sm12 md12 lg12>
      <court-metrics></court-metrics>
    </v-flex>
    </v-container>

    <v-container>
    <v-flex xs12 sm12 md12 lg12>
      <support></support>
    </v-flex>
    </v-container>

    <v-container>
      <feedback></feedback>
   </v-container>

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
   props: ["lang", "window"],
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
    }
  },
  methods: {
    setLang() {
      this.lang = this.$router.history.current.query.lang
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
div#updates {
  margin-left: 12% !important;
}

@media only screen and (max-width:1264px) {
   div#updates {
  margin-left:0 !important;
} 
  /* div#events {
    margin-left: 6% !important;
  } */
}
</style>
