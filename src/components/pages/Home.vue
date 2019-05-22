<template>
     <v-layout row wrap>
          <v-container>
            <i-want-to></i-want-to>
            <mission-statement></mission-statement>
          </v-container>

          <v-flex xs0 md0 lg1 class="spacer"> </v-flex>
          <court-updates></court-updates>
          <upcoming-events></upcoming-events>
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
</template>

<script>
import Select from "../widgets/Select";
import MissionCard from "../widgets/MissionCard";
import CourtUpdates from "../widgets/CourtUpdates";
import UpcomingEvents from "../widgets/UpcomingEvents";
import JudgeCard from "../widgets/JudgeCard";
import VideoCard from "../widgets/VideoCard";
import CourtMetrics from "../widgets/CourtMetrics";
import Support from '../widgets/Support';
import Feedback from '../widgets/Feedback';
//import Map from '../widgets/Map'

export default {
    props: [],
    components: {
    "i-want-to": Select,
    "mission-statement": MissionCard,
    "court-updates": CourtUpdates,
    "upcoming-events": UpcomingEvents,
    "judge-card": JudgeCard,
    "video-card": VideoCard,
    "court-metrics": CourtMetrics,
    "support":Support,
    "feedback":Feedback,
    // "court-map": Map
    }
}
</script>

<style>

</style>
