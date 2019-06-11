<template>
  <v-flex lg7 pa-5>
    <v-img :src="images.stock"></v-img>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
        images: {
        stock: require('../../assets/court_judge.jpg')
      }
    }
  }
};
</script>

<style >
#judge-card {
  background-color: #ddd;
}
a {
  text-decoration: none;
}

iframe {
  width: -webkit-fill-available;
  height: 325px;
}
</style>
