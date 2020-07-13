<template>
  <div>
      <div>
<navbar></navbar>
      </div>
<!-- Page Title area start -->
    <div class="page-tile-area py-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Acceuil</a></li>
                            <li class="breadcrumb-item"><a href="#">{{product.category_id}}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{product.id}}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Title area End -->
    <!-- product details start -->
    <div class="product-details-area">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="img-tab-area">
                        <div class="tab-content tab-img">
                            <div class="tab-pane fade show active" id="img1" role="tabpane">
                                <img class="img-fluid" :src="'http://localhost/PFE/back/backend/public/uploads/product_images/'+product.product_image" alt="">
                            </div>
                            <div class="tab-pane fade" id="img2" role="tabpanel">
                                <img class="img-fluid" src="img/pro-det-tab-img/2.jpg" alt="">
                            </div>
                            <div class="tab-pane fade" id="img3" role="tabpanel">
                                <img class="img-fluid" src="img/pro-det-tab-img/3.jpg" alt="">
                            </div>
                        </div>
                        <ul class="nav" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#img1" role="tab">
                                    <img class="img-fluid" src="img/pro-det-tab-img/1.jpg" alt="">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#img2" role="tab">
                                    <img class="img-fluid" src="img/pro-det-tab-img/2.jpg" alt="">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#img3" role="tab">
                                    <img class="img-fluid" src="img/pro-det-tab-img/3.jpg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5">
                    <!-- product-details -->
                    <div class="product-details">
                        <h2>{{product.product_name}}</h2>
                        <div class="rating-pro">
                            <i class="fas far fa-star"></i>
                            <i class="fas far fa-star"></i>
                            <i class="fas far fa-star"></i>
                            <i class="fas far fa-star"></i>
                            <i class="fas far fa-star"></i>
                            
                        </div>
                        <p>{{product.product_short_description}}</p>
                        <div class="price-pro">
                            <span>{{product.product_price}} DT </span>
                        </div>
                        <hr>
                    </div>
                    <!-- product-details End -->
                    <!-- options-area start -->
                    <div class="options-area">
                        <div class="title">
                            <h3>Options</h3>
                        </div>

                        
                       <form action="" class="cart-and-action">
                        <div class="quanty clearfix mb-5">
                            <label class="float-left" for="">quantité</label>
                            <div class="float-left">
                            <input type="number" name="product_quantity" id="" min="1">
                            </div>
                        </div>
                        <div class="cart-pro ">
                            <button @click="addCart(product)" class="btn btn-outline-dark btn-lg " >Ajouter au panier</button>
                        </div>
                     </form>
                </div>
                <!-- options-area End -->
                <div class="cart-and-action clearfix">
                    <div class="product-action-pro">
                        
                        <a href="#"><i class="far fa-eye"></i></a>
                        <a href="#"><i class="fas fa-balance-scale"></i></a>
                        <a href="#"><i class="fas fa-heart"></i></a>
                    </div>
                </div>
                    <div class="share-icon">
                        <img src="img/social-icon.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- product info start -->
    <div class="product-info-area pt-5">
        <div class="container">
            <ul class="nav " role="tablist">
                <li class="nav-item">
                    <a class="nav-link " data-toggle="tab" href="#description" role="tab">Description</a>
                </li>
                
                
            </ul>
            <div class="tab-content pt-4">
                <div class="tab-pane fade " id="description" role="tabpanel">
                    <p>{{product.product_long_description}}</p>
                </div>
                
                
            </div>
        </div>
    </div>
    <!-- product info end -->
<promotions></promotions>
  </div>
</template>

<script>
import navbar  from "../home/navbar";
import promotions  from "../home/promotions";
export default {
    components:{
  navbar:navbar,promotions:promotions
  },
    data() {
        return {
            product:{},
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
        viewCart(){
            if (localStorage.getItem('carts')){
                this.carts = JSON.parse(localStorage.getItem('carts'));
                this.bagde = this.carts.length;
                this.totalprice = this.carts.reduce((total , item)=>{
                    return total + item.ammount * item.price;
                },0);
            }
        },

        get_single_product(){
            axios.get('/all-product/'+this.$route.params.product_id)
            .then (response=>{
                this.product=response.data
            })
        }
    },
    created() {
        this.get_single_product();
        this.viewCart();
    },

}
</script>

<style>

</style>