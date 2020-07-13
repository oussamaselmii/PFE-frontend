<template>
  <div>
              <!--Footer-section start-->
    <!-- Footer -->
<footer >
  <div class="container">
      <div class="footer-area">
    <div class="row">
      <div class="col-md-3 mx-auto" v-for="(category , index) in categories" :key="index">
        <div class="footer-widget" >
        <!-- Links -->
        <h3 class="font-weight-bold text-uppercase mt-3 mb-1">{{category.category_name}}</h3>

        <ul class="list-unstyled">
          <li>
              <div v-for="(subcategory , index) in subcategories" :key="index" v-if="subcategory.category_id == category.id" >
            <a href="#!">{{subcategory.subcategory_name}}</a>
              </div>
          </li>         
        </ul>
        </div>
      </div>
    </div>
      </div>
    <!-- Grid row -->
  </div>
  <!-- Footer Links -->
<div class="footer-bottom-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-8 ">
                        <div class="footer-menu  d-flex align-items-center ">
                            <nav class="">
                                <ul>
                                    <li><a href="#">à propos de nous </a></li>
                                    <li><a href="#">Les Promotions</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Copyright © CIBLO</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-4 ">
                        <div class="footer-icon d-flex justify-content-end align-items-center">
                            <span>connecté avec nous:</span>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-skype"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
</footer>
<!-- Footer -->
    <!--Footer-section End-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories :[],
      subcategories :[],
      
      
    }
  },
  methods: {
      
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
   
  },

}
</script>

<style>

</style>