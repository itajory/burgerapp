<template>
  <div>
    <navbar/>
    <pro/>

  </div>
</template>

<script>
import axios from 'axios'
import navbar from '../components/HelloWorld'
import pro from '../components/profile-component.vue'
  export default {
    name:'profile-view',
    components:{
      navbar,
      pro
      },
      data() {
        return {
          user:{}
        }
      },
      methods:{
        getuserinfo(){
     if(!this.user)
     {
            axios.get('https://admin.burgerlocation.online/api/v1/customer/info').then().catch();
     }
        },
        updateprofile()
        {
          axios.put('https://admin.burgerlocation.online/api/v1/customer/update-profile').then().catch();
        }
      }
  }
</script>

<style scoped>

</style>