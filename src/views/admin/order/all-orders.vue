<template>
  <div>
    <h2 class="text-center mb-3">All Orders</h2>
    <div>
      
      <table class="table table-border table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>User ID</th>
            <th>Livraison ID</th>
            <th>Prix totale</th>
            <th>Commande Statut</th>
            <th>Enregistré à</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders.data" :key="index">
            <td scope="row">{{ order.id }}</td>
            <td>{{ order.user_id }}</td>
            <td>{{ order.livraison_id }}</td>
            <td>{{ order.total_price }} DT</td>
            <td>{{ order.commande_statut }}</td>
            <td>{{ order.created_at }}</td>
            
            <td>
              <div class="btn-gorup">
                <div class="btn btn-outline-warning" @click="editOrderModal(order)">Edit</div>
                <div class="btn btn-outline-danger" @click="order_delete(order.id)">Delete</div>
                <router-link :to="{name:'order_details', params:{commande_id:order.id , livraison_id:order.livraison_id , user_id:order.user_id}}" class="btn btn-outline-info">Plus</router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
                  <pagination :data="orders" @pagination-change-page="getResults"></pagination>

      <!-- Order Modal -->
      <div
        class="modal fade"
        id="order_modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <form @submit.prevent="order_update()">
              <div class="modal-header">
                <h5 class="modal-title text-success">
                  Order Update
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                
                
                
                <div class="form-group">
                  <label for="total_price">Prix Totale</label>
                  <input
                    type="string"
                    name="total_price"
                    id="total_price"
                    class="form-control"
                    v-model="form.total_price"
                    :class="{ 'is-invalid': form.errors.has('total_price') }"
                  />
                  <has-error :form="form" field="total_price"></has-error>
                </div>
                
                <div class="form-groupe">
                  <label for="commande_statut">Commande Statut</label>
                  <select 
                    class="form-control"
                    id="commande_statut"
                    v-model="form.commande_statut"
                    :class="{ 'is-invalid': form.errors.has('commande_statut') }"
                  >
                    <option>en_attente</option>
                    <option>Livré</option>
                    
                  </select>
                  <has-error :form="form" field="commande_statut"></has-error>
                </div>
                
              </div>
            
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button  type="submit" class="btn btn-primary">
                  Update Order
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],

     
      
      form: new Form({
        id:"",
        total_price: "",
        commande_statut: "",
        
      }),
    };
  },
  methods: {
    getResults(page = 1) {
			axios.get('/commande?page=' + page)
				.then(response => {
					this.orders = response.data;
				});
		},
    
    
    get_all_orders() {
      axios
        .get("/commande")
        .then((response) => {
          this.orders = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    
        
    
    
    order_delete(order_id){
      axios.delete("/commande/"+order_id)
      .then((response)=>{
        this.get_all_orders(),
        iziToast.error({
          title: "Warning",
          message: "order delete succesfully",
          
        });
        
      })

    },
    editOrderModal(order){
      
     $('#order_modal').modal('show')
     this.form.fill(order);
 
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
    this.get_all_orders();
    this.getResults();

  },
};
</script>

<style></style>
