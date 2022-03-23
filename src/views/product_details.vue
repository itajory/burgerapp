<template>
  <div class="home">
    <HelloWorld />

     <product :pro_id="id" :pro_name="name"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

import product from '../components/product_details'

export default {
  name: 'product-details',
  data(){
return{
  id:this.$store.state.product_id,
  name:this.$store.state.product_name,
}
  },
  components: {
    HelloWorld,

    product
  }
}
</script>
