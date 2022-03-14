<template>
  <div class="container">
   <div class=" body">
     <div class=" text-center top">
        <img src="@/assets/image/profile.png" class="rounded-circle img"  alt="my image">
       <h4>fadi</h4>
       <span>ajory.it@gmail.com</span>
     </div>

     <ul>
       <li>
        Dark Mod
       </li>
          <li>
         <div  class="rt" ><router-link to="/profile"><img src="@/assets/image/profile.png" style="width:16px; height:14px;"> Profile</router-link></div>
       </li>

         <li>
         <router-link  class="rt" to="/menu"><img src="@/assets/image/more_icon.png" style="width:16px; height:14px;"> Menu</router-link>
       </li>

         <li>
         <td><router-link  class="rt" to="/"><img src="@/assets/image/home_icon.png" style="width:16px; height:14px;"> Home</router-link></td>
       </li>

         <li>
       <router-link  class="rt" to="/profile"><img src="@/assets/icon/marker.png" style="width:16px; height:14px;"> Notifications</router-link>
       </li>

         <li>
         <router-link  class="rt" to="/profile"><img src="@/assets/image/home_icon.png" style="width:16px; height:14px;"> Messages</router-link>
       </li>

         <li>
         <router-link class="rt" to="/profile"><img src="@/assets/icon/marker.png" style="width:16px; height:14px;"> Copoune</router-link>
       </li>
         
     </ul>
   
     


   </div>

  </div>
</template>

<script>
  export default {
    name:'menu-component'
  }
</script>

<style scoped>

ul{
  list-style-type: none;
  padding: 20px 30px;
  color:#555;
  width:100%;
}
ul li {
  padding:10px 0px;
  width: 100%;
}
.rt{
  width:100%;
  color:#555;
}
.rt:hover {
  color:#555;
  text-decoration: none;
  background-color: #eee;
  padding:3px;
 
}
.container{
  font-family: cursive;
 
}
.img{
  width: 120px;
  height: 120px;
  
}
.body{
  background-color: white;
}
.top{
  background-color: #FB5951;
  color:white;
  padding-bottom:10px;
   padding-top:10px;
}
</style>