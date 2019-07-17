<template>
  <v-container v-if="$route.query.lang == 'es'">
    <div class="py-3 text-xs-left">
      <h1 class="pt-3"> Pagar multas en el tribunal </h1>
     
         <p>Puedes pagar tus multas de varias maneras. Usted puede pagar:</p>
         <ol>
             <li> en línea </li>
             <li> Por correo a: Lewisville Municipal Court, P.O. Box 299002, Lewisville, TX 75029 </li>
             <li> En persona en 1197 W. Main St., Lewisville, TX 75067 </li>
             <li> Después de las horas en el buzón ubicado en 1197 W. Main Street (parte trasera del edificio) </li>
             <li> Por teléfono al: (800) 444-1187. Se aplicará una tarifa de procesamiento al utilizar el servicio en línea. sistema de pago. </li>
         </ol>
         <p> Nuestras horas de operación son: <br/>
         Lunes a jueves de 7:30 am a 5:30 pm
         Viernes 7:30 - 11:30 am
         </p>
    </div>
  </v-container>
  <v-container v-else>
    <div class="py-3 text-xs-left">
      <h1 class="pt-3">Pay Court Fines</h1>
     
        <p>You can pay your fines several ways. You may pay:</p>
        <ol>
            <li>Online</li>
            <li>By mail at: Lewisville Municipal Court, P.O. Box 299002, Lewisville, TX 75029</li>
            <li>In person at 1197 W. Main St., Lewisville, TX 75067</li>
            <li>After-hours in the drop box located at 1197 W. Main Street (rear of building)</li>
            <li>By phone at: (800) 444-1187. A processing fee will apply when using the online
        payment system.</li>
        </ol>
        <p>Our hours of operation are:<br/>
        Monday — Thursday 7:30am - 5:30pm
        Friday 7:30 - 11:30am
        </p>
    </div>
  </v-container>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {},
  watch: {}
};
</script>

<style></style>
