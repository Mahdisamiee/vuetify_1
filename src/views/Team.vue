<template>
<div class="team">
    <h1 class="subheading grey--text">Team page</h1>

    <v-container class="my-5">
        <!-- notice that if we want to use grid system (flex box) we sould use v-layout -->
        <v-layout row wrap> 
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                <v-card flat class="text-xs-center ma-3">
                    <div class="pa-4">
                        <v-avatar
                            size="100"
                            class="grey lighten-1"
                        >
                            <img :src="person.avatar">
                        </v-avatar>
                    </div>
                    <v-card-text>
                        <div class="subheading">{{ person.name }}</div>
                        <div class="grey--text">{{ person.role }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn flat color="grey">
                            <v-icon left small>message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
    
</div>
</template>

<script>
export default {
    data(){
        return{
            team: [
                { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
                { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
                { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
                { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
                { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
            ]
        }
    }
}
</script>