<template>
    <v-dialog v-model="dialog" max-width="600px">
        <v-btn slot="activator" flat class="success">Add new project</v-btn>
        <v-card>
            <v-card-title primary-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="pa-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" ></v-text-field>
                    <v-textarea label="Information" textarea v-model="info" prepend-icon="edit" ></v-textarea>
                    <!-- time picker -->
                    <v-menu offset-y>
                        <v-text-field :label="formattedDate" prepend-icon="date_range" slot="activator" ></v-text-field>
                        <v-date-picker v-model="due" :landscape="false" :reactive="false"></v-date-picker>
                    </v-menu>

                    <v-spacer></v-spacer>
                    <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from "date-fns/format"
import db from '../fb'

export default {
    data(){
        return{
            title:"",
            info:"",
            due: null,
            loading: false,
            dialog: false
        }
    },
    methods:{
        submit(){
            this.loading = true;
            const project = {
                title : this.title,
                content : this.info,
                due : this.due,
                person : "the nanova.",
                status : "ongoing"
            }

            db.collection('projects').add(project).then(()=>{
                this.loading = false;
                console.log("ok its done add to collection")
                this.dialog = false;
                this.$emit('Addedproject')
            })

        }
    },
    computed:{
        formattedDate(){
            return this.due ? format(this.due, 'Do MMM YYYY') : 'Select a Day'
        }
    }
}
</script>

