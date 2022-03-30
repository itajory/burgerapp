<template>
  <div class="container mt-5"  style="font-family:cursive">
    <span class="mb-3" >{{ cat_name }} > Products </span>
    <hr>
 
          

<div  class="row" v-if="there_is_product">
  

    <div  v-for="pro in products" :key="pro.id" class="col-md-3  col-6 item" >
              <div class="ii">
                  <img :src="pro.image" alt="Avatar" class="image">
                <div class="info">
                <div class="row underimage">
                  <div class="col-md-8">
                    <h6>{{pro.name}}</h6>
            
                  </div>

             
                        <div class="col-md-2"><span>{{pro.price}}د.ك</span></div>
                            <button @click="getproid(pro.id,pro.name)" class="btn btn-block  details-style">Details</button>

                </div>
                </div>
              </div>
            </div>



</div>

          <div v-else class="mt-10" style="margin:20px auto">
          
          <div class="alert alert-danger text-center">
            <h2 class="text-center mt-10">No Data In This Category</h2>
           <button class="btn btn-outline-danger"> <router-link style="color:#373737;text-decoration:none;text-align:center;font-weight:bold;" to="/">   &lt; Go Back </router-link></button>
          </div>
            </div>  
            
               
    </div>

  
</template>

<script>
import axios from 'axios';
  export default {
    name:'product2-component',
    data(){
      return{
        products:[],
        there_is_product:true

      };

    },
    props:['cat_id','cat_name'],
     mounted() {
       console.log('ccccccccc       ',this.cat_name);
this.get_product();
  },
 beforeMount(){
    this.get_product()
 },
 created(){
this.get_product()
 },
  methods: {
   async get_product()
    {
      console.log('f ....',this.cat_id);
       const cat= await axios.get('https://admin.burgerlocation.online/api/v1/categories/products/'+this.cat_id)
        .catch(err=>{
          console.log(err)
        });
        
        if(cat.data.length > 0)
        {
           this.products=cat.data
           for(var i=0;i<this.products.length;i++)
              {
                this.products[i].image="https://admin.burgerlocation.online/storage/app/public/product/"+this.products[i].image;
              }
             this. there_is_product=true;
        }
        else{
this. there_is_product=false;
        }
  
     // this.$store.dispatch('getallproduct')
    },
     getproid(id,name)
    {
        var payload={
            id:id,
            name:name
        }
        this.$store.dispatch('proid',payload);




        this.$router.push("product_details");
    }
  }
  }
</script>

<style scoped>

.details-style{
  text-align: center;
width: 60%;
margin:10px auto;
  border:1px solid #FB5951;
  background-color: white;
  color:#FB5951;
  
}
.details-style:hover{
  text-align: center;
width: 60%;
margin:10px auto;
  border:1px solid #ccc;
  background-color: #FB5951;
  color:white;
  transition:0.5s ease;
  
}
.underimage{
  margin-top: 10px;
  padding:0px 10px;
}

h6{
  font-weight: bold;
}
.item{
  margin-bottom: 25px;
  
  padding-bottom: 10px;
  
}

.col-md-2 span{
  color:#FB5951;
  font-weight: bold;
}

.col-md-8 h5,p{
  padding-left:5px;
}
.ii {
padding-bottom: 4px;
background-color: white;
border-radius: 8px;
box-shadow: 0px 0px 3px 2px #fff;
/* border-right: 1px solid #F3B5B2;
border-bottom: 1px solid #F3B5B2; */

 
}
.info{
  width:100%;
}
.image {
  display: block;
  width: 100%;
  height: 100px;
  border-radius: 8px;
}

</style>