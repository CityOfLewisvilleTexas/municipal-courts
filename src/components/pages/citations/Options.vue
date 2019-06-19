<template>
  <v-container>
    <div class="py-3 text-xs-left" v-if="$route.query.lang == 'es'">
     <h1 class="pt-3">Responder a una cita</h1>
<v-container>
<h2> Opciones </h2>
<p>
Las infracciones de tráfico en el estado de Texas se consideran delitos menores de Clase C. Cuando te acusan de un delito, tienes tres opciones. Usted puede responder al cargo declarando "No culpable", "Culpable" o "Sin concurso".
</p>
<p>
Si se declara "No culpable", significa que quiere un juicio en el tribunal para impugnar los cargos formulados en su contra. Puede tener un juicio ante un juez o un jurado. Si se declara No culpable, se le programará una audiencia previa al juicio con el Fiscal antes de su fecha de juicio actual.
</p>
<p>
Si no desea impugnar el cargo, puede ser "Culpable" o "Sin Concurso" y solicitar una alternativa a dicho juicio como una Disposición Diferida o un Curso de Seguridad en la Conducción. También puede simplemente pagar la multa. Algunas infracciones que no se mueven pueden ser desestimadas al proporcionar documentación de cumplimiento, pero es posible que deba enviar esta documentación al juez.
</p>

<h2 class="pt-5 pb-3"> Fechas de aparición </h2>
<ul>
<li> Cita (Boleto): debe comparecer en el Tribunal Municipal de Lewisville o, de lo contrario, resolver su citación en o antes de la fecha de su citación. Una llamada telefónica no constituye una aparición </li>
<li> Liberado en Personal Bond: debe aparecer en la dirección y en la fecha programada en el documento que recibió cuando fue puesto en libertad </li>
<li> Prueba: se le notificará por correo su fecha y hora para que aparezca en su prueba </li>
</ul>

<h2 class="pt-5 pb-3"> Requisitos de apariencia </h2>
<ul>
<li> Puede elegir contratar a un abogado para que lo represente, pero no está obligado a </li>
<li> Se le pedirá que presente una identificación con foto cuando vaya a la corte (la identificación emitida por el estado o la licencia de conducir es aceptable). </li>
<li> Los abogados deberán enviar una carta de representación para representarlo en el juicio </li>
<li> Los menores (acusados ​​menores de 17 años en el momento de la ofensa) deben comparecer ante el juez en la corte con un padre o tutor legal </li>
<li> Los requisitos de <router-link :to="dresscode.es">código de vestimenta</router-link> se aplican a todas las apariencias de la corte </li>
</ul>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <h1 class="pt-3">Respond to a Citation</h1>
      <v-container>
        <h2>Options</h2>
        <p> 
        Traffic violations in the State of Texas are considered Class C misdemeanor offenses. When you are charged with a criminal offense, you have three options. You may respond to the charge by pleading “Not Guilty”, “Guilty” or “No Contest”.
        </p>
        <p>
        If you plead “Not Guilty” it means you want a trial in court to challenge the charge made against you. You may have a trial before a judge or a jury. If you plead Not Guilty, you will be scheduled for a Pre-Trial hearing with the Prosecutor before your actual trial date.
        </p>
        <p>
        If you do not want to challenge the charge, you may plea either “Guilty” or “No Contest” and request an alternative to a trial such as Deferred Disposition or a Driving Safety Course. You may also simply pay the fine. Some non-moving violation may dismissed through providing compliance documentation but you may need to present this documentation to the Judge.  
        </p>
        
        <h2 class="pt-5 pb-3">Appearance Dates</h2>
            <ul>
                <li>Citation (Ticket): You must appear at the Lewisville Municipal Court or otherwise resolve your citation on or before the date on your citation. A telephone call does not constitute an appearance  </li>
                <li>Released on Personal Bond: You must appear at the address and on the date scheduled on the document you were given when you were released from custody</li>
                <li>Trial: You will be notified by mail of your date and time to appear for your trial</li>
            </ul>
            
        <h2 class="pt-5 pb-3">Appearance Requirements</h2>
            <ul>
                <li>You may choose to hire an attorney to represent you, but you are not required to</li>
                <li>You will be required to present a photo ID when you come to court (state issued ID or Driver's License is acceptable).</li>
                <li>Attorneys will be required to submit a letter of representation to represent you at trial </li>
                <li>Juveniles (defendants under the age of 17 at the time of offense) must appear before the Judge in court with a parent or legal guardian</li>
                <li>The Court’s <router-link :to="dresscode.en">Dress Code</router-link> requirements apply to all court appearances </li>
            </ul>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        dresscode: {
        en: "/court-dress-code?lang=en",
        es: "/court-dress-code?lang=es"
      }
    };
  },
  methods: {}
};
</script>

<style></style>
