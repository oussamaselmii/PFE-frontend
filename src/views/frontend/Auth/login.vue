<template>
<div class="card">
    <div class="card-body">
        
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1><center>User Login </center> </h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
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
            <v-flex  class="text-xs-center" mt-5 >
              <v-btn class="btn btn-primary" type="submit" @click="userLogin()" to="/login">Login</v-btn>
              <router-link class="ma-5" to="register" >Register</router-link>
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
        email:null,
        password:null
      }
    }
  },
  methods:{
        userLogin(){
            axios.post('/login', {
                email:this.user.email ,
                password:this.user.password ,
            })
            .then(response=> {
              iziToast.success({
                        title: 'Caution',
                        message: 'Login successfully',
              });
                
                localStorage.setItem('AToken',response.data.data.access_token);
                console.log(response);
                this.$router.push({name:'dashboard'})
            })
            .catch(error=> {
                console.log(error);
            });      
    }
  },
  
  

}
</script>