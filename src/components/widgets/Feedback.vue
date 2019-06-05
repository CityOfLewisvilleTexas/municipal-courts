<template>
  <v-flex xs12 sm12 md12 lg10 pa-5 white text-xs-center>
    <h1 ma-5><span v-if="$route.query.lang == 'es'">Queremos escuchar de usted</span><span v-else>We want to hear from you</span></h1>
    <v-btn class="flat blue white--text my-5"><span v-if="$route.query.lang == 'es'">ENVIE COMENTARIOS</span><span v-else>SUBMIT FEEDBACK</span></v-btn>
  </v-flex>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 2rem;
}

button {
  font-size: 1.5rem;
}
</style>
