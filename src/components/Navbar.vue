<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-text class="text-uppercase grey--text title text-truncate">
                <span class="font-weight-light">New</span>
                <span>Compnay</span>
            </v-toolbar-text>
            <v-spacer></v-spacer>

            <!-- Dropdown Navbar -->
            <v-menu offset-y>
                <v-btn slot="activator" flat color="grey">
                    <v-icon left>expand_more</v-icon>
                    <span>Menu</span>
                </v-btn>
                <v-list>
                    <v-list-tile avatar v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-action>
                            <v-icon class="grey--text">{{ link.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-btn flat color="grey darken-2">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" class="primary" app >
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/mainavatar.png">
                    </v-avatar>
                    <p class="subheading white--text mt-1">
                        Mr.Nano
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile avatar v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from "./Popup.vue"

export default {
    components:{ Popup,},
    data(){
        return{
            drawer:false,
            links:[
                { icon:'dashboard' , text:'Dashboard' , route:'/'},
                { icon:'folder' , text:'My Project' , route:'/projects'},
                { icon:'person' , text:'Team' , route:'/team'}
            ]
        }
    }
}
</script>
