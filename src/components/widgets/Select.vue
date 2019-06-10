<template>
  <v-flex pa-4>
    <v-container mt-5>
      <span style="display:inline-block;font-size:22px;">
        <h1>
          <span v-if="$route.query.lang == 'es'">Necesito...&nbsp;&nbsp;</span>
          <span v-else>I want to...&nbsp;&nbsp;</span></h1>
      </span>
      <v-select
        :items="$route.query.lang == 'es' ? options.es : options.en"
        v-model="selectedOption"
        background-color="#E0B008"
        height="60"
        style="vertical-align:middle;margin-left:auto;margin-right:auto;display:inline-block;text-align:center;"
        :label="$route.query.lang == 'es' ? 'escoge un opcion' : 'select an option'"
        color="white--text"
        solo
      >
      </v-select>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      options: {
        en: [
        "find the court hours",
        "find a lawyer",
        "respond to a citation",
        "learn my rights",
        "know what to expect at court"
        ],
        es: [
        "encontrar las horas de corte",
        "busco un abogado",
        "responder a una cita",
        "aprender mis derechos",
        "saber qué esperar en la corte"
        ]
        },
      selectedOption: ""
    };
  }
};
</script>

<style>
a.v-list__tile.v-list__tile--link.theme--light {
  background-color: #e0b008;
  color: white;
  font-size: 1.5rem;
}
.v-list.theme--light {
  background-color: #e0b008;
}
.v-select__selection.v-select__selection--comma {
  font-size: 1.5rem;
  color: white;
}
.v-select__selections {
  font-size: 1.5rem !important;
  color: white !important;
}
div.v-input__slot > div.v-select__slot > label {
  font-size: 1.5rem !important;
  color: white;
}
div.v-input__append-inner > div > i {
  color: white !important;
}
</style>
