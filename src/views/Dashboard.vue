<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard page</h1>

    <v-container class="my-5">

      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left>folder</v-icon>
            <span class="caption text-lowercase">by title</span>
          </v-btn>
          <span>Sort projects by title</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left>person</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          <span>sort project by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.id">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div >
              <v-chip small :class="`${project.status} white--text my-3`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      
    </v-container>

  </div>
</template>

<script>
  import db from "../fb.js"
  export default {
    data() {
      return {
        projects: []
      }
    },
    methods:{
      sortBy(prop){
        this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1)
      }
    },
    created(){
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        });
      })
    }
  }
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.v-chip.complete {
  background-color: #3cd1c2;
}
.v-chip.overdue {
  background-color: rgb(248, 100, 73);
}
.v-chip.ongoing {
  background-color:orange;
}
</style>
