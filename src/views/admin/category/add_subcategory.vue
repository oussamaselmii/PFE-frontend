<template>
  <div>
   <h2 class="text-center mb-3">SubCategory Add</h2>
     <form @submit.prevent="subcategory_add()">
                  <div class="form-group row">
                    <label for="subcategory_name" class="col-sm-2 col-form-label"
                      >SubCategory Name</label
                    >
                    <div class="col-sm-10">
                      <input
                      :class="{ 'is-invalid': form.errors.has('subcategory_name') }"
                      v-model="form.subcategory_name"
                        type="text"
                        name="subcategory_name"
                        class="form-control"
                        id="subcategory_name"
                        placeholder="Enter SubCategory Name"
                      />
                      <has-error :form="form" field="subcategory_name"></has-error>
                    </div>
                  </div>

                  <div class="form-groupe">
                  <label for="category_id">subcategory category</label>
                  <select 
                    class="form-control"
                    id="category_id"
                    v-model="form.category_id"
                    :class="{ 'is-invalid': form.errors.has('category_id') }">
                    <option value="">-------Select a Type of Category--------</option>
                    <option v-for="(category, index) in categories" :key="index">{{category.category_name}}</option>
                    
                  </select>
                  <has-error :form="form" field="category_id"></has-error>
                </div>
                  <div class="form-group row">
                    <label for="subcategory_description" class="col-sm-2 col-form-label"
                      >SubCategory Description</label
                    >
                    <div class="col-sm-10">
                      <textarea
                      :class="{ 'is-invalid': form.errors.has('subcategory_description') }"
                        v-model="form.subcategory_description"
                        name="subcategory_description"
                        class="form-control"
                        id="subcategory_description"
                        
                      >
                      </textarea>
                      <has-error :form="form" field="subcategory_description"></has-error>
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
                        Add SubCategory
                      </button>
                    </div>
                  </div>
                </form>
  </div>
</template>

<script>
import all_categoriesVue from './all_categories.vue';
import all_subcategoriesVue from './all_subcategories.vue';

export default {
  data() {
    return {
      categories: [],
      form:new Form({
        subcategory_name:null,
        category_id:null,
        subcategory_description:null,
        publication_status:null,
      }),
    }
  },
  methods: {
    get_all_categories(){
             axios.get('/category')
            .then(response =>{
                // handle success
                this.categories = response.data;
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        },
    subcategory_add(){
      this.form.post('/subcategory',this.form)
  .then(response=> {
          iziToast.success({
              title: 'OK',
              message: 'Successfully inserted record!',
          });
    this.$router.push({name:'all-subcategory'});
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  },
  mounted() {
        this.get_all_categories();

  },

}
</script>

<style>

</style>