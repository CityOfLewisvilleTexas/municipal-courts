<template>
  <v-flex xs12 m12 lg5 id="events">
    <v-card class="upcoming-events">
      <div class="headline events"><span v-if="$route.query.lang == 'es'">Próximos Eventos</span><span v-else>Upcoming Events</span></div>
      <v-spacer></v-spacer>
      <v-container>
        <v-card
          v-for="(event, index) in events"
          :key="index"
          id="event"
          :class="'event' + ' ' + index"
        >
          <v-card-title primary-title>
            <div text-xs-center text-md-left text-lg-left>
              <span
                class="date"
                style="display:inline-block;vertical-align:middle;text-align:center;"
              >
                {{ event.date.substr(0, event.date.indexOf(" ")) }}
                <br />
                <b>{{ event.date.substr(event.date.indexOf(" ")) }}</b>
              </span>
              <div v-if="$route.query.lang == 'es'" style="display:inline-block" class="headline">
                {{ event.event.es }}
              </div>
              <div v-else style="display:inline-block" class="headline">
                {{ event.event.en }}
              </div>
            </div>
          </v-card-title>
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
      events: [
        {
          date: "Jan 30",
          event: {
            en:"Community Board Meeting",
            es: "Reunión del Consejo de la Comunidad"
          }
        },
        {
          date: "Feb 1",
          event: {
            en:"Family Neighborhood Potluck",
            es: "Potluck vecindario"
          }
        },
        {
          date: "Feb 12",
          event: {
            en:"Court Closed for Lincoln's Birthday",
            es: "Corte cerrada por el cumpleaños de Lincoln"
          }
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.upcoming-events {
  border: none;
  box-shadow: none;
  background-color: inherit !important;
  font-family: "Roboto", Arial, Helvetica, sans-serif !important;
}
.headline.events {
  padding-top: 20px;
  font-weight: 600;
  text-align: left;
  padding-left: 45px;
  font-size: 2rem !important;
  font-family: "Roboto", Arial, Helvetica, sans-serif !important;
}
.event {
  text-align: left;
  margin-left: 18px;
  margin-right: 22px;
  margin-bottom: 12px;
  border: none !important;
  box-shadow: none !important;
  background-color: inherit !important;
  font-family: "Roboto", Arial, Helvetica, sans-serif !important;
}
.date {
  margin-right: 25px;
  font-size: 1.7rem;
  background-color: #e0b008;
  width: 65px;
}
</style>
