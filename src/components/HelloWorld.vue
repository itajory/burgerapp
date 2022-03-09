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
        <a class="nav-link" href="#"><img src="@/assets/image/home_icon.png" style="width:16px; height:14px;"> Home  <span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#"><img src="@/assets/image/more_icon.png" style="width:16px; height:14px;"> Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><img src="@/assets/image/more_icon.png" style="width:16px; height:14px;"> Necessary Links</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#"><img src="@/assets/icon/marker.png" style="width:16px; height:14px;"> Favourite</a>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/about"><img src="@/assets/icon/marker.png" style="width:16px; height:14px;"> Menu</router-link>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#"><img src="@/assets/image/profile.png" style="width:16px; height:14px;"> Profile</a>
      </li>

     
    </ul>
    <ul class="navbar-nav navbar-right">
     <li  class="nav-item" style="margin-top:10px;">
        <form action="" method="post">
    <div class="input-group" style="width:360px;">
  <div class="input-group-prepend" >
    <span class="input-group-text" id="basic-addon1"><img src="@/assets/icon/search.png" style="width:10px;height:10px;"></span>
  </div>
  <input type="text" style="background-color:#fafafa" class="form-control"  placeholder="type something and press Enter to Search " name="search" id="search">
    </div>
</form>
     </li>
       <li class="nav-item" style="margin-top:6px;">
        <a class="nav-link" href="#"><img src="@/assets/image/cart_icon.png" style="width:19px; height:18px;"></a>
      </li>
    </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </form> -->
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
  props: {
    msg: String
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
