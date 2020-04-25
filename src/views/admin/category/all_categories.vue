<template>
  <div>
    <h2 class="text-center mb-3">All Categories</h2>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">n°</th>
      <th scope="col">Caterogy Name</th>
      <th scope="col">Category Description</th>
      <th scope="col">Created At</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="category , index in categories" >
      <th scope="row">{{index + 1}}</th>
      <td>{{category.category_name}}</td>
      <td>{{category.category_description}}</td>
      <td>{{category.created_at}}</td>
      <td>
      <div class="btn-group">
        <button class="btn btn-outline-warning">Edit</button>
        <button class="btn btn-outline-danger">Edit</button>
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
      categories :[],
    }
  },
  methods: {
    get_all_categories(){
      axios.get('/category')
            .then(response =>{
                this.categories = response.data;
    })
    }
  },
  mounted() {
    this.get_all_categories();
  },

}
</script>

<style>

</style>