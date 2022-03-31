import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import profile from '../views/profile.vue'
import menu from '../views/menu.vue'
import favorit from '../views/favorite.vue'
import cart from '../views/cartView.vue'
import category_product from '../views/category_product.vue'
import product_details from '../views/product_details'
import  about_component from '../views/AboutView1.vue'
import  privacy from '../views/privacy.vue'
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
    path: '/product_details',
    name: 'product_details',
    component: product_details
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: privacy
  },
  {
    path: '/about',
    name: 'about_component',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about_component
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
