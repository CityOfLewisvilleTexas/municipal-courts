<template>
    <v-flex xs12 m12 lg10 id="judge-card">
        <v-flex xs12 sm6 m6 lg6 text-sm-left pa-5>
        <h1 text-sm-left>Meet your Judge, Honorable Gavel Judge</h1>
        <router-link to="/">
            <h2 text-sm-left>Learn about the court</h2>
        </router-link>
       </v-flex>
        <v-flex xs12 sm6 m6 lg6>
            <!-- add <media> here -->
        </v-flex>
    </v-flex>
</template>

<script>
export default {
    
}
</script>

<style>
#judge-card {
   background-color:#ddd;
}
a {
    text-decoration:none;
}
</style>
