<template>
  <v-flex lg5 pa-5>
    <img class="judge" :src="images.stock"/>
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
img.judge {
  width:100%;
}
  div.flex.lg7.pa-5 {
    text-align:right;
  }
@media only screen and (max-width:1264px) {
  div.flex.lg7.pa-5 {
    text-align:center;
  }
  img.judge {
  width:100%;
}
}
</style>
