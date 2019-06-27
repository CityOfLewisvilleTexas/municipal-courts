<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
       <v-container>
       <h1 class="pt-3">Plan de Responsabilidad del Programa de Responsabilidad del Conductor</h1>
        <p> <b> P: ¿Cuál es el estado del Programa de Responsabilidad del Conductor (DRP)? </b> <br/>
        El Programa de Responsabilidad del Conductor ha sido revocado. A partir del 1 de septiembre de 2019, todas las suspensiones de recargo de DRP terminarán.
        </p>

        <p> <b> P: ¿Cómo me afecta esto? </b> <br/>
        Después del 1 de septiembre de 2019, no se aplicarán todas las evaluaciones de recargo y no se evaluarán recargos futuros. Usted seguirá siendo responsable de cualquier otra suspensión, multa o tarifa en su registro de conducir.
        </p>

        <p> <b> P: ¿Esto significa que ya no necesito hacer un pago de recargo? </b> <br/>
        El programa DRP se revoca el 1 de septiembre de 2019. Aún debe pagar sus
        Recargo de cuotas a plazos hasta esa fecha.
        </p>

        <p> <b> P: ¿Esto significa que no tengo que pagar mi tarifa o boleto de reintegro? </b> <br/>
        Esta derogación solo se aplica a los recargos y usted sigue siendo responsable de todas las demás obligaciones, incluidas las suspensiones, multas o tarifas no relacionadas con el recargo.
        </p>

        <p> <b> P: ¿Cuál es el estado de mi privilegio de conducir? </b> <br/>
        Para verificar el estado de su privilegio de conducir o pagar las tarifas de reinstalación, haga clic en texas.gov/driver. Necesitará su número de DL / ID, fecha de nacimiento y los últimos cuatro dígitos de su número de seguro social. Tenga en cuenta que los registros de los controladores se actualizan diariamente. La información en este sitio refleja el estado de su registro de conductor a partir de hoy. Cualquier condena adicional informada por un tribunal después del día de hoy podría causar acciones adicionales de cumplimiento o tarifas en su expediente. Le recomendamos que verifique su estado el 1 de septiembre de 2019.
        </p>

        <p> <b> P: ¿Cómo recupero mi licencia? </b> <br/>
        Si su licencia de Texas ha caducado menos de dos años, puede ser elegible para reemplazarla en línea, haga clic en texas.gov. Si su licencia de Texas ha caducado más de dos años o si nunca ha tenido una licencia, haga clic en <a href="https://www.dps.texas.gov/internetforms/Forms/DL-15.pdf">https://www.dps.texas.gov/internetforms/Forms/DL-15.pdf</a> para obtener una lista de los documentos necesarios. Si sus privilegios de conducir están actualmente suspendidos por recargos, no podrá completar este reemplazo hasta el 1 de septiembre de 2019.
        Si tiene que visitar una oficina de licencias de conducir, puede estar en línea antes de visitar la oficina. Para encontrar la oficina de licencias de conducir más cercana a usted, haga clic en <a href="https://www.dps.texas.gov/administration/driver licensing control/rolodex/search.asp">https://www.dps.texas.gov/administration/driver licensing control/rolodex/search.asp</a>.
        </p>

        <p> <b> P: ¿Recibiré un reembolso por los pagos que realicé antes del 1 de septiembre de 2019? </b> <br/>
        No, los pagos realizados en sus cuentas de recargo antes del 1 de septiembre de 2019 no se reembolsarán. Esos pagos fueron recolectados bajo las leyes vigentes en ese momento. Esto incluye el pago anticipado en las cuentas de recargo.
        </p>

        <p> <b> P: ¿Se eliminarán las suspensiones relacionadas con recargos anteriores de mi historial de manejo ahora que se ha derogado el DRP? </b> <br/>
        No. A partir del 1 de septiembre de 2019, se deroga el DRP, lo que significa que el programa ha finalizado. Cualquier suspensión que resulte de recargos mientras DRP estaba vigente permanecerá en su historial de manejo.
        </p>

        <p> <b> P: Recibí un aviso para pagar un recargo. ¿Sigue siendo válido? </b> <br/>
        Debe realizar pagos hasta el 1 de septiembre de 2019 para evitar la suspensión de sus privilegios de manejo.
        </p>

        <p> <b> P: ¿Qué sucede si omito mi plan de pagos? </b> <br/>
        Seguirá debiendo el recargo y permanecerá suspendido hasta el 1 de septiembre de 2019 a menos que cumpla con su acuerdo de pago.
        </p>

        <p> <b>P: Presenté una solicitud para los Programas de Indigencia de Responsabilidad del Conductor / Reducción de Incentivos. ¿Debo retirar mi solicitud o contactar a MSB para cancelar mi solicitud? </b> <br/>
        No se requiere ninguna acción de su parte.
        </p>

        <p> <b> P: Recibí un aviso de aviso / suspensión de puntos DRP, ¿afecta la derogación a mis puntos? </b> <br/>
        El Departamento de Seguridad Pública ya no evaluará los puntos de DRP por infracciones en movimiento. Cualquier punto previamente evaluado ha sido eliminado de su registro.
        </p>

        <p> <b> P: ¿Qué sucede si necesito información adicional sobre otras suspensiones, multas o tarifas? </b> <br/>
        Para obtener información más detallada, visite la página de Preguntas frecuentes del Departamento de Seguridad Pública haciendo clic en <a href="http://www.dps.texas.gov/DriverLicense/faqs/index.htm">http://www.dps.texas.gov/DriverLicense/faqs/index.htm</a>.
         </p>

        <p> <b> P: ¿Cómo me comunico con el Departamento si tengo preguntas adicionales? </b> <br/>
        Comuníquese con el Centro de Servicio al Cliente con Licencia de Conducir en <a href="mailto:DRPRepeal@dps.texas.gov">DRPRepeal@dps.texas.gov</a>.
        </p>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <v-container>
       <h1 class="pt-3">Driver Responsibility Program Wind Down Plan</h1>
        <!-- <h2 class="my-3">QUESTIONS ABOUT SURCHARGES: </h2> -->

        <p><b>Q: What is the status of the Driver Responsibility Program (DRP)?</b><br/>
        The Driver Responsibility Program has been repealed. Effective September 1, 2019, all DRP surcharge suspensions will end. 
        </p>

        <p><b>Q: How does this affect me?</b><br/> 
        After September 1, 2019 all surcharge assessments will be waived and no future surcharges will be assessed after. You will still be responsible for any other suspensions, fines or fees on your driving record. 
        </p>

        <p><b>Q: Does this mean I no longer need to make a surcharge payment?</b><br/> 
        The DRP program is repealed on September 1, 2019. You are still required to pay your 
        surcharge installment payments until that date. 
        </p>

        <p><b>Q: Does this mean I do not have to pay my reinstatement fee or ticket?</b><br/> 
        This repeal only applies to surcharges and you are still responsible for all other obligations including non-surcharge related suspensions, fines or fees. 
        </p>

        <p><b>Q: What is the status of my driving privilege?</b><br/> 
        To check the status of your driving privilege or pay reinstatement fees click texas.gov/driver. You will need your DL/ID number, date of birth, and the last four digits of your social security number. Please be aware driver records update on a daily basis. The information on this site reflects the status of your driver record as of today. Any additional convictions reported by a court after today could cause additional enforcement actions or fees on your record. We recommend you verify your status on September 1, 2019. 
        </p>

        <p><b>Q: How do I get my license back?</b><br/> 
        If your Texas license has been expired less than two years, you may be eligible to replace it online, click texas.gov. If your Texas license has been expired more than two years or you have never had a license, click <a href="https://www.dps.texas.gov/internetforms/Forms/DL-15.pdf">https://www.dps.texas.gov/internetforms/Forms/DL-15.pdf</a> for a list of required documents. If your driving privileges are currently suspended for surcharges you will not be able to complete this replacement until September 1, 2019. 
        If you have to visit a driver license office, you may be able to get in line online prior to visiting the office. To find the driver license office nearest you, click <a href="https://www.dps.texas.gov/administration/driver licensing control/rolodex/search.asp">https://www.dps.texas.gov/administration/driver licensing control/rolodex/search.asp</a>. 
        </p>

        <p><b>Q: Will I receive a refund for payments I made prior to September 1, 2019?</b><br/> 
        No, payments made on your surcharge accounts prior to September 1, 2019 will not be refunded. Those payments were collected under the laws in place at that time. This includes Advance Payment on surcharge accounts. 
        </p>

        <p><b>Q: Will previous surcharge related suspensions be deleted from my driving history now that DRP is repealed?</b><br/> 
        No. As of September 1, 2019 the DRP is repealed which means that the program has ended. Any suspensions that resulted from surcharges while DRP was in effect will remain on your driving history. 
        </p>

        <p><b>Q: I received a notice to pay a surcharge. Is this still valid?</b><br/> 
        You are required to make payments until September 1, 2019 to avoid having your driving privileges suspended. 
        </p>

        <p><b>Q: What happens if I defaulted on my installment plan?</b><br/> 
        You will still owe the surcharge and will remain suspended until September 1, 2019 unless you comply with your installment agreement. 
        </p>

        <p><b>Q: I submitted an application for the Driver Responsibility Indigency/Incentive Reduction Programs. Do I need to withdraw my application or contact MSB to cancel my request?</b><br/> 
        No action is required on your part. 
        </p>

        <p><b>Q: I received a DRP points advisory/suspension notice, does the repeal affect my points?</b><br/> 
        The Department of Public Safety will no longer assess DRP points for moving violations. Any previously assessed points have been removed from your record. 
        </p>

        <p><b>Q: What if I need additional information on other suspensions, fines or fees?</b><br/> 
        For more detailed information please visit the Department of Public Safety's Frequently Asked Questions page by clicking <a href="http://www.dps.texas.gov/DriverLicense/faqs/index.htm">http://www.dps.texas.gov/DriverLicense/faqs/index.htm</a>. 
         </p>

        <p><b>Q: How do I contact the Department if I have additional questions?</b><br/> 
        Contact the Driver License Customer Service Center at <a href="mailto:DRPRepeal@dps.texas.gov">DRPRepeal@dps.texas.gov</a>. 
        </p>

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

<style scoped>
    p {
        margin: 14px 0;
    }
</style>
