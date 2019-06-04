<template>
  <v-container>
    <div
      id="court-fines"
      class="py-5 text-xs-left"
      v-if="$router.history.current.query.lang == 'es'"
    >
      <h1 class="py-3">Pagar multas en el tribunal</h1>
      <h2 class="py-3">
        Hay varias formas de pagar las multas de los tribunales municipales.
        Para pagar las multas de la corte, seleccione una de las siguientes
        opciones:
      </h2>

      <ol>
        <li @click="showPayOnline = !showPayOnline" id="showPayOnline">
          Pagar las multas del Tribunal Municipal en línea
        </li>
        <li>
          Pague las multas del Tribunal Municipal por correo, envíelas al
          Tribunal Municipal de Lewisville, P.O. Box 299002, Lewisville, TX
          75029
        </li>
        <li>
          Pague las multas del Tribunal Municipal en persona en
          <a
            href="https://www.google.com/maps/place/1197+W+Main+St,+Lewisville,+TX+75067/@33.0429208,-97.0233096 , 17z / data =! 3m1! 4b1! 4m2! 3m1! 1s0x864c2debdde1760b: 0xaba846a4f21b12df? Hl = es "
          >
            1197 W. Main St., Lewisville, TX 75067
          </a>
        </li>
        <li>
          Pague las multas del Tribunal Municipal en el buzón que se encuentra
          fuera del horario de atención ubicado en 1197 W. Main Street
        </li>
        <li>
          Pague las multas del Tribunal Municipal por teléfono llamando al
          1.800.444.1187. Se aplicará una tarifa de procesamiento al utilizar el
          sistema de pago en línea.
        </li>
      </ol>

      <h2 class="py-4">
        El horario de atención es el siguiente: lunes y jueves; 7:30 a.m. a 5:30
        p.m. / viernes 7:30 a 11:30 a.m.
      </h2>
    </div>
    <div id="court-fines" class="py-5 text-xs-left" v-else>
      <h1 class="py-3">Pay Court Fines</h1>
      <h2 class="py-3">
        There are several ways to pay municipal court fines. In order to pay
        your court fines please select from the options below:
      </h2>

      <ol>
        <li @click="showPayOnline = !showPayOnline" id="showPayOnline">
          Pay Municipal Court fines Online
        </li>
        <li>
          Pay Municipal Court fines by mail, mail to Lewisville Municipal Court,
          P.O. Box 299002, Lewisville, TX 75029
        </li>
        <li>
          Pay Municipal Court fines in person at
          <a
            href="https://www.google.com/maps/place/1197+W+Main+St,+Lewisville,+TX+75067/@33.0429208,-97.0233096,17z/data=!3m1!4b1!4m2!3m1!1s0x864c2debdde1760b:0xaba846a4f21b12df?hl=en"
            >1197 W. Main St., Lewisville, TX 75067</a
          >
        </li>
        <li>
          Pay Municipal Court fines at after hours drop box located at 1197 W.
          Main Street
        </li>
        <li>
          Pay Municipal Court fines by phone by calling 1.800.444.1187. A
          processing fee will apply when using the online payment system.
        </li>
      </ol>

      <h2 class="py-4">
        The hours of operation are as follows: Monday&mdash;Thursday:7:30am -
        5:30pm / Friday 7:30 - 11:30am
      </h2>
    </div>
    <div
      id="pay-online"
      v-if="showPayOnline && $router.history.current.query.lang != 'es'"
      class="text-xs-left"
    >
      <h1 class="py-3">Pay Municipal Court Fines Online</h1>
      <p>
        You must agree to the following terms to use this online payment system.
        Please read the following information carefully.
      </p>
      <p>
        Failure to resolve court matters may result in additional fees, warrant
        of arrest, suspension and/or denial of renewal of your driver's license
        and vehicle registration.
      </p>
      <p>
        Important information when paying for active arrest warrants:
      </p>
      <p>
        You may pay an active arrest warrant using this online payment system
        but you remain subject to arrest until the court has accepted your
        payment as a plea of no contest and processed the case for final
        disposition. This may take up to two (2) business days. To ensure the
        deactivation of an arrest warrant immediately, you must appear at the
        municipal court to pay your warrant. If you or a family member are
        currently under arrest, do not use this payment system.
      </p>

      <h2>Payment information for other cases:</h2>

      <p>
        Fines may be paid over the Internet, 24 hours a day, using Visa or
        MasterCard credit/debit card and knowing the CVV access code printed on
        the back of the card. Only payments for the FULL amount due will be
        accepted using the on-line payment service. A single violation can be
        paid on a citation with multiple violations, but paying one violation
        does not excuse your appearance requirements for any remaining
        violations. An on-line payment will be processed as a plea of "no
        contest". You will be found guilty of the offense charged on your
        citation which will result in a final conviction in your case. If
        applicable, such convictions will be reported to the Texas Department of
        Public Safety or to the state from which your driver’s license has been
        issued for inclusion on your driving record. By paying on-line, you are
        also waiving your right to a trial and any right to appeal the
        conviction. If you have any questions about the effect of your plea,
        consult legal counsel before proceeding.
      </p>

      <ul class="my-5">
        <li class="my-2">
          <b
            >You cannot use this service to pay a Deferred Disposition fee or
            Driving Safety Course fee.</b
          >
        </li>
        <li class="my-2">
          <b>You cannot use this service to make a partial payment.</b>
        </li>
        <li class="my-2">
          <b>You cannot use this service to pay a fine for a person in jail.</b>
        </li>
        <li class="my-2">
          <b>You cannot use this service to pay cash bond.</b>
        </li>
        <li class="my-2">
          <b>You cannot use this service to pay any dismissal fee.</b>
        </li>
        <li class="my-2">
          <b
            >Voluntary online payment will result in a conviction and will be
            reported to the Texas Department of Public Safety and forfeits any
            right to request Driving Safety Class or Deferred Disposition for
            possible dismissal of your citation.</b
          >
        </li>
      </ul>
      <p>
        Alcohol or Tobacco Violations - There are age restrictions for certain
        alcohol (under 21) and tobacco (under 18) violations. You may not pay
        online but must appear before the judge. Contact the court for more
        information at 972.219.3436.
      </p>

      <p>
        Juveniles – State law requires that juveniles (16 or younger) make a
        personal appearance with a parent or legal guardian before the judge.
      </p>

      <p>
        By clicking "I Agree", you acknowledge that you have read the terms of
        the on-line payment system and you agree to these terms.
      </p>

      <p>
        <a
          href="https://www.trafficpayment.com/SearchByInvoiceInfo.aspx?csdId=716"
          >I agree</a
        >
      </p>

      <p><router-link :to="home.en">I disagree</router-link></p>
    </div>
    <div
      id="pay-online"
      v-if="showPayOnline && $router.history.current.query.lang == 'es'"
      class="text-xs-left"
    >
      <h1 class="py-3">Pago de multas de la corte municipal en línea</h1>
      <p>
        Debe aceptar los siguientes términos para utilizar este sistema de pago
        en línea. Por favor lea la siguiente información cuidadosamente.
      </p>
      <p>
        Si no se resuelven los asuntos judiciales, se pueden cobrar tarifas
        adicionales, una orden de arresto, una suspensión y / o una denegación
        de renovación de su licencia de conducir y el registro del vehículo.
      </p>
      <p>
        Información importante al pagar las órdenes de detención activas:
      </p>
      <p>
        Puede pagar una orden de arresto activa utilizando este sistema de pago
        en línea, pero seguirá sujeto a arresto hasta que el tribunal haya
        aceptado su pago como una declaración de no disputa y haya procesado el
        caso para su disposición final. Esto puede tomar hasta dos (2) días
        hábiles. Para garantizar la desactivación de una orden de arresto de
        inmediato, debe comparecer ante el tribunal municipal para pagar su
        orden. Si usted o un miembro de su familia están actualmente bajo
        arresto, no use este sistema de pago.
      </p>

      <h2>Información de pago para otros casos:</h2>

      <p>
        Las multas pueden pagarse a través de Internet, las 24 horas del día,
        usando la tarjeta de crédito / débito Visa o MasterCard y conociendo el
        código de acceso CVV impreso en el reverso de la tarjeta. Solo se
        aceptarán pagos por el monto COMPLETO a través del servicio de pago en
        línea. Se puede pagar una sola infracción en una citación con
        infracciones múltiples, pero pagar una infracción no justifica sus
        requisitos de comparecencia para las infracciones restantes. Un pago en
        línea se procesará como una declaración de "no concurso". Usted será
        declarado culpable de la infracción que se le imputa en su citación, lo
        que resultará en una condena definitiva en su caso. Si corresponde,
        dichas condenas se informarán al Departamento de Seguridad Pública de
        Texas o al estado desde el cual se emitió su licencia de conducir para
        su inclusión en su registro de conducir. Al pagar en línea, también está
        renunciando a su derecho a un juicio y cualquier derecho a apelar la
        condena. Si tiene alguna pregunta sobre el efecto de su declaración de
        culpabilidad, consulte a un asesor legal antes de continuar.
      </p>

      <ul class="my-5">
        <li class="my-2">
          <b>
            No puede usar este servicio para pagar una tarifa de Disposición
            Diferida o una tarifa del Curso de Seguridad en la Conducción.
          </b>
        </li>
        <li class="my-2">
          <b>
            No puede utilizar este servicio para realizar un pago parcial.
          </b>
        </li>
        <li class="my-2">
          <b>
            No puede usar este servicio para pagar una multa a una persona en la
            cárcel.
          </b>
        </li>
        <li class="my-2">
          <b> No puede utilizar este servicio para pagar bonos en efectivo. </b>
        </li>
        <li class="my-2">
          <b>
            No puede utilizar este servicio para pagar ninguna tarifa de
            despido.
          </b>
        </li>
        <li class="my-2">
          <b>
            El pago voluntario en línea resultará en una condena y se informará
            al Departamento de Seguridad Pública de Texas y perderá cualquier
            derecho a solicitar la Clase de Seguridad en la Conducción o la
            Disposición Diferida para un posible despido de su citación .
          </b>
        </li>
      </ul>
      <p>
        Violaciones de alcohol o tabaco: existen restricciones de edad para
        ciertas infracciones relacionadas con el alcohol (menores de 21 años) y
        el tabaco (menores de 18 años). No puede pagar en línea, pero debe
        comparecer ante el juez. Póngase en contacto con el tribunal para
        obtener más información al 972.219.3436.
      </p>

      <p>
        Jóvenes: la ley estatal requiere que los menores (16 años o menos) hagan
        una aparición personal con un padre o tutor legal ante el juez.
      </p>

      <p>
        Al hacer clic en "Acepto", usted reconoce que ha leído los términos del
        sistema de pago en línea y está de acuerdo con estos términos.
      </p>

      <p>
        <a
          href="https://www.trafficpayment.com/SearchByInvoiceInfo.aspx?csdId=716"
        >
          Acepto
        </a>
      </p>

      <p><router-link :to="home.es"> No estoy de acuerdo </router-link></p>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showPayOnline: false,
      home: {
        en: "/?lang=en",
        es: "/?lang=es"
      }
    };
  },
  methods: {},
  mounted() {},
  created() {}
};
</script>

<style>
ol,
ul,
p {
  font-size: 1.4rem;
}
#showPayOnline {
  color: #1855b0;
  text-decoration: underline;
  cursor: pointer;
}
</style>
