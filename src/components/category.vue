<template>

    <div class="container" >
    
        
        <h6 style="margin-top:20px;margin-bottom:10px; padding:5px;border-radius:10px;color:#FB5850; font-weight:bolder" >All Categories</h6>
          <div class="cat row " style="padding:5px;border-radius:10px;font-family:cursive">
       <div class="col-md-2 s">
              <div class="item">
              <img src="@/assets/image/maintenance.png" alt="image" class="rounded-circle img" >
              <h5>meals</h5>
            </div>
        
       </div>

        <div class="col-md-2 s">
              <div class="item">
              <img src="@/assets/image/send.png" alt="image" class="rounded-circle img" >
              <h5 >salad</h5>
            </div>
        
       </div>

           <div class="col-md-2 s">
              <div class="item">
              <img src="@/assets/image/arabic.png" alt="image" class="rounded-circle  img" >
              <h5>fddfdd</h5>
            </div>
        
       </div>

        <div class="col-md-2 s">
              <div class="item">
              <img src="@/assets/image/wallet.png" alt="image" class="rounded-circle  img" >
              <h5>dsdsa</h5>
            </div>
        
       </div>
           <div class="col-md-2 s">
              <div class="item">
              <img src="@/assets/image/app_store.png" alt="image" class="rounded-circle  img" >
              <h5>qqwqwq</h5>
            </div>
        
       </div>

        <div class="col-md-2 s">
              <div class="item">
              <img src="@/assets/image/play_store.png" alt="image" class="rounded-circle  img" >
              <h5>chekin</h5>
            </div>
        
       </div>

           <div class="col-md-2 s text-center">
              <div class="item">
              <img src="@/assets/image/clock.png" alt="image" class="rounded-circle img-thumbnail img" >
              <h5>ssssss</h5>
            </div>
        
       </div>
      </div>
    </div>
 
</template>

<script>
export default {
  name: 'Category-Component',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img{
  width:70px;
  height: 70px;
  
}
.s{
  text-align: center;
}
.item{
background-color: white;
  margin: 4px;
  width: 100%;
  border-radius: 12px;
  padding: 10px;
  

}
.item:hover{
  


  


  transition: 0.5s ease;
  border:1px solid #FB5850;
}
</style>
