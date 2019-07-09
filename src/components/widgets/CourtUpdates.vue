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
          v-for="(update, index) in updates.es"
          :key="index"
          id="update"
          :class="'update' + ' ' + index"
        >
          <v-card-title primary-title>
            <div text-xs-center text-md-left text-lg-left>
              <span :ref="update.date" v-html="update.date"></span><edit-icon :content="update.date"></edit-icon>
              <div class="headline"><span :ref="update.headline" v-html="update.headline"></span><edit-icon :content="update.headline"></edit-icon></div>              
              <span v-if="update.description">
                <modal :dialog="dialog" :data="update.description" @close="dialog = false"></modal>
              </span>
            </div>
          </v-card-title>
          <hr />
        </v-card>
      </v-container>
      <v-container v-else>
        <v-card
          v-for="(update, index) in updates.en"
          :key="index"
          id="update"
          :class="'update' + ' ' + index"
        >
          <v-card-title primary-title>
           <div text-xs-center text-md-left text-lg-left>
              <span :ref="update.date" v-html="update.date"></span><edit-icon :content="update.date"></edit-icon>
              <div class="headline"><span :ref="update.headline" v-html="update.headline"></span><edit-icon :content="update.headline"></edit-icon></div>
              <span v-if="update.description">
                <modal :dialog="dialog" :data="update.description" @close="dialog = false"></modal>
              </span>
            </div>
          </v-card-title>
          <hr />
        </v-card>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import EditIcon from './EditIcon'
import Modal from '../ui/Modal'
import axios from 'axios'

export default {
  props: [],
  components: {
    'edit-icon': EditIcon,
    'modal': Modal
  },
  data() {
    return {
       updates: {
         en: [],
         es: []
       },
       dialog: false
    };
  },
  methods: {
   getUpdates() {
     var _this = this;

      axios
        .post(
          "https://query.cityoflewisville.com/v2/?webservice=Courts/Municipal Courts Site/GET Court Updates"
        )
        .then(function(_results) {
          if (typeof _results.data[0] != "undefined") {
           _this.updates.en = _results.data[0].filter(item => item.language == 'en')
           _this.updates.es = _results.data[0].filter(item => item.language == 'es')
           console.log('Updates: ', _this.updates)
          }
        })
        .catch(function(error) {
          console.error(error);
        });
   }
  },
  mounted() {
    this.getUpdates()
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
