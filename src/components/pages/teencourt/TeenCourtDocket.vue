<template>
  <v-container>
    <div
      class="py-3 text-xs-left"
      v-if="$route.query.lang == 'es'"
    >
      <h1 class="pt-3">Expediente del Tribunal Juvenil</h1>

      <p>
        ** NOTA: Debe comunicarse con Pam Everitt por correo electrónico
        <a href="peveritt@cityoflewisville.com"
          >peveritt@cityoflewisville.com</a
        >
        o por teléfono 972.219.3671 al menos 24 horas antes de la fecha de corte
        para reservar un lugar para un período de jurado.
      </p>
      <v-container>
        <table>
          <tr>
            <td>4 de diciembre</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>18 de diciembre</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>8 de enero</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>22 de enero</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>5 de febrero</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>19 de febrero</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>5 de marzo</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>19 de marzo</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>2 de abril</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>16 de abril</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>7 de mayo</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>21 de mayo-CANCELADO</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>4 de junio</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>18 de junio</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>9 de julio</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>23 de julio</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>6 de agosto</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>20 de agosto</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>3 de septiembre</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>17 de septiembre</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>1 de octubre</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>15 de octubre</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>5 de noviembre</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>19 de noviembre</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>3 de diciembre</td>
            <td>Montículo de flores</td>
          </tr>
          <tr>
            <td>17 de diciembre</td>
            <td>Montículo de flores</td>
          </tr>
        </table>
      </v-container>

      <p>
        Todas las sesiones de la corte comienzan a las 5:30 p.m. los martes por
        la noche.
      </p>

      <p>
        El uso de teléfonos celulares o dispositivos electrónicos está prohibido
        en la sala del tribunal.
      </p>

      <p>
        Puede trabajar tranquilamente en la tarea en el tribunal. La corte de
        adolescentes El coordinador lo despedirá cuando ya no sea necesario para
        formar parte de un jurado. Una noche cuenta como un período de jurado,
        incluso si se le pide que sirva en múltiples jurados
      </p>

      <p>
        Código de vestimenta estrictamente aplicado: solo vaqueros apropiados
        para la escuela, NO pantalones cortos, chancletas. Su ropa debe reflejar
        respeto por la corte. Las personas que no estén vestidas apropiadamente
        no podrán ingresar el tribunal
      </p>

      <p>
        <b> Ubicación del montículo de flores: </b> <br />
        Tribunal Municipal de Flower Mound <br />
        4150 Kirkpatrick Lane (en FM 1171 / Cross Timbers) <br />
        Montículo de flores, Texas 75028 <br />
        Sólo direcciones: 972.874.3370
      </p>

      <p></p>

      <p>
        <b> Ubicación de Lewisville: </b> <br />
        Lewisville Municipal Annex - Municipal Court <br />
        1197 W. Main Street (en Civic Circle) <br />
        Lewisville, Texas 75067 <br />
        972.219.3671
      </p>
    </div>
    <div class="py-3 text-xs-left" v-else>
      <h1 class="pt-3">Teen Court Docket</h1>

      <p>
        **NOTE: You must contact Pam Everitt via email at
        <a href="peveritt@cityoflewisville.com"
          >peveritt@cityoflewisville.com</a
        >
        or by phone 972.219.3671 at least 24 hours prior to court date to
        reserve a spot for a jury term.
      </p>
      <v-container>
        <table>
          <tr>
            <td>December 4</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>December 18</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>January 8</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>January 22</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>February 5</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>February 19</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>March 5</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>March 19</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>April 2</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>April 16</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>May 7</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>May 21-CANCELLED</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>June 4</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>June 18</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>July 9</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>July 23</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>August 6</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>August 20</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>September 3</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>September 17</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>October 1</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>October 15</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>November 5</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>November 19</td>
            <td>Lewisville</td>
          </tr>
          <tr>
            <td>December 3</td>
            <td>Flower Mound</td>
          </tr>
          <tr>
            <td>December 17</td>
            <td>Flower Mound</td>
          </tr>
        </table>
      </v-container>

      <p>All court sessions begin at 5:30 p.m. on Tuesday evenings.</p>

      <p>
        Use of cell phones or electronic devices is prohibited in the courtroom.
      </p>

      <p>
        You may work quietly on homework in the courtroom. The Teen Court
        Coordinator will dismiss you when no longer needed to serve on a jury.
        One evening counts as one jury term, even if asked to serve on multiple
        juries.
      </p>

      <p>
        Dress Code strictly enforced: Only school appropriate jeans, NO shorts,
        flip flops. Your clothing should reflect respect for the court.
        Individuals who are not properly dressed will not be allowed to enter
        the courtroom.
      </p>

      <p>
        <b>Flower Mound Location:</b><br />
        Flower Mound Municipal Court <br />
        4150 Kirkpatrick Lane (at FM 1171/Cross Timbers)<br />
        Flower Mound, Texas 75028<br />
        Directions only: 972.874.3370
      </p>

      <p></p>

      <p>
        <b>Lewisville Location:</b><br />
        Lewisville Municipal Annex – Municipal Court<br />
        1197 W. Main Street (at Civic Circle)<br />
        Lewisville, Texas 75067 <br />
        972.219.3671
      </p>
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
table {
  border: 1px solid #999;
}
tr {
  padding: 12px 24px;
  border: 1px solid #999;
}
td {
  padding: 12px 24px;
  border: 1px solid #999;
}
tr > td:first-child {
  text-align: right;
  font-weight: bold;
}
tr > td:nth-child(2) {
  text-align: left;
}
</style>
