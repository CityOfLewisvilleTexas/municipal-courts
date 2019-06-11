<template>
  <v-flex mt-5 id="mission-statement">
    <v-card height="600px">
      <v-img
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
            ><span v-if="$route.query.lang == 'es'">Nuestra misión es ser neutral, cortés, servicial y justo para todos los miembros del público.</span>
            <span v-else>To ensure the fair, orderly and effective administration of justice by promoting and enhancing respect for the individual, our community and the judicial system.</span></span><br />
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      images: {
        stock: require('../../assets/court.jpg')
      }
    }
  }
};
</script>

<style scoped>
#statement {
  width: 520px;
  height: 200px !important;
  position: absolute;
  bottom: 100px;
  background: #1855b0 !important;
  color: white;
}

.mission {
  font-size: 2.5rem !important;
  text-align: left !important;
}
</style>
