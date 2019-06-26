<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
       <v-container>
    <h1 class="pt-3">Conozca a su juez</h1>

    <p id="judge-desc">
    Brian Holman, juez presidente de la Corte Municipal de Lewisville, nació y se crió en San 
    Diego, california. Asistió a la Universidad Brigham Young, donde recibió una licenciatura 
    licenciada en Ciencias Políticas. El juez Holman obtuvo su título de abogado en la Universidad de 
    Arkansas y ejerció la abogacía en Denton, Texas, durante 10 años, antes de ocupar el cargo a tiempo completo en 
    2002. Mientras vivía en España, el juez Holman desarrolló una fluidez en el idioma español que 
    sigue utilizándolo en su posición actual. El juez Holman ha servido dos veces como presidente de la 
    la Asociación de Tribunales Municipales de Texas, ha sido Director Regional de la TMCA por varios 
    términos y actualmente sirve como miembro de la Junta Directiva de los Tribunales Municipales de Texas 
    fundación. Desde 2002, el juez Holman ha estado en la facultad de los Tribunales Municipales de Texas 
    Centro de educación donde presenta educación legal continua a jueces municipales de todo el estado de
    Texas. El juez Holman reside en el área de Denton con su esposa por más de 30 años.
    </p>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <v-container>
    <h1 class="py-3">Meet Your Judge</h1>

    <p id="judge-desc">
    Brian Holman, Presiding Judge for the Lewisville Municipal Court, was born and raised in San
    Diego, California. He attended Brigham Young University where he received an undergraduate
    degree in Political Science. Judge Holman earned his Law degree from the University of
    Arkansas and practiced law in Denton, Texas for 10 years before taking the bench full-time in
    2002. While living in Spain, Judge Holman developed a fluency in the Spanish language which
    he continues to use in his current position. Judge Holman has twice served as President of the
    Texas Municipal Courts Association, has been a Regional Director for the TMCA for several
    terms and currently serves as a member of the Board of Directors of the Texas Municipal Courts
    Foundation. Since 2002, Judge Holman has been on the faculty of the Texas Municipal Courts
    Education Center where he presents continuing legal education to municipal judges across
    Texas. Judge Holman resides in the Denton area with his wife of more than 30 years.
    </p>  

      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#judge-desc {
    font-size:19px;
    line-height:34px;
}
</style>
