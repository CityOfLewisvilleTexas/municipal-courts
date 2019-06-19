<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
      <h1 class="pt-3">Código de vestimenta y decoro </h1>
      <v-container>
        <p>Es importante que todas las personas que ingresen a la sala del tribunal sigan estas políticas. De lo contrario, su caso podría ser reprogramado para una fecha posterior o la remoción del infractor de la sala del tribunal y su detención por desacato al tribunal.
        </p>

       <h2> Los siguientes artículos no están permitidos en la Corte </h2>
            <ul>
                <li> Sombreros o artículos de sombrerería de cualquier tipo (a menos que sea por razones religiosas o médicas) </li>
                <li> pies descalzos </li>
                <li> Alimentos, bebidas o chicles </li>
                <li> Camisetas sin mangas, cintura descubierta o camisas sin mangas </li>
                <li> Pantalones cortos de cualquier tipo </li>
                <li> Faldas que no se extienden más allá de las puntas de los dedos del usuario cuando están de pie </li>
                <li> Pantalones con lágrimas o agujeros </li>
                <li> Ropa interior expuesta o ropa interior </li>
                <li> Pantalones holgados o caídos </li>
                <li> Ropa o lenguaje obsceno, vulgar, despectivo o relacionado con drogas / narcóticos </li>
            </ul>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <h1 class="pt-3">Dress Code and Decorum</h1>
      <v-container>
        <p>
          It is important that all persons entering the courtroom follow these policies.
           Failure to do so could result in your case being rescheduled to a later date or removal of the violator from the courtroom and being held in contempt of court.
        </p>

       <h2>The following items are not allowed in Court</h2>
            <ul>
                <li>Hats or headwear of any kind (unless for religious or medical reasons)</li>
                <li>Bare feet</li>
                <li>Food, drinks, or gum</li>
                <li>Tank tops,  bare midriffs or sleeveless shirts</li>
                <li>Shorts of any kind</li>
                <li>Skirts that do not extend beyond the wearer's fingertips when standing</li>
                <li>Pants with tears or holes</li>
                <li>Exposed underwear or undergarments</li>
                <li>Baggy or sagging pants</li>
                <li>Clothing with obscene, vulgar, derogatory, or drug/narcotic related language or images</li>
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
