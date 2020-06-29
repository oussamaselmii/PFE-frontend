<template>
  <div>
    <div>
      <router-view></router-view>
    <!--navbar ></çnavbar!-->
    
    </div>
  </div>
</template>

<script>
//import navbar from "./navbar.vue";
import("../../assets/frontend/css/main.css");
import("../../assets/frontend/css/all.css");
import("../../assets/frontend/css/responsive.css");


export default {
  data() {
    return {
      
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
        
  },
  mounted() {
    this.userinfo();
  },
  
  

}
</script>