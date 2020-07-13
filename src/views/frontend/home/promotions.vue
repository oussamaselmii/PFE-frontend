<template>
  <div>
      <navbar></navbar>
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
            
        }
    },
    methods: {
        
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
      
  },
}
</script>

<style>

</style>