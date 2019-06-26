<template>
  <v-flex lg5 px-5 pt-5 text-sm-left>
    <h1 text-sm-left><span v-if="$route.query.lang == 'es'">Conozca a su juez, el honorable Brian Holman</span><span v-else>Meet your Judge, The Honorable Brian Holman</span></h1>
    <router-link :to="'/?lang=' + $route.query.lang">
      <h2 text-sm-left>
        <span v-if="$route.query.lang == 'es'">
        <router-link :to="judge.path + '?lang=es'">Aprende más</router-link>
        </span>
        <span v-else>
        <router-link :to="judge.path  + '?lang=en'">Learn more</router-link>
        </span></h2>
    </router-link>
  </v-flex>
</template>

<script>
import MeetYourJudge from '../widgets/MeetYourJudge'

export default {
  data() {
    return {
      judge: {
          title: "Meet Your Judge",
          component: "MeetYourJudge",
          path: "/meet-your-judge"
        },
    }
  }
};
</script>

<style scoped>
#judge-card {
  background-color: #ddd;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
iframe {
  width: -webkit-fill-available;
  height: 325px;
}
</style>
