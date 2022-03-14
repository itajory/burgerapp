<template>
  <div class="container">
   <div class="text-center profile">
     <img src="@/assets/image/profile.png" class="rounded-circle img"  alt="my image">
     <h5>fadi debow</h5>
     <div class="row">
       <div class="col-md-4"></div>
       <div class="col-md-4"> <hr style="background-color:#FB5951; "> </div>
           <div class="col-md-4"></div>
     </div>
      
     <input placeholder="first name " type="text" name="fname" class="form-control" id=""><br>

     <input placeholder="Last name " type="text" name="lname" class="form-control" id=""><br>

     <input placeholder="E-Mail" type="email" name="email" class="form-control" id=""><br>

     <input placeholder="Mobile Number " type="text" name="mobile" class="form-control" id=""><br>
     <input placeholder="Password " type="Password" name="pass" class="form-control" id=""><br>
       <input placeholder="Confirme Password " type="Password" name="cpass" class="form-control" id=""><br>
  <div class="row">
       <div class="col-md-4"></div>
       <div class="col-md-4">  
         <button class="btn btn-block" style="background-color:#FB5951;color:white;font-weight:bold;">Save</button>
         </div>
           <div class="col-md-4"></div>
     </div>
     


   </div>

  </div>
</template>

<script>
  export default {
    name:'profile-inputs'
  }
</script>

<style scoped>
.container{
  font-family: cursive;
  padding: 20px;
}
.img{
  width: 120px;
  height: 120px;
  
}
.profile{
margin: 10px auto;

background-color:white;
border-radius: 10px;
padding:10px 30px;
box-shadow: 0px 0px 5px 1px #ccc;


}

input[type=text]:focus,input[type=password]:focus,input[type=email]:focus
{
  border:#FB5951;
box-shadow: 0px 0px 2px 1px #FB5951;
}

</style>