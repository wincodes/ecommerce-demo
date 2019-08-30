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
      </div>
      <hr />
    </div>
    <div @click="checkout" class="container card btn btn-primary" style="width: 18rem; padding: 20px; color: #000">
      Checkout</div>
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
    this.products = this.$store.state.count;
  },
  methods: {
    async checkout() {
      this.$store.dispatch("checkout");
      this.$router.push({
        path: "/products"
      });
    }
  }
};
</script>