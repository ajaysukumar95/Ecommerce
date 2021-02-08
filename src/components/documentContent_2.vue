<template>
<div>
  <v-row class="hidden-md-and-down">
    <v-col data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" class="card-body" cols="12" offset-sm="2" xs="5" md="4">
      <h4 class="card-title pt-10 white--text text-capitalize">
        Know our
        <br />Global Community
      </h4>
      <h6
        class="subtext-white pl-4"
      >Commerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</h6>
      <v-btn
        class="custom-transform-class text-none mt-9 px-5 ml-4 py-7 rounder-btn btn-effect"
        depressed
        color="secondary"
        dark
      >Read the Documentation</v-btn>
    </v-col>
    <v-col data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-delay="150"
     data-aos-duration="1500" cols="12" xs="5" lg="4">
      <img src="../assets/image/documentImage_2.svg" alt="docImage" class="document-image-2" />
    </v-col>
  </v-row>
    <v-row class="hidden-lg-and-up">
    <v-col cols="12" xs="5" lg="5" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-delay="150"
     data-aos-duration="1500">
      <img src="../assets/image/documentImage_2.svg" alt="docImage" class="document-image-2" />
    </v-col>
        <v-col class="card-body" cols="12"  xs="12" md="12" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-delay="150"
     data-aos-duration="1500">
      <h4 class="card-title white--text text-capitalize">
        Know our
        <br />Global Community
      </h4>
      <h6
        class="subtext-white pl-4"
      >Commerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</h6>
      <v-btn
        class="custom-transform-class text-none mt-9 px-5 ml-4 py-7 rounder-btn btn-effect"
        depressed
        color="secondary"
        dark
      >Read the Documentation</v-btn>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-effect:hover{
  box-shadow: 0px 15px 20px #5dcb0047;
  color: #fff;
  transform: translateY(-7px);
}
.document-image-2 {
      position: relative;
     width: 90%;

}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  .document-image-2 {
    position: relative;
   width: 80%;
    margin: 12% 0% 0 8%;
}
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .document-image-2 {
    position: relative;
    margin-top: 3%;
    width: 50%;
margin-left: 23%;

  }
   .card-body{
      text-align: center;
  }
  .card-title{
      text-align: center;
  }
  .subtext-white{
      text-align: center
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1279px) {
  .document-image-2 {
    position: relative;
    height: 73%;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .document-image-2 {
 position: relative;
    width: 445px;
    height: 470px;
    margin-bottom: -12%;
  }
}
@media only screen and (min-width: 1441px) {
  .document-image-2 {
        position: relative;
    width: 100%;
    width: 450px;
    margin-bottom: -12%;
  }
  @media only screen and (min-width: 1681px) {
  .document-image-2 {
       position: relative;
    margin-bottom: -12%;
    height: 648px;
    width: 100%;
  }
  .card-title {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 32px;
    margin-top: 30px;
    padding-bottom: 15px;
}
  }
}
</style>
