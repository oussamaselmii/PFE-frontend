<template>
  <div>
   <h2 class="text-center mb-3">Edit Category</h2>
     <form @submit.prevent="category_update()">
                  <div class="form-group row">
                    <label for="category_name" class="col-sm-2 col-form-label"
                      >Category Name</label
                    >
                    <div class="col-sm-10">
                      <input
                      :class="{ 'is-invalid': form.errors.has('category_name') }"
                      v-model="form.category_name"
                        type="text"
                        name="category_name"
                        class="form-control"
                        id="category_name"
                        placeholder="Enter Category Name"
                      />
                      <has-error :form="form" field="category_name"></has-error>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="category_description" class="col-sm-2 col-form-label"
                      >Category Description</label
                    >
                    <div class="col-sm-10">
                      <textarea
                      :class="{ 'is-invalid': form.errors.has('category_description') }"
                        v-model="form.category_description"
                        name="category_description"
                        class="form-control"
                        id="category_description"
                        
                      >
                      </textarea>
                      <has-error :form="form" field="category_description"></has-error>
                    </div>
                  </div>
                  <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-sm-2 pt-0">
                        Radios
                      </legend>
                      <div class="col-sm-10">
                        <div class="form-check">
                          <input 
                          :class="{ 'is-invalid': form.errors.has('publication_status') }"
                            v-model="form.publication_status"
                            class="form-check-input"
                            type="radio"
                            name="publication_status"
                            id="publication_status"
                            value="1"
                            checked
                          />
                          <has-error :form="form" field="publication_status"></has-error>
                          <label class="form-check-label" for="publication_status">
                            Publisched
                          </label>
                        </div>
                        <div class="form-check">
                          <input 
                          :class="{ 'is-invalid': form.errors.has('publication_status') }"
                            v-model="form.publication_status"
                            class="form-check-input"
                            type="radio"
                            name="publication_status"
                            id="publication_status"
                            value="2"
                          />
                          <has-error :form="form" field="publication_status"></has-error>
                          <label class="form-check-label" for="publication_status">
                            Unpublisched
                          </label>
                        </div>
                        
                      </div>
                    </div>
                  </fieldset>
                  <div class="form-group row">
                    <div class="col-sm-2">
                    </div>
                  
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-primary">
                        Update Category
                      </button>
                    </div>
                  </div>
                </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:new Form({
        category_name:null,
        category_description:null,
        publication_status:null,
      }),
    }
  },
  methods: {
    singleCategory(){
      axios.get('/category/'+this.$route.params.category_id)
      .then(response=>{this.form.fill(response.data);
      console.log(response.data);
      })

    },

    category_update(){
      this.form.put('/category/'+this.$route.params.category_id)
    .then(response=> {
      iziToast.info({
              title: 'OK',
              message: 'Successfully update record!',
          });
    this.$router.push({name:'all-category'});
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  },
  mounted() {
    this.singleCategory();
  },

}
</script>

<style>

</style>