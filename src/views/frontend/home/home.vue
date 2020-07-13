<template>
  <div>
    <!-- Header Area -->
    <navbar></navbar>
       <!-- Carosel Area start-->
    <div>
        <slider></slider>
    </div>
   <!-- Carosel Area end-->

    <!-- normal product area -->
    <br>
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
                                                <router-link class="far fa-eye" :to="{name:'product_details' , params:{product_id:product.id}}"> <img :src="'http://localhost/PFE/back/backend/public/uploads/product_images/'+product.product_image"></router-link>
                                                
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
														<button @click="addCart(product)" class="btn btn-outline-dark btn-lg " >Ajouter au panier</button>
													</div>
												</form>
                                            </div>
                                        </div>
                                    </div>
                                <!--Single product End-->
				</div>
			</div>
		</div>
        <div class="container">
			<div class="row">
				<div class="col-12"><h3>Promotions :</h3></div>
			</div>
			<div class="row">
				<div v-for="(product,index) in products.data" :key="index" class="col-md-3" v-if="product.product_name.includes('demo')">
				      <!--Single product start-->
                                    <div class="product-wrapper">
                                        <div class="product-img">
                                            <router-link :to="{name:'product_details' , params:{product_id:product.id}}"> <img :src="'http://localhost/PFE/back/backend/public/uploads/product_images/'+product.product_image" alt=""></router-link>
                                            
                                    
                                            <div class="product-action">
                                                <router-link class="far fa-eye" :to="{name:'product_details' , params:{product_id:product.id}}"> <img :src="'http://localhost/PFE/back/backend/public/uploads/product_images/'+product.product_image"></router-link>
                                                
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
														<button @click="addCart(product)" class="btn btn-outline-dark btn-lg " >Ajouter au panier</button>
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
    <div class="container">
           <pagination :data="products" @pagination-change-page="getResults"></pagination> 
    </div>                    
  <!--Footer-section start-->
    <pied></pied>
    <!--Footer-section End-->
  </div>
</template>

<script>
import pied  from "../home/pied";
import slider  from "../home/slider";
import navbar  from "../home/navbar";


export default {
    components: {navbar:navbar,slider:slider,pied:pied },
    
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
  background: #FFFAFF;
  /** background: -webkit-linear-gradient(to right, #FFFFFF, #ef629f);
  background: linear-gradient(to right, #FFFFFF , #FFFAFF );
  min-height: 100vh; */
}
.myDiv {
  
  text-align: center;
}
</style>