<template>
        <v-dialog
        v-model="dialog"
        width="800"
        >
        <template v-slot:activator="{ on }">
            <span
            style="color:#009099; font-size:larger;cursor: pointer;"
            v-on="on"
            >
            <span v-if="$route.query.lang == 'es'">
                Aprende más
            </span>
            <span v-else>
                Learn more
            </span>
        </span>
         <edit-icon :content="data"></edit-icon>
        </template>

        <v-card>
            <!-- <v-card-text v-if="data.match(/<[^>]*>/g).length > 0"></v-card-text>
            <v-card-text v-else>{{data}}</v-card-text> -->
            <v-card-text v-if="data.match(/<[^>]*>/g).length > 0" v-html="noSpanData"></v-card-text>
            <v-card-text v-else v-html="data"></v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                flat
                @click="dialog = false"
            >
                OK
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
</template>

<script>
import EditIcon from '../widgets/EditIcon'

export default {
    components: {
        'edit-icon': EditIcon
    },
    props: ['data', 'dialog'],
    data() {
        return {

        }
    },
    computed: {
        noSpanData() {
            //don't ask
            return this.data.replace('<span>', '').replace('</span>', '')
        }
    }
}
</script>
