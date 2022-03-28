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
        //to be det/........
          async  getproductdetails(context)
    {
        const cat= await axios.get(context.state.apilink+'product/{id}')
        .catch(err=>{
          console.log(err)
        });
        if(cat)
        {console.log("inside getallproduct actions = - =- = -",cat.data.products);
          context.commit('setprodutlist',cat.data.products)
        }
    },
      },

      mounted:{

      },
      watch:{

      }

  }
</script>

<style scoped>

</style>