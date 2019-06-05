<template>
  <v-container class="text-xs-left">
    <div v-if="$route.query.lang == 'es'">
      <h1 class="my-3"> Procedimientos de prueba </h1>
      <h2 class="my-3"> Presentando el caso </h2>
      <p> Como en todos los juicios penales, el Estado presentará su caso primero Llamando a testigos para que testifiquen en tu contra. Después de la acusación los testigos han Terminado de testificar, usted tiene el derecho de interrogar. En otras palabras, Puede hacer preguntas a los testigos sobre su testimonio o cualquier otro Hechos relevantes al caso. Sin embargo, no se puede discutir con el testigo. Su interrogatorio del testigo debe ser en forma de preguntas solamente. No puede decir su versión del incidente en este momento; Tener la oportunidad de hacerlo más tarde en el juicio.
      </p>

      <p> Después de que la fiscalía haya presentado su caso, puede presentar su caso. Tiene derecho a llamar a cualquier testigo que sepa algo sobre el incidente. El Estado tiene derecho a interrogar a cualquier testigo que usted llamada.
      </p>

      <p> Si así lo desea, puede declarar en su nombre, pero como acusado, no puede ser obligado a declarar. Es tu elección, y tu silencio no puede. ser usado en tu contra Si usted testifica, el Estado tiene derecho a interrogarte
      </p>

      <p> Una vez concluido todo el testimonio, ambas partes pueden presentar un argumento final. Esta es su oportunidad de decirle al Tribunal por qué cree que no está culpable de la ofensa acusada. El Estado tiene derecho a presentar el Primer y último argumento. Los argumentos finales pueden basarse únicamente en el Testimonio presentado durante el juicio.
      </p>
    </div>
    <div v-else>
      <h1 class="my-3">Trial Procedures</h1>
      <h2 class="my-3">Presenting The Case</h2>
      <p>
        As in all criminal trials, the State will present its case first by
        calling witnesses to testify against you. After prosecution witnesses have
        finished testifying, you have the right to cross-examine. In other words,
        you may ask the witnesses questions about their testimony or any other
        facts relevant to the case. You cannot, however, argue with the witness.
        Your cross-examination of the witness must be in the form of questions
        only. You may not tell your version of the incident at this time-you will
        have an opportunity to do so later in the trial.
      </p>

      <p>
        After the prosecution has presented its case, you may present your case.
        You have the right to call any witness who knows anything about the
        incident. The State has the right to cross-examine any witness that you
        call.
      </p>

      <p>
        If you so desire, you may testify in your behalf, but as a defendant, you
        cannot be compelled to testify. It is your choice, and your silence cannot
        be used against you. If you do testify, the State has the right to
        cross-examine you.
      </p>

      <p>
        After all testimony is concluded, both sides can make a closing argument.
        This is your opportunity to tell the Court why you think that you are not
        guilty of the offense charged. The State has the right to present the
        first and last arguments. The closing arguments may be based only on the
        testimony presented during the trial.
      </p>
    </div>
  </v-container>
</template>

<style scoped></style>
