<template>

    <div class="container-fluid" style="background-color:#fff;padding:1px;" >
      <nav class="navbar navbar-expand-lg navbar-light"  style="background-color:#fff">
  <a class="navbar-brand" href="#"><img src="@/assets/logo.png" style="width:60px; height:40px;"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/"><img src="@/assets/image/home_icon.png" style="width:16px; height:14px;"> Home  <span class="sr-only">(current)</span></router-link>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#"><img src="@/assets/image/more_icon.png" style="width:16px; height:14px;"> Menu</a>
      </li>

       <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Necessary Links
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
 <router-link class="nav-link" to="/about"><font-awesome-icon icon="fa-regular fa-star" />  About  </router-link>
  <router-link class="nav-link" to="/privacy"><font-awesome-icon icon="fa-regular fa-star" />  Privacy  </router-link>

        </div>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/favorite"><img src="@/assets/icon/marker.png" style="width:16px; height:14px;"> Favourite</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/menu"><img src="@/assets/icon/marker.png" style="width:16px; height:14px;"> Menu</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/profile"><img src="@/assets/image/profile.png" style="width:16px; height:14px;"> Profile</router-link>
      </li>

     
    </ul>
    <ul class="navbar-nav navbar-right">
     <li  class="nav-item" style="margin-top:10px;">
      
    <div class="input-group" style="width:350px;">
  <div class="input-group-prepend" >
    <span class="input-group-text" id="basic-addon1"><img src="@/assets/icon/search.png" style="width:10px;height:10px;"></span>
  </div>
  <input v-on:keyup="keyhandler($event)" v-model="search" type="text" style="background-color:#fafafa" class="form-control"  placeholder="type something and press Enter to Search " name="search" id="search">
    </div>

     </li>
       <li class="nav-item" style="margin-top:6px;">
        <a class="nav-link" href="#"><img src="@/assets/image/cart_icon.png" style="width:19px; height:18px;"></a>
      </li>
    </ul>

  </div>
</nav>
<div class="container">
  <div  style="margin-bottom:2px;">
  
</div>
</div>

    </div>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  
  methods:{
    keyhandler(event)
    {
      if(event.key == "Enter")
      {

 this.$store.state.search=this.search;
 console.log(this.search)

      }


     
    },
    data(){
      return{
        search:''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
