<template>
<div class="card">
<div class="card-body">
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1><center>Register</center></h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field v-model="user.name"
                name="name"
                label="name"
                id="name"
                type="text"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field v-model="user.email"
                name="email"
                label="Email"
                id="email"
                type="email"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field v-model="user.password"
                name="password"
                label="Password"
                id="password"
                type="password"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field 
                name="confirmPassword"
                label="confirmPassword"
                id="confirmPassword"
                type="password"
                required></v-text-field>
            </v-flex>
              
            <v-flex class="text-xs-center" mt-5>
              <v-btn class="btn btn-primary" to="/register" type="submit" @click="userRegister()" >
                  register</v-btn>
                  <router-link class="ma-5" to="/login" >Login</router-link>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user:{
        name:null,
        email:null,
        password:null
      }
    }
  },
  methods:{
        userRegister(){
            axios.post('/register', {
                name:this.user.name ,
                email:this.user.email ,
                password:this.user.password ,
            })
            .then(function (response) {
                
                localStorage.setItem('AToken',response.data.access_token);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });      
    }
  },

}
</script>

<style>

</style>