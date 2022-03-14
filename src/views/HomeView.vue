<template>
  <div class="home">
    <HelloWorld />
     <Category />
     <product/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import Category from '../components/category2.vue'
import product from '../components/product2.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Category,
    product
  }
}
</script>
