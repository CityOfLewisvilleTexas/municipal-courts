<template>
  <v-layout row fluid wrap pa-5 class="metric-row">
    <v-flex xs12 lg4 text-xs-center>
      <div class="metric-title">
          <span v-if="$route.query.lang == 'es'">Casos en el último año</span>
          <span v-else>Cases in Past Year</span></div>
      <div class="metric-value">{{ metrics.CaseCountPast1Year }}</div>
    </v-flex>
    <v-flex xs12 lg4 text-xs-center>
      <div class="metric-title">
          <span v-if="$route.query.lang == 'es'">Días para la resolución de casos
</span>
          <span v-else>Days to Case Resolution</span></div>
      <div class="metric-value">{{ metrics.DaysToCaseResolution }}</div>
    </v-flex>
    <v-flex xs12 lg4 text-xs-center>
      <div class="metric-title">
          <span v-if="$route.query.lang == 'es'">TBD</span>
          <span v-else>TBD</span></div>
      <div class="metric-value">{{ metrics.CaseCountPast1Year }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      metrics: []
    };
  },
  mounted: function() {
    var _this = this;
    _this.getData();
  },
  methods: {
    getData: function() {
      var _this = this;

      axios
        .post(
          "https://query.cityoflewisville.com/v2/?webservice=Court_WebsiteMetrics"
        )
        .then(function(_results) {
          if (typeof _results.data[0][0] != "undefined") {
            console.log(_results.data[0][0]);
            _this.metrics = _results.data[0][0];
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
/* .flex.row {
    display:inline-block;
} */
.metric-row {
  background-color: #e0b008;
}
/* .metric-col {
    display: inline-block;
} */
.metric-title {
  font-size: 16px;
  color: white;
  font-size: 2rem;
  padding: 22px 0 2px 0;
}
.metric-value {
  font-size: 50px;
  color: white;
  font-size: 4.5rem;
  padding: 12px 0 22px 0;
  font-weight: 600;
}
</style>
