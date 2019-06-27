<template>
  <v-flex xs12 m12 lg5 id="updates">
    <v-card class="court-updates">
      <div class="headline updates">
        <span v-if="$route.query.lang == 'es'">
          Actualizaciones de la Corte
        </span>
        <span v-else>
          Court Updates
        </span>
      </div>
      <v-spacer></v-spacer>
      <v-container v-if="$route.query.lang == 'es'">
        <v-card
          v-for="(update, index) in updates"
          :key="index"
          id="update"
          :class="'update' + ' ' + index"
        >
          <v-card-title primary-title>
            <div text-xs-center text-md-left text-lg-left>
              <span>{{ update.es.date }}</span>
              <div class="headline">{{ update.es.slogan }}</div>
              <span v-if="update.es.link"><router-link :to="update.es.link + `?lang=${$route.query.lang}`">Aprende más</router-link></span>
            </div>
          </v-card-title>
          <hr />
        </v-card>
      </v-container>
      <v-container v-else>
        <v-card
          v-for="(update, index) in updates"
          :key="index"
          id="update"
          :class="'update' + ' ' + index"
        >
          <v-card-title primary-title>
            <div text-xs-center text-md-left text-lg-left>
              <span>{{ update.en.date }}</span>
              <div class="headline">{{ update.en.slogan }}</div>
              <span v-if="update.en.link"><router-link :to="update.en.link + `?lang=${$route.query.lang}`">Learn more</router-link></span>
            </div>
          </v-card-title>
          <hr />
        </v-card>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: [],
  data() {
    return {
       updates: [
        {
          en: { 
            date: "May 21, 2019",
            slogan: "All court forms are now available online",
            link: '/court-forms-all'
          },
          es: {
            date: "21 Mayo 2019",
            slogan: "Todos formularios de la corte están disponibles en línea",
            link: '/court-forms-all'
          }
        },
        {
          en: {
            date: "June 24, 2019",
            slogan: "DPS Surcharge Repealed",
            link: "/features-updates"
          },
          es: {
            date: "24 Junio 2019",
            slogan: "Sobrecargo DPS derogado",
            link: "/features-updates"
          }
        },
      ],
    };
  }
};
</script>

<style scoped>
.court-updates {
  border: none;
  box-shadow: none;
  background-color: inherit !important;
  font-family: "Montserrat", Arial, Helvetica, sans-serif !important;
}
.headline.updates {
  padding-top: 20px;
  font-weight: 600;
  text-align: left;
  padding-left: 45px;
  font-size: 2rem !important;
  font-family: "Montserrat", Arial, Helvetica, sans-serif !important;
}
.update {
  text-align: left;
  margin-left: 18px;
  margin-right: 22px;
  margin-bottom: 12px;
  border: none !important;
  box-shadow: none !important;
  background-color: inherit !important;
  font-family: "Montserrat", Arial, Helvetica, sans-serif !important;
}
</style>
