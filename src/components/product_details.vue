<template>
  <div class="container mt-5"  style="font-family:cursive">
    <span class="mb-3" > {{pro_name}} > Details </span>
    <hr>
 
          

<div  class="row" v-if="there_is_data" :detail="details">
  
<div class="col-md-4 col-xs-12 mr-2 sec" >
    <img :src="details.image" style="width: 100%;height: 350px;">

</div>
    <div class="col-md-7 col-xs-12 sec">

       <div> <span style="font-size:25px;font-weight:bold; float:left">{{details.name}}</span>
        <span style="color: #FB5951; float:right;font-size:19px;"> {{details.price}} د.ك</span></div>
       <br>
       <br>
       <hr>


        <h5 >Start time : {{details.available_time_starts}}</h5>
        <h5>end time : {{details.available_time_ends}}</h5>
        <h5>tax : {{details.tax}}</h5>
        <h5>tax Type: {{details.tax_type}}</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipis
          icing elit. Itaque magni autem eveniet atque si
          milique quisquam fugit iste animi nihil quas qu
          is cumque eligendi 
          accusamus at explicabo ex, delectus necessitatibus dolorem.</p>
        <hr>
 <button class="btn" style="background-color:#FB5951;color:white">Add To Cart </button>
    </div>

 

</div>

          <div v-else class="mt-10" style="margin:20px auto">
          
          <div class="alert alert-danger text-center">
            <h2 class="text-center mt-10">No Details For this Product </h2>
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
        details:{},
        there_is_data:true

      };

    },
    props:['pro_id','pro_name'],
     mounted() {
console.log("proid",this.pro_id)
         console.log("proname",this.pro_name)
this.get_product();
  },

  methods: {
   async get_product()
    {

       const details1= await axios.get('https://admin.burgerlocation.online/api/v1/products/details/'+this.pro_id)
        .catch(err=>{
          console.log(err)
        });
        console.log("ops           ",details1)
        if(details1.data)
        {

           this.det=details1.data
            console.log("det  ",this.det)

                this.det.image="https://admin.burgerlocation.online/storage/app/public/product/"+this.det.image;

                this.details=this.det;

             this. there_is_product=true;
        }
        else{
this. there_is_product=false;
        }
  

    }
  }
  }
</script>

<style scoped>
    .row{
        padding: 10px;

    }
.sec{
    padding: 18px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 1px 1px #fff;
    -moz-box-shadow: 0px 0px 1px 1px #fff;
    box-shadow: 0px 0px 1px 1px #fff;
    border-radius: 10px;

}

    .sec img{
        border-radius: 10px;
        margin-bottom: 8px;
    }
</style>