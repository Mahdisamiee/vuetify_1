<template>
    <v-dialog max-width="600px">
        <v-btn slot="activator" flat class="success">Add new project</v-btn>
        <v-card>
            <v-card-title primary-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="pa-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" textarea v-model="info" prepend-icon="edit" :rules="inputRules"></v-textarea>
                    <!-- time picker -->
                    <v-menu offset-y>
                        <v-text-field :label="formattedDate" prepend-icon="date_range" slot="activator" :rules="inputRules"></v-text-field>
                        <v-date-picker v-model="due" :landscape="false" :reactive="false"></v-date-picker>
                    </v-menu>

                    <v-spacer></v-spacer>
                    <v-btn flat class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from "date-fns/format"
export default {
    data(){
        return{
            title:"",
            info:"",
            due: null,
            inputRules:[
                v => v.length >= 5 || "the minimum length is 5"
            ]
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate()){
                console.log(this.title+this.info)
            }
        }
    },
    computed:{
        formattedDate(){
            return this.due ? format(this.due, 'Do MMM YYYY') : 'Select a Day'
        }
    }
}
</script>

