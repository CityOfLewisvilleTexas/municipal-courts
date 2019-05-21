<template>
  <v-flex lg5 pa-5 text-sm-left>
    <h1 text-sm-left>Meet your Judge, Honorable Gavel Judge</h1>
    <router-link to="/">
      <h2 text-sm-left>Learn about the court</h2>
    </router-link>
  </v-flex>
</template>

<script>
export default {};
</script>

<style>
#judge-card {
  background-color: #ddd;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
iframe {
  width: -webkit-fill-available;
  height: 325px;
}
</style>
