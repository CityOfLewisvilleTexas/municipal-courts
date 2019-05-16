<template>
<v-flex xs12 m12 lg5>
    <v-card class="court-updates">    
        <div class="headline updates">Court Updates</div>
            <v-spacer></v-spacer>
            <v-container>
                <v-card v-for="(update,index) in updates" :key="index" id="update" :class="'update' + ' ' + index">
                    <v-card-title primary-title>
                        <div text-xs-center text-md-left text-lg-left>
                            <span>{{update.date}}</span>
                            <div class="headline">{{update.slogan}}</div>
                        </div>
                    </v-card-title>
                <hr/>
            </v-card>
        </v-container>
    </v-card>
</v-flex>
</template>

<script>
export default {
    props: ['updates'],
    data() {
        return {

        }
    }
}
</script>


<style scoped>
.court-updates {
    border: none;
    box-shadow: none;
    background-color: inherit !important;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
}    
.headline.updates {
    padding-top: 20px;
    font-weight: 600;
    text-align: left;
    padding-left: 45px;
    font-size:2rem !important;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
}
.update {
    text-align: left;
    margin-left: 18px;
    margin-right: 22px;
    margin-bottom: 12px;
    border: none !important;
    box-shadow: none !important;
    background-color: inherit !important;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
}
</style>
