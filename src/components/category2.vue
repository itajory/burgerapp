<template>
  <div class="container" style="padding-top:13px; font-family:cursive">
     <span style="margin-top:20px;">All Category</span>
    <section  class="sec">
     
      <vue-horizontal-list class="hlv" :items="items" :options="options">


        <template v-slot:default="{ item }">
          <div class="item" >
        
            <h6>{{ item.name }}</h6>
              <img @click="getpro(item.id,item.name)" class="rounded-circle  img" :src=item.image>
            <!-- <router-link :to="'category_product/'+item.id">
          
            </router-link> -->
          </div>
        </template>
      </vue-horizontal-list>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import VueHorizontalList from "vue-horizontal-list";
import axios from 'axios';

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      options: {
        responsive: [
          { end: 576, size: 4 },
          { start: 576, end: 768, size: 7 },
          { start: 768, end: 992, size: 9},
          { size:15 },
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1400,

          // Because: #app {padding: 80px 24px;}
          padding:0,
        },
        position: {
          start: 0,
        },
        autoplay: { play: true, repeat: true, speed: 2500 },
      },
     
      items:[],
  
    };
  },

  mounted() {
this.get_category();
  },
   beforeMount(){
    this.get_category()
 },
 created(){
this.get_category()
 },
computed:{

},
  methods: {
  async  get_category()
    {
      const cat= await axios.get('https://admin.burgerlocation.online/api/v1/'+'categories')
        .catch(err=>{
          console.log(err)
        });
        if(cat)
        {
          this.items=cat.data
           for(var i=0;i<this.items.length;i++)
      {
        this.items[i].image="https://admin.burgerlocation.online/storage/app/public/category/"+this.items[i].image;
      }
        }
      //  console.log("from stateeeeeee in design page-- -- - - -",this.$store.state.categories)
      // this.$store.dispatch('getallcategory')

    },

    getpro(id,name)
    {
      var payload={
        id:id,
        name:name
      }
this.$store.dispatch('catid',payload);




this.$router.push("category_product");
    }
  }
});




</script>

<style scoped>
.item{
  text-align: center;

  margin: 0px;
}

.item img {
  width: 88px;
  height: 77px;
}

.sec{
  padding: 0px;
  margin: 0px;


}

.hlv{
  padding-bottom: 1px;
  padding-top: 0px;

  height: 100%;
    border-radius:20px;
}



</style>