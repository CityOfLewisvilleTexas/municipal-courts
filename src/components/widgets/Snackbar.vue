<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
  >
    {{ snackbar.text }}
    <v-btn dark flat @click="snackbar.show = false">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: ["snackbar"]
};
</script>
