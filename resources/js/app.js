/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainHeader from './components/MainHeader.vue';

import Products from './components/Products.vue';
import Register from './components/Register.vue';
import Wishlist from './components/Wishlist.vue';
import Login from './components/Login.vue';
import AddProducts from './components/AddProducts.vue';
import store from './store';
import { sync } from 'vuex-router-sync'
import Cart from './components/Cart.vue'


const routes = [
    { path: '/products', component: Products },
    { path: '/register', component: Register },
    { path: '/wishlist', component: Wishlist },
    { path: '/login', component: Login },
    { path: '/add-products', component: AddProducts },
    { path: '/cart', component: Cart },
  ]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

sync(store, router)

new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainHeader
    },
    mounted() {
        this.$router.push({
            path: '/products',
        })
    },
});
