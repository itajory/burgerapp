<template>
  <div>
    <navbar/>
    <cart/>

  </div>
</template>

<script>
import navbar from '../components/HelloWorld'
import cart from '../components/cart-component.vue'
  export default {
    name:'favorite-view',
    components:{
      navbar,
      cart
      }
  }
</script>

<style scoped>

</style>