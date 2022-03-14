<template>
  <div>
    <navbar/>
    <menue/>

  </div>
</template>

<script>
import navbar from '../components/HelloWorld'
import menue from '../components/menu-component.vue'
  export default {
    name:'menu-view',
    components:{
      navbar,
      menue
      }
  }
</script>

<style scoped>

</style>