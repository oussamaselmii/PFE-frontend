<template>
  <div class="container">
  <v-app>
    <v-navigation-drawer v-model="sidebar" dense
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" app>
      <v-list>
        <v-list-item
          v-if="token"
          :key="logout"
          to="/log-out">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>logout</v-list-item-content>
        </v-list-item>
        <v-list-item v-else
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dense
      dark
      prominent
      max-height="96"
      
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"  app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/home" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn v-if="token"
          text
          
          :key="logout"
          to="/log-out"
          >
          <v-icon left dark>mdi-account</v-icon>
          logout
        </v-btn>
        <v-btn v-else
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        
      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data(){
    return {
      token:token,
      appTitle: 'vuetify',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/Home', icon: 'mdi-home' },
          { title: 'register', path: '/register', icon: 'mdi-account-plus' },
          { title: 'login', path: '/login', icon: 'mdi-account' }
          
     ]
    }
  },
};
</script>
<style>

</style>