<template>
<div>
    <h2 class="text-center mb-3">Commande Details</h2>
  
        <section class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <span class="h2">commande Informations</span>
                                <router-link :to="{name:'invoice', params:{commande_id:orders.id , livraison_id:livraison.id , user_id:user.id}}" class="btn btn-primary float-right">
                                    Facture
                                </router-link>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <tr>
                                        <th>Commande N°</th>
                                        <td>{{ orders.id }}</td>
                                    </tr>
                                    <tr>
                                        <th>Prix Total</th>
                                        <td>{{ orders.total_price }}</td>
                                    </tr>
                                    <tr>
                                        <th>Commande Statut</th>
                                        <td>{{ orders.commande_statut }}</td>
                                    </tr>
                                    <tr>
                                        <th>Date du Creation</th>
                                        <td>{{ orders.created_at }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h2>Informations D'utilisateur</h2>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <tr>
                                        <th>Nom</th>
                                        <td>{{user.name}}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{{user.email}}</td>
                                    </tr>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h2>Livraison Informations</h2>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <tr>
                                        <th>Nom</th>
                                        <td>{{livraison.first_name}}</td>
                                    </tr>
                                    <tr>
                                        <th>Prénom</th>
                                        <td>{{livraison.last_name}}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{{livraison.email}}</td>
                                    </tr>
                                    <tr>
                                        <th>N° Telephone</th>
                                        <td>{{livraison.phone_number}}</td>
                                    </tr>
                                    <tr>
                                        <th>Addresse</th>
                                        <td>{{livraison.address}}</td>
                                    </tr>
                                    <tr>
                                        <th>Addresse (2)</th>
                                        <td>{{livraison.address_2}}</td>
                                    </tr>
                                    <tr>
                                        <th>Gouvernorat</th>
                                        <td>{{livraison.gouvernorat}}</td>
                                    </tr>
                                    <tr>
                                        <th>ville</th>
                                        <td>{{livraison.city}}</td>
                                    </tr>
                                    <tr>
                                        <th>Code Postal</th>
                                        <td>{{livraison.zip}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h2>Informations Des Produits</h2>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered">
                                    <tr>
                                        <th>Commande N°</th>
                                        <th>Produit id</th>
                                        <th>Nom Du Produit</th>
                                        <th>Prix Du Produit</th>
                                        <th>Quantité</th>
                                        <th>Prix Totale</th>
                                    </tr>
                                    <tr v-for="(detail , index) in order_details" :key="index">
                                        <td>{{detail.commande_id}}</td>
                                        <td>{{detail.product_id}}</td>
                                        <td>{{detail.product_name}}</td>
                                        <td>{{detail.product_price}} DT</td>
                                        <td>{{detail.product_quantity}}</td>
                                        <td>{{detail.product_price * detail.product_quantity }} DT</td>
                                    </tr>
                                   
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
export default {
  data() {
    return {
      orders:[],
      user:[],
      livraison:[],
      order_details:[],
      
      
    };
  },
  methods: {
    
    get_commande_details() {
      axios
        .get("/commande_detail/"+this.$route.params.commande_id)
        .then((response) => {
          this.order_details = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    
    get_single_order() {
      axios
        .get("/commande/"+this.$route.params.commande_id)
        .then((response) => {
          this.orders = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    get_single_user() {
      axios
        .get("/show/"+this.$route.params.user_id)
        .then((response) => {
          this.user = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    get_livraison() {
      axios
        .get("/show_livraison_details/"+this.$route.params.livraison_id)
        .then((response) => {
          this.livraison = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    
        
    
    
    
    
    order_update(){
            this.form.put("commande/"+this.form.id).then(response => {
            
                this.get_all_orders(),
                $('#order_modal').modal('hide')
                iziToast.success({
                    title: 'Success',
                    message: 'Order Update successfully',
                });
            });
              
        },
  },
  created(){
    this.get_single_order();
    this.get_single_user();
    this.get_livraison();
    this.get_commande_details();

  },
};
</script>

<style>

</style>