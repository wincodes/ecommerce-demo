<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">My Ecommerce</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="products">Products</router-link>
          <!-- <a class="nav-link" href="#">Products <span class="sr-only">(current)</span></a> -->
        </li>
        <li class="nav-item" v-if="user">
          <router-link class="nav-link" to="/add-products">Add Products</router-link>
        </li>
        <li class="nav-item" v-if="!user">
          <router-link class="nav-link" to="register">Register</router-link>
          <!-- <a class="nav-link" href="#">Register</a> -->
        </li>
        <li class="nav-item" v-if="!user">
          <router-link class="nav-link" to="login">Login</router-link>
          <!-- <a class="nav-link" href="#">Register</a> -->
        </li>
        <li class="nav-item" v-if="user">
          <a class="nav-link" href="/auth/logout">Logout</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="wishlist">Wishlist</router-link>
          <!-- <a class="nav-link" href="#">Wishlist</a> -->
        </li>
      </ul>
    </div>
    <div  @click="cart" type="button" class="btn btn-primary">
      Cart
      <span class="badge badge-light">{{(this.$store.state.count).length}}</span>
    </div>
  </nav>
</template>

<script>
import store from "../store";

export default {
  props: ["user"],
  methods: {
    async cart() {
      this.$router.push({
        path: "/cart"
      });
    }
  }
};
</script>
