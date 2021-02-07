<template>
  <v-container fluid class="page-container reviewbg">
    <v-row justify="center" class="review-container">
      <h1 class="title-text text-center">
        Trusted by Agencies
        <br />& Store Owners
      </h1>
    </v-row>
    <div class="image-holder">
      <img src="../assets/image/reviewSubImage1.svg" class="sub-image-1" alt="sub1" />
      <img src="../assets/image/reviewSubImage2.svg" class="sub-image-2" alt="sub2" />
    </div>
     <div class="image-holder">
      <img src="../assets/image/reviewSubImage3.svg" class="sub-image-3" alt="sub3" />
      <img src="../assets/image/reviewSubImage4.svg" class="sub-image-4" alt="sub4" />
    </div>
     <div class="image-holder">
      <img src="../assets/image/reviewSubImage5.svg" class="sub-image-5" alt="sub5" />
      <img src="../assets/image/reviewSubImage6.svg" class="sub-image-6" alt="sub6" />
    </div>
    <v-row justify="center">
      <v-col cols="6">
         <div class="image-holder"> 
        <v-card class="text-center card-spacing">
          <h6 class="card-text">
            No other eCommerce platform allows people to start for free and grow their store as their business grows.
            More importantly, Commerce doesn't charge you a portion of your profits as your business grows!
          </h6>
        </v-card>
        <!-- <v-card class="text-center card-spacing">
          <h6 class="card-text">
            No other eCommerce platform allows people to start for free and grow their store as their business grows.
            More importantly, Commerce doesn't charge you a portion of your profits as your business grows!
          </h6>
        </v-card> -->
         </div> 
        
      </v-col>
    </v-row>
    
    
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.review-container {
      margin: 10% 0 6% 0;
}
.card-spacing {
background: url(../assets/image/comma.svg) no-repeat, #ffffff!important;
  padding: 80px 70px 50px 70px;
    background-position: center top 1rem!important;
  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5) !important;
  border-radius: 20px !important;
}
.card-text {
  font: Montserrat;
  font-size: 22px;
  color: #94a2b3;
  font-weight: 500;
}
.reviewbg {
  background: url(../assets/image/reviewbg.svg) no-repeat,
    linear-gradient(
      180deg,
      rgba(236, 240, 253, 0) 0%,
      rgba(236, 240, 253, 0.53) 14.32%,
      #ecf0fd33 45.83%,
      rgba(236, 240, 253, 0.43) 84.33%,
      rgba(236, 240, 253, 0) 100%
    );
     background-size: 50%;
    background-position: center 13rem;
   height: 79vh;
}
.image-holder {
  position: relative;
}
.sub-image-1 {
    position: absolute;
    bottom: 100%;
    box-shadow: inset 0px -16px 23px rgba(255, 255, 255, 0.6);
}
.sub-image-2 {
position: absolute;
    right: 0;
    bottom: 0;
}
.sub-image-3 {
position: absolute;
    left: -10%;
    margin-top: 9%;
}
.sub-image-4 {
    position: absolute;
    right: -12%;
    margin-top: 3%;
}
.sub-image-5 {
    position: absolute;
    margin-top: 29%;
    left: -5%;
}
.sub-image-6 {
   position: absolute;
    right: 3%;
    margin-top: 29%;
}
</style>