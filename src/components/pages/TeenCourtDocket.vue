<template>
  <v-container>
    <div class="py-3 text-xs-left">
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
  methods: {},
  mounted() {},
  created() {}
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
