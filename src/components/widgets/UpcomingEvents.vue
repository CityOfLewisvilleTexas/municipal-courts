<template>
  <v-flex xs12 m12 lg5 id="events">
    <v-card class="upcoming-events">
      <div class="headline events"><span v-if="$route.query.lang == 'es'">Próximos Eventos</span><span v-else>Upcoming Events</span></div>
      <v-spacer></v-spacer>
      <v-container v-if="$route.query.lang == 'es'">
        <v-card
          v-for="(event, index) in events.es"
          :key="index"
          id="event"
          :class="'event' + ' ' + index"
        >
          <v-card-title primary-title>
            <div text-xs-center text-md-left text-lg-left>
               <edit-icon :content="event.date"></edit-icon>
              <span
                class="date"
                style="display:inline-block;vertical-align:middle;text-align:center;"
              >
              &nbsp;{{ event.date.replace(/(<[^>]*>)/g, ' ').trim().substr(0,3) }}
                <br/>
                <b>{{ event.date.replace(/[^0-9]+/g, "") }}</b>
              </span>
              <div style="display:inline-block" class="headline">
                <span v-html="event.headline"></span>
                <edit-icon :content="event.headline"></edit-icon>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
      <v-container v-else>
        <v-card
          v-for="(event, index) in events.en"
          :key="index"
          id="event"
          :class="'event' + ' ' + index"
        >
          <v-card-title primary-title>
            <div text-xs-center text-md-left text-lg-left>
               <edit-icon :content="event.date"></edit-icon>
              <span
                class="date"
                style="display:inline-block;vertical-align:middle;text-align:center;"
              >
              &nbsp;{{ event.date.replace(/(<[^>]*>)/g, ' ').trim().substr(0,3) }}
                <br/>
                <b>{{ event.date.replace(/[^0-9]+/g, "") }}</b>
              </span>
              <div style="display:inline-block" class="headline">
                 <span v-html="event.headline"></span>
                <edit-icon :content="event.headline"></edit-icon>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import EditIcon from './EditIcon'
import axios from 'axios'

export default {
  props: [],
  components: {
    'edit-icon': EditIcon
  },
  data() {
    return {
      events: {
         en: [],
         es: []
       },
    };
  },
  methods: {
    getEvents() {
     var _this = this;

      axios
        .post(
          "https://query.cityoflewisville.com/v2/?webservice=Courts/Municipal Courts Site/GET Upcoming Events"
        )
        .then(function(_results) {
          if (typeof _results.data[0] != "undefined") {
           _this.events.en = _results.data[0].filter(item => item.language == 'en')
           _this.events.es = _results.data[0].filter(item => item.language == 'es')
           console.log('Events: ', _this.events)
          }
        })
        .catch(function(error) {
          console.error(error);
        });
   },
   cleanMarkup(content) {
        return content.replace(/(<[^>]*>)/g, ' ')
    }
  },
  mounted() {
    this.getEvents()
  }
};
</script>

<style scoped>
.upcoming-events {
  border: none;
  box-shadow: none;
  background-color: inherit !important;
  font-family: "Montserrat", Arial, Helvetica, sans-serif !important;
}
.headline.events {
  padding-top: 20px;
  font-weight: 600;
  text-align: left;
  padding-left: 45px;
  font-size: 2rem !important;
  font-family: "Montserrat", Arial, Helvetica, sans-serif !important;
}
.event {
  text-align: left;
  margin-left: 18px;
  margin-right: 22px;
  margin-bottom: 12px;
  border: none !important;
  box-shadow: none !important;
  background-color: inherit !important;
  font-family: "Montserrat", Arial, Helvetica, sans-serif !important;
}
.date {
  margin-right: 25px;
  font-size: 1.7rem;
  background-color: #54258a;
  width: 65px;
  color:white;
}
</style>
