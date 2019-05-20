<template>
  <v-flex pa-4 mb-5 mt-5>
    <v-container mt-5>
        <div mt-5>&nbsp;</div>
      <span style="display:inline-block;font-size:22px;">
        <h1>I want to&nbsp;&nbsp;</h1>
      </span>
      <v-select
        :items="options"
        v-model="selectedOption"
        background-color="#E0B008"
        height="60"
        style="vertical-align:middle;margin-left:auto;margin-right:auto;display:inline-block;text-align:center;"
        label="select an option"
        color="white--text"
        solo
      >
      </v-select>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  props: ["options", "selectedOption"],
  data() {
    return {};
  }
};
</script>

<style>
a.v-list__tile.v-list__tile--link.theme--light {
  background-color: #e0b008;
  color: white;
  font-size: 1.5rem;
}
.v-list.theme--light {
  background-color: #e0b008;
}
.v-select__selection.v-select__selection--comma {
  font-size: 1.5rem;
  color: white;
}
.v-select__selections {
  font-size: 1.5rem !important;
  color: white !important;
}
div.v-input__slot > div.v-select__slot > label {
  font-size: 1.5rem !important;
  color: white;
}
div.v-input__append-inner > div > i {
  color: white !important;
}
</style>
