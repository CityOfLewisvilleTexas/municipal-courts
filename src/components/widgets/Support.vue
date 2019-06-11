<template>
  <v-layout row fluid wrap py-5 pr-5 class="support">
    <v-flex class="support--left" xs12 lg6 py-5 mr-5 pl-5 text-xs-center>
      <v-card style="background-color:inherit;box-shadow:none;border:none;">
        <v-layout column align-center justify-start ml-0>
          <v-avatar :size="200" my-3>
            <v-img
              class="elevation-7"
              :src="images.stock"
            ></v-img>
          </v-avatar>
          <v-card-text class="headline text-md-center my-0 py-0 white--text"
            >Letitia Robinson</v-card-text
          >
          <v-card-text class="text-md-center pb-4 white--text"
            ><span v-if="$route.query.lang == 'es'">Supervisor de la corte</span><span v-else> Court Supervisor</span></v-card-text
          >
        </v-layout>

        <div class="speech-bubble">
          <span v-if="$route.query.lang == 'es'">¿Aún tiene preguntas sobre las horas o reglas de la corte? Llámanos o chatea en línea. Estamos aquí para ayudar.</span>
          <span v-else>Still have questions about the courtroom hours or rules? Give us a call or chat online. We are here to help.</span>
        </div>
      </v-card>
    </v-flex>
    <v-flex
      class="support--right"
      xs12
      m12
      lg4
      ml-5
      mt-5
      mr-0
      pl-5
      text-xs-center
      text-lg-left
      white--text
    >
      <p>
        <b><u><span v-if="$route.query.lang == 'es'">Contáctenos</span><span v-else>Contact Us</span></u></b
        ><br />
        1197 West Main Street<br />
        Lewisville, Texas<br />
        Phone: 972.219.3436<br />
      </p>

      <p>
        <b><u><span v-if="$route.query.lang == 'es'">Horas de operación</span><span v-else>Hours of Operation</span></u></b
        ><br />
        Monday - Thursday: 7:30 a.m. to 5:30 p.m.<br />
        Friday: 7:30 a.m. to 11:30 a.m.
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
         images: {
          stock: require('../../assets/court_assistant.jpg')
         }
    }
  }
}
</script>

<style>
div#app {
    background: url(https://upload.wikimedia.org/wikipedia/commons/8/8d/Lewisville_City_Hall_2.jpg);
    background-repeat: no-repeat;
    background-position: -208px -54px;
}
.support {
  background-color: #1855b0;
}
.speech-bubble {
  position: absolute;
  display: inline-block;
  width: 50%;
  background-color: white;
  padding: 12px;
  border-radius: 12px !important;
  right: -95px;
  font-weight: 600;
  top: -40px;
  vertical-align: middle;
  line-height: 25px;
}

.support--right {
  margin-left: 25px;
  font-size: 1.5rem;
}

@media only screen and (max-width: 959px) {
  div#app {
    background-image: none;
  }
}
@media only screen and (max-width: 1264px) {
  .speech-bubble {
    position: initial !important;
    padding: 15px;
    width: 100%;
  }

  .support--right {
    border-left: none;
    margin-left: 0 !important;
  }

  .support--left {
    padding-left: 48px;
    margin-left: 48px;
  }
}
</style>
