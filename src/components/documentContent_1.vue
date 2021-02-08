<template>
  <v-row>
    <v-col
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      cols="12"
      offset-sm="1"
      xs="4"
      lg="5"
      class="pa-0"
    >
      <img src="../assets/image/documentImage_1.svg" alt="docImage" class="document-image-1" />
    </v-col>
    <v-col
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      cols="12"
      xs="5"
      lg="5"
      class="card-body text-xs-center"
    >
      <div class="pt-10 hidden-sm-and-down"></div>
      <h4 class="card-title text-xs-center white--text text-capitalize">
        Develop
        <br />Without Limits
      </h4>
      <h6
        class="subtext-white pl-4 text-xs-center"
      >Commerce is developer friendly, too. Built with a REST API, Commerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</h6>
      <v-btn
        class="custom-transform-class text-sm-center text-none mt-9 px-5 ml-4 py-7 rounder-btn btn-effect"
        depressed
        color="secondary"
        dark
      >Read the Documentation</v-btn>
    </v-col>
  </v-row>
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
.document-image-1 {
  position: relative;
  width: 90%;
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  .document-image-1 {
    position: relative;
    width: 80%;
    margin: 12% 0% 0 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .document-image-1 {
    position: relative;
    margin-top: 3%;
    width: 50%;
    margin-left: 15%;
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
@media only screen and (min-width: 1025px) and (max-width: 1278px) {
  .document-image-1 {
    position: relative;
    height: 58%;
    margin-top: 0%;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .document-image-1 {
    position: relative;
    height: 510px;
    margin-top: -15%;
  }
}
@media only screen and (min-width: 1441px) {
  .document-image-1 {
    position: relative;
    margin-top: -13%;
    height: 620px;
  }
}
@media only screen and (min-width: 1681px) {
  .document-image-1 {
    position: relative;
    margin-top: -13%;
    height: 720px;
  }
}
</style>
