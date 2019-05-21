<template>
  <v-toolbar :height="125" dark color="#1855B0" fixed mb-5>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <img class="hidden-md-and-down"
      src="http://metrics.cityoflewisville.com/assets/pmartin_dark.png"
      style="color:white"
      width="75"
    />
    <v-toolbar-title class="white--text"
      ><span
        style="font-family:Times New Roman,Serif;font-size:24px;font-weight:500;"
        >Lewisville Municipal Court</span
      ></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat><router-link to="">Coming to Court </router-link></v-btn>
        <v-btn flat><router-link to="">Responding to a Citation </router-link></v-btn>
        <v-btn flat> <router-link to="">Jury Summons</router-link></v-btn>
        <v-btn flat><router-link to="">Your Rights </router-link></v-btn>
        <v-btn flat>ESPA&#xd1;OL</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({})
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
</style>
