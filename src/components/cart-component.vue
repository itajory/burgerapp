<template>
  <div style="background-color:#ddd">
<div class="container">
   
<div class="row">
    <div class="col-12 item" >
          <din class="row">
                  <div class="col-md-9">
                  <img src="@/assets/burger/caesar-salad.jpg" class="image rounded" alt="cart image">
                  <span> 200 $</span>
                 
                </div>
                 <div class="col-md-1">&nbsp;</div>
                    <div class="col-md-2 ">
                 <div class="pm">
                   <button class="btn btn1">-</button>
                  <span style="color:#FB5850">1</span>
                   <button class="btn btn1">+</button>
                   <img src="@/assets/icon/marker.png" class="image1" alt="cart image">
                 </div>
                </div>

          </din>
                
              </div>


                <div class="col-12 item" >
          <din class="row">
                  <div class="col-md-9">
                  <img src="@/assets/burger/caesar-salad.jpg" class="image rounded" alt="cart image">
                  <span> 200 $</span>
                 
                </div>
                 <div class="col-md-1">&nbsp;</div>
                    <div class="col-md-2 ">
                 <div class="pm">
                   <button class="btn btn1">-</button>
                  <span style="color:#FB5850">1</span>
                   <button class="btn btn1">+</button>
                   <img src="@/assets/icon/marker.png" class="image1" alt="cart image">
                 </div>
                </div>

          </din>
                
              </div>



                <div class="col-12 item" >
          <din class="row">
                  <div class="col-md-9">
                  <img src="@/assets/burger/caesar-salad.jpg" class="image rounded" alt="cart image">
                  <span> 200 $</span>
                 
                </div>
                 <div class="col-md-1">&nbsp;</div>
                    <div class="col-md-2 ">
                 <div class="pm">
                   <button class="btn btn1">-</button>
                  <span style="color:#FB5850">1</span>
                   <button class="btn btn1">+</button>
                   <img src="@/assets/icon/marker.png" class="image1" alt="cart image">
                 </div>
                </div>

          </din>
                
              </div>



                <div class="col-12 item" >
          <din class="row">
                  <div class="col-md-9">
                  <img src="@/assets/burger/caesar-salad.jpg" class="image rounded" alt="cart image">
                  <span> 200 $</span>
                 
                </div>
                 <div class="col-md-1">&nbsp;</div>
                    <div class="col-md-2 ">
                 <div class="pm">
                   <button class="btn btn1">-</button>
                  <span style="color:#FB5850">1</span>
                   <button class="btn btn1">+</button>
                   <img src="@/assets/icon/marker.png" class="image1" alt="cart image">
                 </div>
                </div>

          </din>
                
              </div>



                <div class="col-12 item" >
          <din class="row">
                  <div class="col-md-9">
                  <img src="@/assets/burger/caesar-salad.jpg" class="image rounded" alt="cart image">
                  <span> 200 $</span>
                 
                </div>
                <div class="col-md-1">&nbsp;</div>
                    <div class="col-md-2 ">
                 <div class="pm">
                   <button class="btn btn1">-</button>
                  <span style="color:#FB5850">1</span>
                   <button class="btn btn1">+</button>
                   <img src="@/assets/icon/marker.png" class="image1" alt="cart image">
                 </div>
                </div>

          </din>
                
              </div>
   </div>

 <div style="width:100%;">
     <div class="row" >
     <div class="col-11">
       <input type="text" class="form-control" placeholder="enter copun">
     </div>
     <div class="col-md-1">
       <button class="btn btn-block b">Apply</button>
     </div>
   </div>
 </div>
</div>
  </div>
</template>


<script>
import Vue from "vue";
//import VueHorizontalList from "vue-horizontal-list";
// import axios from 'axios';

export default Vue.extend({
  name: "ServeDev",
  components: {
    
  },
  data() {
    return {
    
    };
  },

  mounted() {
this.get_category();
  },


  methods: {
  async  get_category()
    {
      // const cat= await axios.get('https://admin.burgerlocation.online/api/v1/'+'cart')
      //   .catch(err=>{
      //     console.log(err)
      //   });
      //   if(cat)
      //   {
      //     this.items=cat.data
      //      for(var i=0;i<this.items.length;i++)
      // {
     //   this.items[i].image="https://admin.burgerlocation.online/storage/app/public/$x/"+this.items[i].image;
    //  }
       // }
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

<style  scoped>
.container{
 
  padding-top: 10px;
}

.item{
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0px;
  box-shadow: 0px 0px 3px 2px #fff;
}
.b{
  background-color: brown;
  margin:0px;
  color:white;
}
.image{
  width:100px;
  height: 70px;

}

.image1{
  width:20px;
  height: 20px;
  margin-left: 10px;
}
.pm{
  background-color: #eee;
  border-radius: 8px;
  padding:10px;
margin-top:10px;
}

.btn1{
  margin-right: 4px;
  margin-left: 4px;
  border: 1px solid #fff;
}
</style>