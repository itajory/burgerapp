<template>
  <div>
    <navbar/>
    <menue/>

  </div>
</template>

<script>
import navbar from '../components/HelloWorld'
import menue from '../components/favorite-component.vue'
  export default {
    name:'favorite-view',
    components:{
      navbar,
      menue
      },
      data(){
        return{

        };
      },

      methods:{
     
      },

      mounted:{

      },
      watch:{

      }

  }
</script>

<style scoped>

</style>