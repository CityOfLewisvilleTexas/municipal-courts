<template>
  <v-flex xs12 sm12 md12 lg12 pa-5 white text-xs-center>
    <h1 ma-5><span v-if="$route.query.lang == 'es'">Queremos escuchar de usted</span><span v-else>We want to hear from you</span></h1>
    <v-btn class="flat white--text my-5" style="background-color:#54258a;"><span v-if="$route.query.lang == 'es'">ENVIE COMENTARIOS</span><span v-else>SUBMIT FEEDBACK</span></v-btn>
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
button.flat.white--text.my-5.v-btn.theme--light {
    margin-left: -12px;
}
</style>
