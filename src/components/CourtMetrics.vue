<template>
  <v-layout pt-5 pb-5 lg-10 mr-1 ml-1 wrap fluid class="metric-row">
    <v-flex xs4 text-xs-center class="metric-col">
      <div class="metric-title">Number of Cases in Past 1 Year</div>
      <div class="metric-value">{{ metrics.CaseCountPast1Year }}</div>
    </v-flex>
    <v-flex xs4 text-xs-center class="metric-col">
      <div class="metric-title">Days to Case Resolution</div>
      <div class="metric-value">{{ metrics.DaysToCaseResolution }}</div>
    </v-flex>
    <v-flex xs4 text-xs-center class="metric-col">
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
        .post("https://query.cityoflewisville.com/v2", {
          webservice: "Court_WebsiteMetrics"
        })
        .then(function(_results) {
          if (typeof _results.data[0][0] != "undefined") {
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

<style>
.metric-row {
  background-color: #e0b008;
}
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
