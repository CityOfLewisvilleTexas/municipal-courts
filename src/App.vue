<template>
  <div id="app">
    <v-app fixed grid-list-xl text-md-center>
      <navbar :lang="lang" :window="window" @change="setLang"></navbar>
      <snackbar :snackbar="snackbar"></snackbar>
    </v-app>
  </div>
</template>

<script>
//widgets
import Navbar from "./components/widgets/Navbar";
import Snackbar from "./components/widgets/Snackbar";
//pages
import Home from "./components/pages/Home";
import router from "./router";

export default {
  components: {
    navbar: Navbar,
    home: Home,
    snackbar: Snackbar
  },
  data() {
    return {
      user: localStorage.colEmail,
      lang: "en",
      window: {
        height: 0,
        width: 0
      },
      options: [
        "find the court hours",
        "find a lawyer",
        "respond to a citation",
        "learn my rights",
        "know what to expect at court"
      ],
      selectedOption: "",
      snackbar: {
        show: false,
        text: "",
        color: "success",
        timeout: 5000
      }
    };
  },
  methods: {
    authenticate() {
      if(!window.location.host.includes('localhost')) {
        window.authenticate()
      } else return
    },
    getUser() {
      let that = this
      if(this.user != '') {
        return
      } else {
        const checkForEmail = () => {
          setTimeout(() => {
            if(localStorage.colEmail) {
              that.user = localStorage.colEmail
              console.log(that.user)
            }
            else checkForEmail()
          }, 3000)
        }
      }
    },
    setLang() {
      this.lang = this.lang == "en" ? (this.lang = "es") : (this.lang = "en");
      this.$router.push({
        query: {
          lang: this.lang
        }
      });
      localStorage.setItem(lang, this.lang);
    }
  },
  created() {
    this.$router.push({ query: { lang: this.lang } });
    this.authenticate()
    this.getUser()
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

* {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
}
body {
  background-color: #fafafa;
}
button {
  text-transform: capitalize !important;
  font-size: 1.3rem;
}
hr {
  border-color: #ffffff42 !important;
}
div.application--wrap {
  min-height: 100px !important;
}
.ql-editor {
  max-height: 250px !important;
  font-size: 16px;
}
</style>
