<template>
  <v-layout row fluid wrap pa-5 class="metric-row">
    <v-flex xs12 lg4 text-xs-center>
      <div class="metric-title">Number of Cases in Past 1 Year</div>
      <div class="metric-value">{{ metrics.CaseCountPast1Year }}</div>
    </v-flex>
    <v-flex xs12 m12 lg4 text-xs-center>
      <div class="metric-title">Days to Case Resolution</div>
      <div class="metric-value">{{ metrics.DaysToCaseResolution }}</div>
    </v-flex>
    <v-flex xs12 lg4 text-xs-center>
      <div class="metric-title">TBD</div>
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
        .post("https://query.cityoflewisville.com/v2/?webservice=Court_WebsiteMetrics")
        .then(function(_results) {
          if (typeof _results.data[0][0] != "undefined") {
            console.log(_results.data[0][0])
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
