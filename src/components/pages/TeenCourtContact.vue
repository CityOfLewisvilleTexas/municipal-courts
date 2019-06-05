<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
      <h1 class="pt-3">
        Información de contacto de la corte para adolescentes
      </h1>
      <v-container>
        <h2>LEWISVILLE / FLOWER MOUND TEENS TEHT</h2>

        <p>
          <b>
            Dirección postal: <br />
            Lewisville / Flower Mound Teen Court <br />
            CORREOS. Caja 299002 <br />
            Lewisville, TX 75029 <br />
            972.219.3671
          </b>
        </p>

        <p>
          Dirección de correo electrónico:
          <a href="mailto: peveritt@cityoflewisville.com"
            >peveritt@cityoflewisville.com</a
          >
        </p>

        <p>
          Consulte la fecha, la hora y la ubicación de
          <router-link to="/teen-court-docket?lang=es"
            >Teen Court Docket</router-link
          >
        </p>

        <p>
          <b>
            Juzgado Municipal de Flower Mound <br />
            4150 Kirkpatrick (Kirkpatrick & FM 1171) <br />
            Montículo de flores, Texas 75028 <br />
            972.874.3370
          </b>
        </p>

        <p>
          <b>
            Tribunal Municipal de Lewisville <br />
            1197 West Main Street <br />
            Lewisville, Texas 75029 <br />
            972.219.3671
          </b>
        </p>

        <p><b> Código de vestimenta </b></p>

        <p>
          Los participantes de Teen Court deben cumplir con el Código de
          vestimenta de Teen Court. Tú será enviado a casa sin crédito o
          posiblemente remitido a la Juez del Tribunal Municipal en caso de
          violación del código de vestimenta. Debajo están Ejemplos de
          vestimenta apropiada, con la máxima discreción dejada al Coordinador
          de la Corte Juvenil y / o al Juez Presidente.
        </p>
        <ul style="list-style-type:square">
          <li>No camisetas sin mangas</li>
          <li>Sin pantalones cortos</li>
          <li>Las faldas deben ser de longitud adecuada</li>
          <li>Ropa interior no expuesta de ningún tipo</li>
        </ul>
      </v-container>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <h1 class="pt-3">Teen Court Contact Information</h1>
      <v-container>
        <h2>LEWISVILLE/FLOWER MOUND TEEN COURT</h2>

        <p>
          <b
            >Mailing Address:<br />
            Lewisville/Flower Mound Teen Court<br />
            P.O. Box 299002 <br />
            Lewisville, TX 75029 <br />
            972.219.3671
          </b>
        </p>

        <p>
          E-Mail Address:
          <a href="mailto:peveritt@cityoflewisville.com"
            >peveritt@cityoflewisville.com</a
          >
        </p>

        <p>
          Please refer to Teen Court Docket for date, time, and location:
          <router-link to="/teen-court-docket?lang=en"
            >Teen Court Docket</router-link
          >
        </p>

        <p>
          <b
            >Flower Mound Municipal Court<br />
            4150 Kirkpatrick (Kirkpatrick & FM 1171)<br />
            Flower Mound, Texas 75028<br />
            972.874.3370
          </b>
        </p>

        <p>
          <b
            >Lewisville Municipal Court<br />
            1197 West Main Street<br />
            Lewisville, Texas 75029<br />
            972.219.3671
          </b>
        </p>

        <p><b>Dress Code</b></p>

        <p>
          Teen Court participants must abide by the Teen Court Dress Code. You
          will be sent home without credit or possibly remanded back to the
          Municipal Court Judge if in violation of the dress code. Below are
          examples of appropriate dress, with the ultimate discretion being left
          to the Teen Court Coordinator and/or the Presiding Judge.
        </p>
        <ul style="list-style-type:square">
          <li>No Tank Tops</li>
          <li>No Shorts</li>
          <li>Skirts must be appropriate length</li>
          <li>No Exposed Undergarments of Any Kind</li>
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
  methods: {},
  mounted() {},
  created() {}
};
</script>

<style></style>
