<template>
  <div style="background-color:#fff">
    <navbar/>
    <privacy1/>

  </div>
</template>

<script>
import navbar from '../components/HelloWorld'
import privacy1 from '../components/privacy-component.vue'
  export default {
    name:'privacy-view',
    components:{
navbar,
privacy1
    }
  }
</script>

<style scoped>

</style>