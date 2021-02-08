<template>
  <v-container fluid class="container-padding" data-aos="fade-up" data-aos-delay="70"  data-aos-easing="linear" data-aos-duration="1000">
    <v-row>
      <v-col cols="12" lg="6">
        <div class="hero-title">Lorem ipsum is placeholder text for previewing</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6">
        <h6 class="subtext">
          Commerce is a customizable, open-source eCommerce platform built on WordPress.
          Get started quickly and make your way.
        </h6>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="7" class="btn-align">
        <v-btn class="custom-transform-class text-none rounder-btn btn-effect" depressed color="primary" dark>Start a New Store</v-btn>
        <span class="pl-2 subtext">or</span>
        <v-btn plain rounded class="text-capitalize" color="ternary" dark>
          Customize & Extend
          <v-icon class="ml-0" right>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container-padding {
     padding: 30px 20px;
    background: url(../assets/image/featured-image.svg) no-repeat;
    background-position: center top 46em;
    background-size: 80%;
    height: 137vh;
}
.btn-effect:hover{
   box-shadow: 0px 15px 20px #8c57ff2e;
  color: #fff;
  transform: translateY(-7px);
}
.hero-title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 55px;
  line-height: 87px;
  color: #272d4e;
}

.btn-align {
  text-align: center;
}

.hero-subtitle-1 {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 42px;
  line-height: 70px;
  margin-top: 26rem;
  color: #272d4e;
}

@media only screen and (min-width: 768px) {
  .container-padding {
    padding: 40px 90px;
    background: url(/img/featured-image.91af4c6d.svg) no-repeat;
    background-position: center top 35rem;
    background-size: 70%;
    height: 112vh;
  }
  .hero-subtitle-1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 42px;
    line-height: 70px;
    margin-top: 38rem;
    color: #272d4e;
  }
}
/* Portrait */
@media only screen 
  and (min-width: 1024px) 
  and (max-height: 1366px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 1.5) {
    .container-padding{
    padding: 40px 90px;
    background: url(/img/featured-image.91af4c6d.svg) no-repeat;
    background-position: center top 27rem;
    background-size: 60%;
    height: 70vh!important;
}
  }


@media only screen and (min-width: 1024px) {
  .container-padding {
    padding: 40px 90px;
    background: url(/img/featured-image.91af4c6d.svg) no-repeat;
    background-position: center top 27rem;
    background-size: 60%;
    height: 137vh;
  }
}
@media only screen and (min-width: 1264px) and (max-width: 1365px) {
  .container-padding {
    padding: 125px 190px;
    background: url(/img/featured-image.91af4c6d.svg) no-repeat;
    background-position: right 0rem top 3.3rem;
    text-align: left;
    height: 96vh;
    background-size: 50%;
  }
  .hero-title {
    font-family: Montserrat;
    font-style: normal;
    text-align: left;
    font-weight: bold;
    font-size: 75px;
    line-height: 87px;
    color: #272d4e;
  }

  .btn-align {
    text-align: left;
  }
  .hero-subtitle-1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 42px;
    line-height: 70px;
    margin-top: 2rem;
    color: #272d4e;
  }
}

@media only screen and (min-width: 1365px) and (max-width: 1679px) {
  .container-padding {
    padding: 125px 190px;
    background: url(/img/featured-image.91af4c6d.svg) no-repeat;
    background-position: right 0rem top 3.3rem;
    text-align: left;
    height: 88vh!important;
    background-size: 50%;
  }
  .hero-title {
    font-family: Montserrat;
    font-style: normal;
    text-align: left;
    font-weight: bold;
    font-size: 75px;
    line-height: 87px;
    color: #272d4e;
  }

  .btn-align {
    text-align: left;
  }
  .hero-subtitle-1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 42px;
    line-height: 70px;
    margin-top: 2rem;
    color: #272d4e;
  }
}
@media only screen and (min-width: 1680px) {
  .container-padding {
    padding: 125px 190px;
    background: url(/img/featured-image.91af4c6d.svg) no-repeat;
    background-position: right 0rem top 3.3rem;
    text-align: left;
    height: 74vh;
    background-size: 50%;
  }
    .hero-subtitle-1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 42px;
    line-height: 60px;
    margin-top: 11.98rem;
    color: #272d4e;
  }
  .hero-title {
    font-family: Montserrat;
    font-style: normal;
    text-align: left;
    font-weight: bold;
    font-size: 75px;
    line-height: 87px;
    color: #272d4e;
  }

  .btn-align {
    text-align: left;
  }
  .hero-subtitle-1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 42px;
    line-height: 70px;
    margin-top: 2rem;
    color: #272d4e;
  }
}
</style>
