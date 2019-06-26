<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
       <v-container>
       <h1 class="pt-3"> Admitir exhibiciones </h1>

    <p> En el juicio, es posible que desee ofrecer pruebas en el registro en forma de fotos, videos u otros documentos. A menudo, las personas que representan se sienten frustradas cuando el fiscal se opone a las exhibiciones que se ofrecen. Sin saber cómo ofrecer exhibiciones en evidencia, el proceso puede parecer una carrera de obstáculos en lugar de un campo de juego nivelado.
        <br/> <br/>
Para obtener sus pruebas en evidencia:
    </p>

    <ol>
        <li class="mt-4">
        <b> Marque la exposición </b> <br/>
        Por ejemplo, "Exhibición de defensa 1", "Exhibición de defensa 2", etc. Facilitará el proceso en el momento de la prueba si "marca de antemano" sus exhibiciones.

        <li class="mt-4">
        <b> Oferta para mostrárselo al fiscal </b> <br/>
        La parte contraria debe poder ver lo que usted ofrece como evidencia y tener la oportunidad de "objetar" y explicar por qué no se debe permitir la evidencia. El motivo de la objeción debe basarse en una regla de evidencia, y no simplemente porque la evidencia te hace ver mal.
        </li>

        <li class="mt-4">
        <b> Muéstralo al testigo </b> <br/>
        Antes de que una prueba se convierta en "prueba" en el caso, un testigo debe explicar por qué la evidencia es relevante y por qué el juez / jurado debe confiar en ella para ayudar a tomar su decisión. Esto se llama un "predicado" o "fundamento" y se requiere para cualquier evidencia ofrecida en el juicio. Sin un predicado adecuado, la evidencia no es admitida.
        </li>

        <li class="mt-4">
        <b> Haga las preguntas "Predicadas" </b> <br/>
        Los diferentes tipos de exposiciones tienen diferentes preguntas de "predicado", pero el propósito de las preguntas es el mismo: establecer algunas bases para que el juez / jurado confíe en la evidencia ofrecida. Si la exhibición es una fotografía, el testigo explicará quién la tomó, cuándo fue tomada, si representa con precisión el tema de la fotografía tal como apareció el día en que se tomó y si se modificó de alguna manera. Si la exposición es una grabación, el testigo debe explicar quién la grabó, cuándo y cómo se grabó, quién o qué se representa en la grabación, y si se ha modificado de alguna manera.
        </li>

        <li class="mt-4">
        <b> Solicite a la Corte que admita la exposición </b> <br/>
        Una vez que se hayan tomado estos pasos, debe presentar la prueba como prueba ("Juez, ofrezco Prueba de Defensa 1 como prueba"). Recuerde que solo el juez decide qué exposiciones serán admitidas y cuáles no. Las partes pueden "ofrecer" sus pruebas como evidencia, pero se convierte en "prueba" solo cuando el juez decide admitirlo, y solo entonces puede ser considerado por el juez o el jurado.
        </li>
    </ol>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <v-container>
    <h1 class="pt-3">Admitting Exhibits</h1>

    <p>At trial, you may want to offer evidence into the record in the form of photos, video or other documents. 
        Often, people who represent become frustrated when the prosecutor objects to the exhibits being offered. 
        Without knowing how to offer exhibits into evidence, the process can feel like an obstacle course rather than a level playing field.
        <br/><br/>
        To get your exhibits into evidence:
    </p>  

    <ol>
        <li class="mt-4">
        <b>Mark the Exhibit</b><br/>
        For example, “Defense Exhibit 1”, “Defense Exhibit 2”, etc. It will make the process easier at the time of trial if you “pre-mark” your exhibits.

        <li class="mt-4">
        <b>Offer to Show It to the Prosecutor</b><br/>
        The opposing party must be able to see what you are offering into evidence and have a chance to “object” and explain why it should not be allowed into evidence. The reason for the objection must be based on a rule of evidence, and not merely because the evidence makes you look bad.
        </li>

        <li class="mt-4">
        <b>Show It to the Witness</b><br/>
        Before an exhibit becomes “proof” in the case, a witness must explain why the evidence is relevant and why the judge/jury should rely on it to help make their decision. This is called a “predicate” or “foundation” and is required for any evidence offered at trial.  Without a proper predicate, the evidence is not admitted. 
        </li>

        <li class="mt-4">
        <b>Ask the “Predicate” Questions</b><br/>
        Different types of exhibits have different “predicate” questions, but the purpose of the questions is the same: to establish some basis for the judge/jury to rely on the evidence being offered. If the exhibit is a photograph, the witness will explain who took it, when it was taken, whether it accurately depicts the subject matter of the photo as it appeared on the day it was taken and whether it has been altered in any way.  If the exhibit is a recording, the witness must explain who recorded it, when and how it was recorded, who or what is depicted in the recording, and whether it has been altered in any way.
        </li>

        <li class="mt-4">
        <b>Ask the Court to Admit the Exhibit</b><br/>
        Once these steps have been are taken, you must offer the exhibit into evidence (“Judge, I offer Defense Exhibit 1 into evidence”). Remember that only the judge decides which exhibits will be admitted and which ones will not.  The parties can “offer” their exhibits into evidence, but it becomes “proof” only when the judge decides to admit it, and only then can it be considered by the judge or the jury.  
        </li>
    </ol>

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
