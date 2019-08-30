<template>
  <div>
    <div
      v-for="product in products"
      :key="product.id"
      class="container card"
      style="width: 18rem; padding: 20px"
    >
      <img :src="product.picture" class="card-img-top" alt="..." />
      <div class="card-body">
        <h4 class="card-title">{{product.name}}</h4>
        <h6 class="card-title">{{product.category}}</h6>
        <p class="card-text">{{product.description}}</p>
        <div @click="addToCart(product)" class="btn btn-primary">Add To Cart</div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: null
    };
  },
  async mounted() {
    this.products = (await axios.get("/products")).data;
  },
  methods: {
    async addToCart(product) {
      this.$store.dispatch("addProduct", product);
    }
  }
};
</script>