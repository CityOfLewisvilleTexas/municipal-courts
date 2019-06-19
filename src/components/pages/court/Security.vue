<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
    <h1 class="pt-3"> Seguridad del tribunal </h1>
      <v-container>
        <ul>
            <li> No se permiten armas de ningún tipo en la sala del tribunal. Esto incluye cuchillos de bolsillo / clip y cualquier tipo de spray de pimienta. </li>
            <li> Todas las personas que ingresan a la sala del tribunal están sujetas a revisión. </li>
            <li> Todas las bolsas, carteras, maletines, mochilas o artículos similares están sujetos a búsqueda. </li>
            <li> Se negará el acceso a la corte a las personas que se nieguen a someterse a una prueba de detección o que permitan una búsqueda de equipaje. </li>
            <li> Se tomarán en serio las bromas acerca de llevar armas a la corte o amenazar a cualquier juez u otro personal de la corte. </li>
            <li> Cualquier acto o comentario considerado una amenaza contra un juez o cualquier personal de la corte resultará en una expulsión inmediata de la corte y posibles cargos criminales. </li>
            <li> No se acerque al tribunal del juez a menos que se lo indiquen. </li>
            <li> No te apoyes en el banco del juez. </li>
            <li> Abstenerse de conversaciones o comentarios ruidosos durante los procedimientos judiciales. </li>
            <li> Gracias por su asistencia y cumplimiento. </li>
        </ul>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <h1 class="pt-3">Court Security</h1>
      <v-container>
        <ul>
            <li>No weapons of any type are allowed in the courtroom.  This includes pocket/clip knives and any type of pepper spray.</li>
            <li>All persons entering the courtroom are subject to screening.</li>
            <li>All bags, purses, briefcases, backpacks, or similar items are subject to search.</li>
            <li>Persons refusing to be screened or to allow a bag search will be denied access to the court.</li>
            <li>Jokes about carrying weapons into the court or threatening any Judge or other court personnel will be taken seriously.</li>
            <li>Any act or comment considered a threat against a Judge or any court personnel will result in immediate expulsion from the court and possible criminal charges.</li>
            <li>Do not approach the Judge's bench unless directed to do so. </li> 
            <li>Do not lean on the Judge's bench.</li>
            <li>Refrain from loud conversations or comments during the court proceedings.</li>
            <li>Thank you for your assistance and compliance.</li>
        </ul>
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

<style></style>
