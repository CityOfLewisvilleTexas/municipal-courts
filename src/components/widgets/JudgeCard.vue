<template>
  <v-flex lg5 px-5 pt-5 text-sm-left>
    <h1 text-sm-left><span v-if="$route.query.lang == 'es'">Conozca a su juez, honorable Brian Holman</span><span v-else>Meet your Judge, Honorable Brian Holman</span></h1>
    <router-link :to="'/?lang=' + $route.query.lang">
      <h2 text-sm-left><span v-if="$route.query.lang == 'es'">Aprende sobre la corte</span><span v-else>Learn about the court</span></h2>
    </router-link>
  </v-flex>
</template>

<script>
export default {};
</script>

<style scoped>
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
