<template>
<div>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
            <!-- Navbar Brand -->
            <a href="/" class="navbar-brand">
                <img src="http://localhost/PFE/back/backend/public/uploads/logos/logopng.png" alt="logo" width="150">
            </a>
        </div>
    </nav>
</header>
<div class="container">
    <div class="row py-5 mt-4 align-items-center">
        <!-- For Demo Purpose -->
        <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="http://localhost/PFE/back/backend/public/uploads/logos/logopng2.png" alt="" class="img-fluid mb-3 d-none d-md-block">
           <br><br><h1>Se Connecter</h1>
            <p class="font-italic text-muted mb-0 " >vous etes le bienvenu chez nous</p>
            
        </div>

        <!-- Registeration Form -->
        
        <div class="col-md-7 col-lg-6 ml-auto">
            <form @submit.prevent="userLogin()" >
              <h1 class="text-lg-center" >Login</h1>
                <div class="row">
                  
                    <!-- Email Address -->
                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input v-model="form.email" id="email" type="email" name="email" placeholder="Adresse Email" class="form-control bg-white border-left-0 border-md" required>
                    </div>

                    <!-- Password -->
                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input v-model="form.password" id="password" type="password" name="password" placeholder="Mot De Passe" class="form-control bg-white border-left-0 border-md" required>

                    </div>

                    
                    <!-- Submit Button -->
                    <div class="form-group col-lg-12 mx-auto mb-0">
                        <button  type="submit"  class="btn btn-danger btn-block py-2">
                            <span class="font-weight-bold">Se Connecter</span>
                        </button>
                    </div>

                    <!-- Divider Text -->
                    <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div class="border-bottom w-100 ml-5"></div>
                        <span class="px-2 small text-muted font-weight-bold text-muted">OU</span>
                        <div class="border-bottom w-100 mr-5"></div>
                    </div>

                    <!-- Social Login -->
                    <div class="form-group col-lg-12 mx-auto">
                        <a href="#" class="btn btn-primary btn-block py-2 btn-facebook">
                            <i class="fab fa-facebook-f mr-2"></i>
                            <span class="font-weight-bold">Continuer avec Facebook</span>
                        </a>
                        <a href="#" class="btn btn-google btn-block py-2 btn-twitter">
                            <i class="fab fa-google mr-2"></i>
                            <span class="font-weight-bold">Continuer avec Gmail</span>
                        </a>
                    </div>

                    <!-- Already Registered -->
                    <div class="text-center w-100">
                        <p class="text-muted font-weight-bold">Vous n'avez pas de Compte ? <a href="/register" class="text-primary ml-2">Crée Votre Compte</a></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
</div>
</template>

<script>

export default {
  data() {
    return {
      form:new Form({
        email:null,
        password:null
      }),
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
            axios.post('/login',this.form)
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

<style>
body {
  background: #FFFAFF;
  /** background: -webkit-linear-gradient(to right, #FFFFFF, #ef629f);
  background: linear-gradient(to right, #FFFFFF , #FFFAFF );
  min-height: 100vh; */
}
.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}
</style>