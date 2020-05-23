<template>
  <div>
    <h2 class="text-center mb-3">All SubCategories</h2>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">n°</th>
      <th scope="col">SubCaterogy Name</th>
      <th scope="col">Caterogy Type</th>
      <th scope="col">SubCategory Description</th>
      <th scope="col">Created At</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(subcategory , index) in subcategories" :key="index" >
      <th scope="row">{{index + 1}}</th>
      <td>{{subcategory.subcategory_name}}</td>
      <td>{{subcategory.category_id}}</td>
      <td>{{subcategory.subcategory_description}}</td>
      <td>{{subcategory.created_at}}</td>
      <td>
      <div class="btn-group">
        <router-link :to="{name:'edit-subcategory', params:{subcategory_id:subcategory.id}}" class="btn btn-outline-warning">Edit</router-link>
        <button class="btn btn-outline-danger" @click="deleteSubCategory(subcategory.id)">Delete</button>
      </div>
      </td>
    </tr>
  </tbody>
</table>

  </div>
</template>

<script>
export default {
  data() {
    return {
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
    deleteSubCategory(subcategory_id){
axios.delete('/subcategory/'+subcategory_id)
.then(res=>{
  iziToast.warning({
          title: 'Warning',
          message: 'Category delete succesfully',
                    });
  this.get_all_subcategories();
  console.log(res);
})

    }
  },
  mounted() {
    this.get_all_subcategories();
  },

}
</script>

<style>

</style>