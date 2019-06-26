<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
       <v-container>
       <h1 class="pt-3"> Usted tiene muchos derechos como acusado en el Tribunal Municipal: </h1>

        <p> Se presume que todas las personas son inocentes hasta que se pruebe su culpabilidad en el juicio </p>
        <p> El Estado debe demostrar que usted es culpable de la ofensa que se le acusa de "más allá de una duda razonable" </p>
        <p> Usted tiene derecho a permanecer en silencio y negarse a testificar </p>
        <p> Usted tiene derecho a tener un juicio ante un juez o un jurado </p>
        <p> Usted tiene derecho a contratar a un abogado para que lo ayude con su caso </p>
        <p> No tiene derecho a tener un abogado gratuito designado por el tribunal para ayudarlo </p>
        <p> Si elige representarse a sí mismo, el tribunal no puede ayudarlo en la presentación de su caso </p>
        <p> Solo un abogado con licencia del Estado de Texas puede ayudarlo durante un juicio </p>

        <h1 class="pt-3"> En la versión de prueba, tiene muchos derechos, incluidos: </h1>
        
        <p> El derecho a recibir notificación de la queja a más tardar el día anterior a cualquier procedimiento en el caso </p>
        <p> El derecho a inspeccionar la queja antes del juicio, y hacer que se la lean en el juicio </p>
        <p> El derecho a escuchar todos los testimonios presentados en su contra </p>
        <p> El derecho a interrogar a los testigos que testifican en su contra </p>
        <p> El derecho a declarar en su propio nombre. Sin embargo, si elige no declarar, su decisión de permanecer en silencio no se puede usar en su contra para determinar su inocencia o culpabilidad. </p>
        <p> El derecho a llamar a testigos para testificar en su nombre en el juicio </p>
        <p> El derecho a solicitar que el tribunal emita una citación (una orden judicial) a cualquier testigo para garantizar su comparecencia en su juicio </p>

      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <v-container>
       <h1 class="pt-3">You have many rights as a defendant in Municipal Court:</h1>

        <p>All persons are presumed to be innocent until proven guilty at trial</p>
        <p>The State must prove you guilty of the offense you are charged with “beyond a reasonable doubt”</p>
        <p>You have the right to remain silent and refuse to testify</p>
        <p>You have the right to have a trial before a judge or a jury</p>
        <p>You have the right to hire a lawyer to help you with your case</p>
        <p>You do not have the right to have a free, court-appointed lawyer to help you</p>
        <p>If you choose to represent yourself, the court cannot assist you in the presentation of your case</p>
        <p>Only a lawyer licensed by the State of Texas can assist you during a trial</p>

        <h1 class="pt-3">At trial you have many rights including:</h1>
        
        <p>The right to have notice of the complaint not later than the day before any proceedings in the case</p>
        <p>The right to inspect the complaint before trial, and have it read to you at the trial</p>
        <p>The right to hear all testimony introduced against you</p>
        <p>The right to cross-examine witnesses who testify against you</p>
        <p>The right to testify on your own behalf. However, if you choose not to testify, your decision to remain silent cannot be used against you in determining your innocence or guilt.</p>
        <p>The right to call witnesses to testify on your behalf at the trial</p>
        <p>The right to request that the court issue a subpoena (a court order) to any witnesses to ensure their appearance at your trial</p>

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
