<template>
  <div>
      <div class="row py-5 p-4 bg-white rounded shadow-sm">
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">informations du livraison</div>
          <div class="p-4">
            <form @submit.prevent="checkout_save()" >

                <!--Grid row-->
                <div class="row">

                  <!--Grid column-->
                  <div class="col-md-6 mb-4">

                    <!--firstName-->
                    <label for="firstName" class="">Nom</label>
                    <input v-model="form.last_name" type="text" id="lastName" class="form-control" required>
                    <div class="invalid-feedback">
                      saisi votre nom !!!
                    </div>

                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-md-6 mb-2">

                    <!--lastName-->
                    <label for="firstName" class="">Prenom</label>
                    <input v-model="form.first_name" type="text" id="lastName" class="form-control" required>
                    <div class="invalid-feedback">
                      saisi votre prénom !!!
                    </div>

                  </div>
                  <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--email-->
                <label for="email" class="">Email </label>
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input v-model="form.email" type="email" class="form-control py-0" placeholder="youremail@example.com" aria-describedby="basic-addon1" required>
                  <div class="invalid-feedback">
                      ecrire vote email !!!
                    </div>
                </div>

                <!--email-->
                <label for="number" class="">numero du telephone </label>
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">+216</span>
                  </div>
                  <input v-model="form.phone_number" type="tel"  id="phone" name="phone"  class="form-control py-0"  aria-describedby="basic-addon1" required >
                  <div class="invalid-feedback">
                      champ obligatoire.
                    </div>
                </div>

                <!--address-->
                <label for="address" class="">Addresse</label>
                <input v-model="form.address" type="text" id="address" class="form-control mb-4" placeholder="1234 tunis" required>
                <div class="invalid-feedback">
                      Svp votre adresse.
                    </div>

                <!--address-2-->
                <label for="address-2" class="">Address 2 (optional)</label>
                <input v-model="form.address_2" type="text" id="address-2" class="form-control mb-4" placeholder="1234 tunis2">

                <!--Grid row-->
                <div class="row">

                  <!--Grid column-->
                  <div class="col-lg-4 col-md-12 mb-4">

                    <label for="country">Gouvernorat</label>
                    <select v-model="form.gouvernorat" class="custom-select d-block w-100" id="region" required>
                      <option value="">Choose...</option>
                      <option>Tunis</option>
                      <option>Ben Arous</option>
                      <option>Manouba</option>
                      <option>Ariana</option>
                      <option>Bizerte</option>
                      <option>Beja</option>
                      <option>Jendouba</option>
                      <option>Nabeul</option>
                      <option>Gabes</option>
                      <option>Gafsa</option>
                      <option>Kairouan</option>
                      <option>kasserine</option>
                      <option>Kébili</option>
                      <option>Le Kef</option>
                      <option>Mahdia</option>
                      <option>Médinin</option>
                      <option>Monastir</option>
                      <option>Sidi Bouzid</option>
                      <option>Sfax</option>
                      <option>Siliana</option>
                      <option>Sousse</option>
                      <option>Tataouine</option>
                      <option>Touzeur</option>
                      <option>Zaghouan</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>

                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-lg-4 col-md-6 mb-4">

                    <label for="state">ville</label>
                    <input v-model="form.city" type="text" id="address" class="form-control mb-4" placeholder="tunis">
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>

                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-lg-4 col-md-6 mb-4">

                    <label for="zip">Code Postal</label>
                    <input v-model="form.zip" type="text" class="form-control" id="zip" placeholder="" required>
                    <div class="invalid-feedback">
                      code postal obligatoire.
                    </div>

                  </div>
                  <!--Grid column-->

                </div>
                <!--Grid row-->

                <hr>

                <div class="mb-1">
                  <input type="checkbox" class="form-check-input filled-in" id="chekboxRules">
                  <label class="form-check-label" for="chekboxRules">I accept the terms and conditions</label>
                </div>
            
                <div class="mb-1">
                  <input type="checkbox" class="form-check-input filled-in" id="subscribeNewsletter" required>
                  <div class="invalid-feedback">
                      coché !!!.
                    </div>

                  <label class="form-check-label" for="subscribeNewsletter">Subscribe to the newsletter</label>
                </div>

                <hr>

                <button  class="btn btn-danger rounded-pill py-2 btn-block" type="submit" >Procceed to checkout</button>

              </form>
          </div>

          
        </div>
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">RÉCAPITULATIF DE LA COMMANDE </div>
          <div class="p-4">
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">sous-total de la commande </strong><strong>{{totalprice}} DT</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">frais du livraison</strong><strong>0.00 DT</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Impôt</strong><strong>0.00 DT</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                <h5 class="font-weight-bold">{{totalprice}} DT</h5>
              </li>
            </ul><a href="#" class="btn btn-danger rounded-pill py-2 btn-block">retour au panier</a>
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
        first_name:null,
        last_name:null,
        email:null,
        phone_number:null,
        address:null,
        address_2:null,
        gouvernorat:null,
        city:null,
        zip:null,
      }),
      totalprice:'0',
            
        }
    },
    methods: {
        checkout_save(){
            axios.post('/save_livraison',this.form)
            .then(function (response) {
                
                
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });      
    },
    viewCart(){
            if (localStorage.getItem('carts')){
                this.carts = JSON.parse(localStorage.getItem('carts'));
                this.bagde = this.carts.length;
                this.totalprice = this.carts.reduce((total , item)=>{
                    return total + item.ammount * item.price;
                },0);
            }
        },
        
    },

    
mounted() {
    this.viewCart();
    var access_token = localStorage.getItem("AToken");
    if (!access_token) {
      this.$router.push({ name: "login" });
    }
  },
}

</script>

<style>

</style>