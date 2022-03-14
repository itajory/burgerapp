<template>
  <div>
    <navbar/>
    <pro/>

  </div>
</template>

<script>
import navbar from '../components/HelloWorld'
import pro from '../components/profile-component.vue'
  export default {
    name:'profile-view',
    components:{
      navbar,
      pro
      }
  }
</script>

<style scoped>

</style>