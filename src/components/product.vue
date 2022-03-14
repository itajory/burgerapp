<template>
  <div class="container mt-5">
    <h5 class="mb-3">Popular Items</h5>
    <div class="row">
            <div class="col-md-2 " >
              <div class="ii">
                  <img src="@/assets/burger/beba-fries-.jpg" alt="Avatar" class="image rounded-circle">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>
            
               <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/caesar-salad.jpg" alt="Avatar" class="image rounded-circle">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>

            <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/chicken-strips.jpg" alt="Avatar" class="image rounded-circle">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>


              <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/kids-meal1.jpg" alt="Avatar" class="image rounded-circle">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>
            
               <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/caesar-salad.jpg" alt="Avatar" class="image rounded-circle">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>


               <div class="col-md-2 " >
              <div class="ii">
                  <img src="@/assets/burger/kids-meal2.jpg" alt="Avatar" class="image rounded-circle">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>
            
               <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/caesar-salad.jpg" alt="Avatar" class="image">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>


               <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/mozarella-sticks.jpg" alt="Avatar" class="image">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>


               <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/caesar-salad.jpg" alt="Avatar" class="image">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>

                    <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/kids-meal1.jpg" alt="Avatar" class="image">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>


                  <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/kids-meal1.jpg" alt="Avatar" class="image">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>


                  <div class="col-md-2" >
              <div class="ii">
                  <img src="@/assets/burger/kids-meal1.jpg" alt="Avatar" class="image">
                <div class="overlay">
                <div class="text">Hello World</div>
                </div>
              </div>
            </div>

    </div>

  </div>
</template>

<script>
  export default {
    name:'product-component',
  }
</script>

<style scoped>
.col-md-2{
  margin-bottom: 25px;
}
.ii {
  position: relative;
  width:100%;
 
}
.image {
  display: block;
  width: 100%;
  height: 150px;
}

.ii .overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: rgba(48, 45, 45, 0.9);
  overflow: hidden;
  width: 100%;
  height:0;

  border-radius: 50%;
  
  transition: .5s ease;
}

.ii:hover .overlay {
  bottom: 0;
  height: 150px;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>