<template>
  <div class="home" style="background-color:#eee">
    <HelloWorld />

     <product :cat_id="id" :cat_name="name"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

import product from '../components/cat_product.vue'

export default {
  name: 'category-product',
  data(){
return{
  id:this.$store.state.cat_id,
  name:this.$store.state.cat_name,
}
  },
  components: {
    HelloWorld,

    product
  }
}
</script>
