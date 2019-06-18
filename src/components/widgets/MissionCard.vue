<template>
  <v-flex mt-5 id="mission-statement">
    <v-card height="600px" id="mission--card">
      <v-img
      id="img--judge"
        class="white--text"
        height="inherit"
        :src="images.stock"
      >
      </v-img>
       <v-card-title id="statement">
        <div style="text-align: left;">
          <v-flex xs12 mb-2 align-end flexbox>
            <span class="mission"><span v-if="$route.query.lang == 'es'">Declaración de misión</span><span v-else>Mission Statement</span></span>
          </v-flex>
          <span style="font-size:1.5rem;"
            ><span v-if="$route.query.lang == 'es'">Asegurar la administración justa, ordenada y efectiva de la justicia mediante la promoción y la mejora del respeto por el individuo, nuestra comunidad y el sistema judicial.</span>
            <span v-else>To ensure the fair, orderly and effective administration of justice by promoting and enhancing respect for the individual, our community and the judicial system.</span></span><br />
        </div>
      </v-card-title>
    </v-card>
    <div id="mission--card--mobile">
       <div style="text-align: center;">
          <v-flex xs12 mb-2 align-end flexbox>
            <span class="mission"><span v-if="$route.query.lang == 'es'">Declaración de misión</span><span v-else>Mission Statement</span></span>
          </v-flex>
          <span style="font-size:1.5rem;"
            ><span v-if="$route.query.lang == 'es'">Asegurar la administración justa, ordenada y efectiva de la justicia mediante la promoción y la mejora del respeto por el individuo, nuestra comunidad y el sistema judicial.</span>
            <span v-else>To ensure the fair, orderly and effective administration of justice by promoting and enhancing respect for the individual, our community and the judicial system.</span></span><br />
        </div>
    </div>
  </v-flex>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      images: {
        stock: require('../../assets/court.jpg')
      }
    }
  },
  methods: {
  
  }
};
</script>

<style scoped>
#statement {
  width: 75%;
  opacity: .85;
  height: 200px !important;
  position: absolute;
  bottom: 100px;
  background: #54258a !important;
  color: white;
}
.mission {
  font-size: 2.5rem !important;
  text-align: left !important;
  line-height: 18px;
}

#mission--card--mobile {
  display: none;
}

@media only screen and (max-width: 884px) {
  #mission--card {
    display: none;
  }

  #mission--card--mobile {
    display: contents !important;
  }

    #mission--card--mobile > div {
    background-color: #54258a !important;
    padding: 32px;
    border-radius: 5px;
    color: white;
  }
}
</style>
