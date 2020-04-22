<template>
  <div>
      <h3>dashboard</h3>
      <a href="" @click="logout()">logout</a>
  </div>
</template>

<script>
export default {
    methods: {
         logout() {
            localStorage.removeItem('AToken'),
            this.$router.push('/admin-login')
        }
    },
    mounted() {
    var access_token = localStorage.getItem("AToken");
    if (!access_token) {
      this.$router.push({name:"admin-login"});
    }
    }
}
</script>

<style>

</style>