<template>
<span v-if="$route.path.includes('/edit')">
    <v-icon class="edit-icon" small @click="toggleShowEditor">edit</v-icon>
    <div v-if="showEditor">
        <vue-editor v-model="content"></vue-editor>
        <v-btn color="green" class="updateButton" @click="updateContent(content, element)">Update</v-btn>
    </div>
    <!-- @TODO: Create event listener to tag targeted element, grab its ID or something,
                pass it as arg to edit-icon so it can then $emit/dispatch the correct element
                on which to update the text. 
                
                Create test DB to contain dynamic text elements for each of the update / events components.
                Have stored proc fetch incoming changes and update text, then send response and have respective
                components handle text update(s). May or may not need to have each text string with its corresponding
                html element.
     -->
</span>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
    components: {
        'vue-editor': VueEditor
    },
    props: ['content'],
    data() {
        return {
            showEditor: false
        }
    },
    methods: {
        toggleShowEditor() {
            return this.showEditor = !this.showEditor
        },
        updateContent(content, element) {

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
.updateButton {
    color:white;
}
</style>
