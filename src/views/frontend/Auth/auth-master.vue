<template>
<div>
   <div class="container">
   <div class="col-md-8 m-auto">
  <router-view></router-view>
   </div>
   </div>
  
  </div>
</template>

<script>

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

<style>

</style>