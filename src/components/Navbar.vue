<template>
  <v-toolbar :height="125" dark color="#1855B0">
    <img
      src="http://metrics.cityoflewisville.com/assets/pmartin_dark.png"
      style="color:white"
      width="75"
    />
    <v-toolbar-title lg-only class="white--text"
      ><span
        style="font-family:Times New Roman,Serif;font-size:24px;font-weight:500;"
        >Lewisville Municipal Court</span
      ></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-items lg-and-down class="hidden-sm-and-down">
      <router-link to="">
        <v-btn flat>Coming to Court</v-btn>
      </router-link>
      <router-link to="">
        <v-btn flat>Responding to a Citation</v-btn>
      </router-link>
      <router-link to="">
        <v-btn flat>Jury Summons</v-btn>
      </router-link>
      <router-link to="">
        <v-btn flat>Your Rights</v-btn>
      </router-link>
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
