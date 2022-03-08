<template>
  <div class="home">
  
  
    <HelloWorld />
     <Category />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import Category from '../components/category.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Category
  }
}
</script>
