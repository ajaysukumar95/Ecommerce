<template>
  <v-container fluid class="page-container reviewbg">
    <v-row justify="center" class="review-container">
      <h1
        class="title-text text-center"
        data-aos="fade-up"
        data-aos-delay="70"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Trusted by Agencies
        <br />& Store Owners
      </h1>
    </v-row>
    <div class="image-holder">
      <img
        src="../assets/image/reviewSubImage1.svg"
        data-aos="zoom-out"
        data-aos-delay="150"
        data-aos-easing="linear"
        data-aos-duration="8000"
        class="sub-image-1"
        alt="sub1"
      />
      <img
        src="../assets/image/reviewSubImage2.svg"
        data-aos="zoom-out"
        data-aos-delay="200"
        data-aos-easing="linear"
        data-aos-duration="8000"
        class="sub-image-2"
        alt="sub2"
      />
    </div>
    <div class="image-holder">
      <img
        src="../assets/image/reviewSubImage3.svg"
        data-aos="zoom-out"
        data-aos-delay="250"
        data-aos-easing="linear"
        data-aos-duration="8000"
        class="sub-image-3"
        alt="sub3"
      />
      <img
        src="../assets/image/reviewSubImage4.svg"
        data-aos="zoom-out"
        data-aos-delay="300"
        data-aos-easing="linear"
        data-aos-duration="8000"
        class="sub-image-4"
        alt="sub4"
      />
    </div>
    <div class="image-holder">
      <img
        src="../assets/image/reviewSubImage5.svg"
        data-aos="zoom-out"
        data-aos-delay="350"
        data-aos-easing="linear"
        data-aos-duration="8000"
        class="sub-image-5"
        alt="sub5"
      />
      <img
        src="../assets/image/reviewSubImage6.svg"
        data-aos="zoom-out"
        data-aos-delay="300"
        data-aos-easing="linear"
        data-aos-duration="8000"
        class="sub-image-6"
        alt="sub6"
      />
    </div>
    <v-row justify="center">
      <v-col cols="12" xs='10' sm="8" md="6" class="pa-0">
        <div class="image-holder">
          <v-card
            data-aos="zoom-out"
            data-aos-delay="450"
            data-aos-easing="linear"
            data-aos-duration="8000"
            class="text-center card-spacing"
          >
            <h6 class="card-text">
              No other eCommerce platform allows people to start for free and grow their store as their business grows.
              More importantly, Commerce doesn't charge you a portion of your profits as your business grows!
            </h6>
          </v-card>
           <v-card
            data-aos="zoom-out"
            data-aos-delay="450"
            data-aos-easing="linear"
            data-aos-duration="8000"
            class="text-center card-spacing card-behind"
          >
            <h6 class="card-text">
              No other eCommerce platform allows people to start for free and grow their store as their business grows.
              More importantly, Commerce doesn't charge you a portion of your profits as your business grows!
            </h6>
          </v-card>
          <div class="image-holder text-right">
          <v-icon class='down-align'>mdi-arrow-down</v-icon>
          <v-icon class="up-align">mdi-arrow-up</v-icon>
          </div>
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
.card-behind{
    position: absolute;
    top: 6%;
    z-index: -1;
}
.card-spacing {
  background: url(../assets/image/comma.svg) no-repeat, #ffffff !important;
  padding: 80px 65px 50px 65px;
  background-position: center top 1rem !important;
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
      rgba(236, 240, 253, 0) 84.33%,
      rgba(236, 240, 253, 0) 100%
    );
  background-size: 50%;
  background-position: center 13rem;
  /* height: 79vh; */
}
.image-holder {
  position: relative;
}
.sub-image-1 {
  position: absolute;
  display: none;
  bottom: 100%;
}
.sub-image-2 {
  position: absolute;
  display: none;
  right: 0;
  bottom: 0;
}
.sub-image-3 {
  position: absolute;
  display: none;
  left: -10%;
  margin-top: 9%;
}
.sub-image-4 {
  position: absolute;
  display: none;
  right: -12%;
  margin-top: 3%;
}
.sub-image-5 {
  position: absolute;
  display: none;
  margin-top: 29%;
  left: -5%;
}
.sub-image-6 {
  position: absolute;
  display: none;
  right: 3%;
  margin-top: 29%;
}
.down-align{

    position: absolute;
    cursor: pointer;
    right: 5%;
    bottom: 14px;
    color: #3333334f;
    transition: all 1s ease;

}
.down-align:hover{

    position: absolute;
    cursor: pointer;
    right: 5%;
    bottom: 14px;
    color: #333333;
     transform:scale(1.25);


}
.up-align{
    position: absolute;
    cursor: pointer;
    right: 5%;
    bottom : 45px;
    color: #3333334f;
}
.up-align:hover{
    position: absolute;
    cursor: pointer;
    right: 5%;
    bottom : 45px;
     color: #333333;
     transform:scale(1.25);
}
@media only screen and (max-width: 500px){
    .page-container
    {
        padding: 0 5px;
    }
    
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  .reviewbg {
    background: url(../assets/image/reviewbg.svg) no-repeat,
      linear-gradient(
        180deg,
        rgba(236, 240, 253, 0) 0%,
        rgba(236, 240, 253, 0.53) 14.32%,
        #ecf0fd33 45.83%,
        rgba(236, 240, 253, 0) 84.33%,
        rgba(236, 240, 253, 0) 100%
      );
    background-size: 50%;
    background-position: center 13rem;
    height: 59vh;
  }
  .sub-image-1 {
    position: absolute;
    display: block;
    height: 150px;
    width: 150px;
    left: -5%;
    bottom: -49px;
  }
  .sub-image-2 {
    position: absolute;
    display: block;
    left: 85%;
    bottom: -25px;
  }
  .sub-image-3 {
    position: absolute;
    display: block;
    left: -10%;
    margin-top: 15%;
  }
  .sub-image-4 {
    position: absolute;
    display: block;
    right: -17%;
    margin-top: 8%;
  }
  .sub-image-5 {
    position: absolute;
    display: block;
    margin-top: 47%;
    left: -5%;
  }
  .sub-image-6 {
    position: absolute;
    display: block;
    right: -11%;
    margin-top: 49%;
  }
    .down-align{

    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom: -1px;
    color: #3333334f;
    transition: all 1s ease;

}
.down-align:hover{

    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom: -1px;
    color: #333333;
     transform:scale(1.25);


}
.up-align{
    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom : 28px;
    color: #3333334f;
}
.up-align:hover{
    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom : 28px;
     color: #333333;
     transform:scale(1.25);
}
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .sub-image-1 {
    position: absolute;
    display: block;
    bottom: -40px;
    left: 20px;
  }
  .sub-image-2 {
    position: absolute;
    display: block;
    right: 25px;
    bottom: 0;
  }
  .sub-image-3 {
    position: absolute;
    display: block;
    left: -2%;
    margin-top: 12%;
  }
  .sub-image-4 {
    position: absolute;
    display: block;
    right: -7%;
    margin-top: 6%;
  }
  .sub-image-5 {
    position: absolute;
    display: block;
    margin-top: 34%;
    left: 3%;
  }
  .sub-image-6 {
    position: absolute;
    display: block;
    right: 4%;
    margin-top: 36%;
  }
    .down-align{

    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom: -1px;
    color: #3333334f;
    transition: all 1s ease;

}
.down-align:hover{

    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom: -1px;
    color: #333333;
     transform:scale(1.25);


}
.up-align{
    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom : 28px;
    color: #3333334f;
}
.up-align:hover{
    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom : 28px;
     color: #333333;
     transform:scale(1.25);
}
}
@media only screen and (min-width: 1280px) {
  .sub-image-1 {
    position: absolute;
    display: block;
    bottom: 100%;
  }
  .sub-image-2 {
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
  }
  .sub-image-3 {
    position: absolute;
    display: block;
    left: -10%;
    margin-top: 9%;
  }
  .sub-image-4 {
    position: absolute;
    display: block;
    right: -12%;
    margin-top: 3%;
  }
  .sub-image-5 {
    position: absolute;
    display: block;
    margin-top: 29%;
    left: -5%;
  }
  .sub-image-6 {
    position: absolute;
    display: block;
    right: 3%;
    margin-top: 29%;
  }
    .down-align{

    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom: -1px;
    color: #3333334f;
    transition: all 1s ease;

}
.down-align:hover{

    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom: -1px;
    color: #333333;
     transform:scale(1.25);


}
.up-align{
    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom : 28px;
    color: #3333334f;
}
.up-align:hover{
    position: absolute;
    cursor: pointer;
    right: -10%;
    bottom : 28px;
     color: #333333;
     transform:scale(1.25);
}
}
@media only screen and (min-width: 1441px) {
  .reviewbg {
    background: url(../assets/image/reviewbg.svg) no-repeat,
      linear-gradient(
        180deg,
        rgba(236, 240, 253, 0) 0%,
        rgba(236, 240, 253, 0.53) 14.32%,
        #ecf0fd33 45.83%,
        rgba(236, 240, 253, 0) 84.33%,
        rgba(236, 240, 253, 0) 100%
      );
    background-size: 50%;
    background-position: center 13rem;
    height: 79vh;
  }
  .sub-image-1 {
    position: absolute;
    display: block;
    bottom: 95%;
    left: 8%;
  }
  .sub-image-2 {
    position: absolute;
    display: block;
    right: 10%;
    bottom: 35px;
  }
  .sub-image-3 {
    position: absolute;
    display: block;
    left: -5%;
    margin-top: 7%;
  }
  .sub-image-4 {
    position: absolute;
    display: block;
    right: -6%;
    margin-top: 2%;
  }
  .sub-image-5 {
    position: absolute;
    display: block;
    margin-top: 27%;
    left: 0%;
  }
  .sub-image-6 {
    position: absolute;
    display: block;
    right: 5%;
    margin-top: 28%;
  }
  .down-align{

    position: absolute;
    cursor: pointer;
    right: -6%;
    bottom: -1px;
    color: #3333334f;
    transition: all 1s ease;

}
.down-align:hover{

    position: absolute;
    cursor: pointer;
    right: -6%;
    bottom: -1px;
    color: #333333;
     transform:scale(1.25);


}
.up-align{
    position: absolute;
    cursor: pointer;
    right: -6%;
    bottom : 28px;
    color: #3333334f;
}
.up-align:hover{
    position: absolute;
    cursor: pointer;
    right: -6%;
    bottom : 28px;
     color: #333333;
     transform:scale(1.25);
}
}
</style>
