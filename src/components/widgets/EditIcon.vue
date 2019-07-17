<template>
<span v-if="$route.path.includes('/edit')">
    <v-icon class="edit-icon" small @click="toggleShowEditor">edit</v-icon>
    <div v-if="showEditor">
        <vue-editor v-model="contentState"></vue-editor>
        <v-btn :ref="content" color="green" class="updateButton" @click="updateContent(contentState)">Update</v-btn>
        <v-btn :ref="content" color="red" class="cancelButton" @click="toggleShowEditor">Cancel</v-btn>
    </div>
</span>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'

export default {
    components: {
        'vue-editor': VueEditor
    },
    props: ['content'],
    data() {
        return {
            showEditor: false,
            state: ''
        }
    },
    methods: {
        toggleShowEditor() {
            return this.showEditor = !this.showEditor
        },
        updateContent(content) {
            let _this = this

           axios
           .post("https://query.cityoflewisville.com/v2/?webservice=Courts/Municipal Courts Site/POST Update Dynamic Text", {
               OriginalState: _this.content,
               NewState: _this.state,
               Language: _this.$route.query.lang
           })
           .then(function() {
               _this.toggleShowEditor()
               window.location.reload()
           })
           .then(function() {
               _this.$emit('refresh')
           })

        }
    },
    computed: {
        contentState: {
            get: function() {
               return this.content
            },
            set: function(val) {
                //silly, but need to sanitize <p></p> tags, trim whitespace
                this.state = val.replace('<p>', '<span>').replace('</p>', '</span>').trim()
            }
        }
    },
    watch: {
        state: function() {
            console.log('state: ', this.state)
        },
        contentState: function() {
            console.log('contentState: ', this.contentState)
        }
    }
}
</script>

<style <style lang="css" scoped>
.edit-icon::before {
    content: ' ';
    white-space: pre;
}
.edit-icon {
  cursor:pointer;
  vertical-align:initial;
  color:green !important;
  display:inline-block;
}
.edit-icon::after {
    content: ' ';
    white-space: pre;
}
.updateButton,
.cancelButton {
    color:white;
}
</style>
