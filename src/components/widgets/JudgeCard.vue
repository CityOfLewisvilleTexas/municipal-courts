<template>
  <v-flex lg5 pa-5 text-sm-left>
    <h1 text-sm-left><span v-if="$route.query.lang == 'es'">Conozca a su juez, honorable señor juez</span><span v-else>Meet your Judge, Honorable Gavel Judge</span></h1>
    <router-link to="/">
      <h2 text-sm-left><span v-if="$route.query.lang == 'es'">Aprende sobre la corte</span><span v-else>Learn about the court</span></h2>
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
