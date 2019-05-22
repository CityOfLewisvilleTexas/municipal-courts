<template>
  <div id="app">
    <v-app>
      <v-container fixed grid-list-xl text-md-center>
        <navbar></navbar>
        <router-view>
          <home></home>
        </router-view>
      </v-container>
      <snackbar :snackbar="snackbar"></snackbar>
    </v-app>
  </div>
</template>

<script>
//widgets
import Navbar from "./components/widgets/Navbar";
import Snackbar from './components/widgets/Snackbar';
//pages
import Home from './components/pages/Home'

export default {
  components: {
    "navbar": Navbar,
    "home": Home,
    "snackbar":Snackbar
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
div.application--wrap {
  min-height:1px !important;
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
