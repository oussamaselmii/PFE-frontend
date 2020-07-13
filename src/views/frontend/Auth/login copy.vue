<template>
<div>
<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="../../../login/aa.jpg" alt="login" class="login-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src="../../../login/logo.svg" alt="logo" class="logo">
              </div>
              <p class="login-card-description">Sign into your account</p>
              <form action="#!">
                  <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input v-model="user.email" type="email" name="email" id="email" class="form-control" placeholder="Email address" required>
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input v-model="user.password" type="password" name="password" id="password" class="form-control" placeholder="***********" required>
                  </div>
                  <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button" value="Login" @click="userLogin()" to="/login">
                </form>
                <a href="#!" class="forgot-password-link">Forgot password?</a>
                <p class="login-card-footer-text">Vous n'avez pas de Compte? <a href="#!" class="text-reset">Register here</a></p>
                <nav class="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</template>
<script>
import("../../../login/login.css");
import("../../../login/login.scss");


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
    userinfo(){
      axios.get('/user')
      .then(response => {
        let parsed = JSON.stringify(response.data.id);
        localStorage.setItem('userID ',parsed);
        console.log(response.data.id);
      })
    },
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
  mounted() {
    this.userinfo();
  },
  
  

}
</script>