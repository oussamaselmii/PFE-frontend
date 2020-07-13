<template>
<div>
   <navbar></navbar>   
  <div class="pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

          <!-- Shopping cart table -->
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Produit</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Prix</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Quantité</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Supprimer</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, n) in carts" :key="n">
                  <th scope="row" class="border-0">
                    <div class="p-2">
                      <img :src="'http://localhost/PFE/back/backend/public/uploads/product_images/'+cart.image" alt="" width="70" class="img-fluid rounded shadow-sm">
                      <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{{cart.name}}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                      </div>
                    </div>
                  </th>
                  <td class="border-0 align-middle"><strong>{{cart.price}} DT</strong></td>
                  <td><input class="w-50 form-control" type="Number" value="" min="1" v-model="cart.ammount">
                    <a href="#" @click="updateCart(n, cart.ammount)" class="btn btn-outline-dark mt-1">Update</a>
                   </td>
                  
                  <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash" @click="removeCart(n)"></i></a></td>

                  
                </tr>
                <br>
                
                
              </tbody>
                
            </table>
            <div class="col-lg-15">
                  
                  
                <li class="d-flex justify-content-between py-3 border-bottom  " ><strong class="text-muted">Total :</strong>
                <h5 class="font-weight-bold">{{totalprice}} DT</h5>
              </li>
              <br>
              <a href="#" class="btn btn-danger rounded-pill py-2  "> << retour </a>
                  <router-link href="#" class="btn btn-danger rounded-pill py-2 float-right 	" :to="{name:'checkout'}">continuer >> </router-link>
                  
                </div>
          </div>
          <!-- End -->
        </div>
      </div>

      

    </div>
  </div>
  <section>
		<div class="container">
			<div class="row">
				<div class="col-12"><h3>Nouveaux Produits :</h3></div>
			</div>
			<div class="row">
				<div v-for="(product,index) in products.data" :key="index" class="col-md-3">
				      <!--Single product start-->
                                    <div class="product-wrapper">
                                        <div class="product-img">
                                            <router-link :to="{name:'product_details' , params:{product_id:product.id}}"> <img :src="'http://localhost/PFE/back/backend/public/uploads/product_images/'+product.product_image" alt=""></router-link>
                                            
                                    
                                            <div class="product-action">
                                                <a href="#"><i class="far fa-eye"></i></a>
                                                <a href="#"><i class="fas fa-balance-scale"></i></a>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-content text-center">
                                            <h3><a href="#">{{product.product_name}}</a></h3>
                                            <div class="rating">
                                                <i class="fas far fa-star"></i>
                                                <i class="fas far fa-star"></i>
                                                <i class="fas far fa-star"></i>
                                                <i class="fas far fa-star"></i>
                                                <i class="fas far fa-star"></i>
                                            </div>
                                            <div class="price">
                                                <span> {{product.product_price}} DT</span>
                                                <span><del>239.9 DT</del></span>
                                            </div>
                                            <div class="cart-btn">
                                                <form   class="cart-and-action">
													<div class="">
														<div class="float-left">
															<input type="hidden" name="product_quantity" value="1">
															<input type="hidden" name="product_id" value="">
														</div>
													</div>
													<div class="cart-pro">
														<button @click="addCart(product)" class="btn btn-outline-dark btn-lg " >Add to cart</button>
													</div>
												</form>
                                            </div>
                                        </div>
                                    </div>
                                <!--Single product End-->
				</div>
			</div>
		</div>
	</section>
  <pied></pied>
</div>

</template>

<script>
import navbar  from "../home/navbar";
import pied  from "../home/pied";
export default {
    components:{
  navbar:navbar,pied:pied
  },
    data() {
        return {
            products:{},
            carts : [],
            cartadd: {
                id:'',
                name:'',
                price:'',
                image:'',
                ammount:'',
                
            },
            
            quantity:'1',
            totalprice:'0',
            bagde:'0',
        }
    },
    methods: {
        viewCart(){
            if (localStorage.getItem('carts')){
                this.carts = JSON.parse(localStorage.getItem('carts'));
                this.bagde = this.carts.length;
                this.totalprice = this.carts.reduce((total , item)=>{
                    return total + item.ammount * item.price;
                },0);
            }
        },
        addCart(pro){
            
            
            this.cartadd.id = pro.id;
            this.cartadd.name = pro.product_name;
            this.cartadd.price = pro.product_price;
            this.cartadd.image = pro.product_image;
            this.cartadd.ammount = 1 ;
            this.carts.push(this.cartadd);
            
            this.cartadd = {};
            this.storeCart();
            
            
        },
        updateCart(n, ammount){
            this.carts = JSON.parse(localStorage.getItem('carts'));
            let cart = this.carts[n];
            cart.ammount = ammount;
            this.$set(this.carts, n, cart);
            localStorage.setItem('carts',JSON.stringify(this.carts));
            this.totalprice = this.carts.reduce((total , item)=>{
                    return total + item.ammount * item.price;
                },0);
        },
                
            
            
            
        
        removeCart(pro){
            this.carts.splice(pro, 1);
            this.storeCart();

        },
        storeCart(){
            let parsed = JSON.stringify(this.carts);
            localStorage.setItem('carts',parsed);
            this.viewCart();
        },






        getResults(page = 1) {
			axios.get('/all-product?page=' + page)
				.then(response => {
					this.products = response.data;
				});
		},
        get_all_product() {
      
        axios.get("/all-product")
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
  },
  created() {
      this.get_all_product();
      this.getResults();
      this.viewCart();
  },
}
</script>
<style>
body {
  background: #eecda3;
  background: -webkit-linear-gradient(to right, #FFFFFF, #ef629f);
  background: linear-gradient(to right, #FFFFFF , #FFFAFF );
  min-height: 100vh;
}
.myDiv {
  
  text-align: center;
}
</style>