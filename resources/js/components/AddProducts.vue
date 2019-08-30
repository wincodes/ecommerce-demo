<template>
<div>
<form>
    <div class="form-group">
        <div class="form-group col-md-6">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" v-model="products.name">
        </div>
    </div>
     <div class="form-group">
        <div class="form-group col-md-6">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" placeholder="category" v-model="products.category">
        </div>
    </div>
     <div class="form-group">
        <div class="form-group col-md-6">
        <label for="description">description</label>
        <input type="text" class="form-control" id="description" placeholder="description" v-model="products.description">
        </div>
    </div>
     <div class="form-group">
        <div class="form-group col-md-6">
        <label for="price">price</label>
        <input type="text" class="form-control" id="price" placeholder="price" v-model="products.price">
        </div>
    </div>
     <div class="form-group">
        <div class="form-group col-md-6">
        <label for="picture">picture</label>
        <input type="text" class="form-control" id="picture" placeholder="image url" v-model="products.picture">
        </div>
    </div>
    <div @click="create" class="btn btn-primary">Add Product</div>
</form>
<div class="alert alert-danger" role="alert" v-if="error">
    {{error}}
</div>
</div>
</template>

<script>
export default {
     data () {
    return {
        products:{
            name:'',
            category: '',
            description: '',
            price: '',
            picture: '',
        },
        error: null
    }
  },
  methods: {
      async create () {
        this.error = ''
        const areAllFieldsFilled = Object.keys(this.products).every(key => !!this.products[key])
            if(!areAllFieldsFilled){
                this.error = 'Please Fill All Fields'
                return
            }
        try{
          await axios.post('products', {products: this.products})
            .then((response) => {
                if(response.data.error){
                    this.error = response.data.error;
                    console.log(response.data.error)
                }

                if(response.status === 201 || response.status === 200){
                this.$router.push({
                    path: '/products',
                })
            };
            })
        }catch(error){
          this.error = 'Sorry an error Occurred';
          console.log(error)
        }
          
      }
  },
  mounted() {},
}
</script>