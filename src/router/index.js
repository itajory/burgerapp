import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import profile from '../views/profile.vue'
import menu from '../views/menu.vue'
import favorit from '../views/favorite.vue'
import cart from '../views/cartView.vue'
import category_product from '../views/category_product.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: favorit
  },
  {
    path: '/category_product',
    name: 'category_product',
    component: category_product
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
