<template>
  <div class="header-section">
        <div class="container position-relative">
            <div class="row">
                <div class="col-xl-5 col-md-12 my-xl-5 mb-0 my-sm-3  position-static ">
                    <div class="main-menu d-none d-md-block">
                        <nav>
                            <ul>
                                <li><a href="/">acceuil</a>
                                    
                                </li>
                                <li><a href="#">Categories<i class="fas fa-angle-down"></i></a>
                                    <div class="mega-menu"  >
                                        <ul v-for="(category , index) in categories" :key="index">
                                            <li class="mega-title"><a href="#">{{category.category_name}}</a></li>
                                            <div v-for="(subcategory , index) in subcategories" :key="index" v-if="subcategory.category_id == category.id" >
                                            <li><router-link :to="{name:'category_details' , params:{subcategory_name:subcategory.subcategory_name}}" ><a href="#">{{subcategory.subcategory_name}}</a></router-link></li>
                                            
                                            </div>
                                        </ul>
                                        
                                        
                                    </div>
                                </li>
                                <li><a href="/promotions">promotions</a></li>
                                <li class="position-static"><a href="#">contact</a>
                                    
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="mobile-menu d-md-none">
                        <nav id="mobile-menu-active">
                            <ul>
                                <li><a href="/">acceuil</a>
                                    
                                </li>
                                <li><a href="#">les promotions</a></li>
                                <li class="position-static"><a href="#">contact</a>
                                    
                                </li>
                                <li><a href="#">Categories<i class="fas fa-angle-down"></i></a>
                                    <div class="mega-menu"  >
                                        <ul v-for="(category , index) in categories" :key="index">
                                            <li class="mega-title"><a href="#">{{category.category_name}}</a></li>
                                            <div v-for="(subcategory , index) in subcategories" :key="index" v-if="subcategory.category_id == category.category_name" >
                                            <li><a href="#">{{subcategory.subcategory_name}}</a></li>
                                            
                                            </div>
                                        </ul>
                                        
                                        
                                    </div>
                                </li>
                                
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-12 text-center mb-0  ">
                    <div class="">
                        <a href="/" class="text-center"><img width="300" height="150" src="http://localhost/PFE/back/backend/public/uploads/logos/logopng.png"
                                alt=""></a>
                    </div>
                </div>
                <div class="col-xl-5 col-md-8 col-sm-12 mb-0  my-xl-5 text-center text-md-right position-relative">
                    <div class="header-right">
                        <ul>
                            <li><a href="/login">Login</a></li>
                            <li><a href="#"><i class="fas fa-heart"></i> (0)</a></li>
                            <li><a href="#">panier({{bagde}})</a>
                                  <div class="card-hover p-3">
                                        <table class="table table-dark table-hover table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th class="h-100">image</th>
                                                            <th>nom</th>
                                                            <th>prix </th>
                                                            <th>Action</th>
                                                        </tr>

                                                    </thead>
                                                    <tbody>


                                                    <tr v-for="(cart, n) in carts" :key="n">
                                                        <td> <img style="width:100%;height:65px" :src="'http://localhost/PFE/back/backend/public/uploads/product_images/'+cart.image"  alt=""></td>
                                                        <td> <p>{{cart.name}}</p></td>
                                                        <td>{{cart.price}}dt<br>
                                                       
                                                        </td>
                                                        <td  class="position-relative">
                                                            <a  class="d-inline position-absolute"  style="top:-23px;right:13px;"><i class="fas fa-trash-alt text-danger" @click="removeCart(n)"></i></a>
                                                            <form  class="mt-4">

                                                                <div class="form-group">
                                                                    <input class="w-100 form-control" type="Number" value="" min="1" v-model="cart.ammount">
                                                                    

                                                                    <label for="my-input">
                                                                        <div><i @click="updateCart(n, cart.ammount)" class="btn btn-outline-light mt-1">Update</i></div>
                                                                    </label>
                                                                </div>

                                                            </form>
                                                        </td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                    <div class="total-price clearfix">
                                        <span class="float-left total-left">Total: </span>
                                        <span class="float-right total-right">{{totalprice}} DT</span>

                                    </div>
                                    <router-link :to="{name:'panier'}" class="check-out-botton">Check out</router-link>

                                </div>
								
                            </li>
                            <li><a href="#"><i class="fas fa-search"></i></a>
                                <div class="search-box">
                                    <form action="#">
                                        <input type="text" placeholder="Search">
                                        <button><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
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
      categories :[],
      subcategories :[],
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
            this.viewCart();
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
      get_all_subcategories(){
      axios.get('/subcategory')
            .then(response =>{
                this.subcategories = response.data;
    })
    },
    get_all_categories(){
      axios.get('/category')
            .then(response =>{
                this.categories = response.data;
    })
    },

  },
  mounted() {
    this.get_all_categories();
    this.get_all_subcategories();
    this.viewCart();
  },

}
</script>

<style>

</style>