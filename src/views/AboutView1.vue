<template>
  <div style="background-color:#fff">
    <navbar/>
    <about/>

  </div>
</template>

<script>
import navbar from '../components/HelloWorld'
import about from '../components/about-component.vue'
  export default {
    
    components:{
navbar,
about
    }
  }
</script>

<style scoped>

</style>