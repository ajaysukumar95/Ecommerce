<template>
  <div>
    <v-container fluid class="py-12 px-15 pb-0">
      <v-row justify="center">
        <v-col
          class="text-center"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-easing="linear"
          data-aos-duration="1000"
          cols="12"
        >
          <h1 class="title-text">Supported by real people</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-easing="linear"
          data-aos-duration="1000"
          cols="12"
          sm="6"
          class="subtext text-center px-10 pb-11"
        >Our team of Engineers works remotely from 44 countries providing customer support across multiple time zones.</v-col>
      </v-row>
      <div class="support-bg" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <img src="../assets/image/supportPeople.svg" class="people-group" alt="people" />
      </div>
    </v-container>
    <div
      class="support-details"
      data-aos="fade-up"
      data-aos-delay="70"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <v-row class="padding-lg">
        <v-col cols="12" offset-sm="2" xs="12" class="pa-0" sm="6">
          <h3 class="support-title text-xs-center">
            Commerce - the
            <strong>most customizable eCommerce platform</strong> for building
            <strong>your online business.</strong>
          </h3>
        </v-col>
        <v-col cols="12" xs="12" sm="3" class="text-center pa-0">
          <v-btn
            class="px-7 py-7 rounder-btn font-weight-bold"
            outlined
            color="#fff"
            dark
          >Get started</v-btn>
        </v-col>
        <img src="../assets/image/supportCircle.svg" alt="circle" class="support-cirlce" />
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title-text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 43px;
}
.support-bg {
  background: url(../assets/image/supportBg.svg) no-repeat;
  background-size: cover;
  background-position: 0rem 1rem;
}
.people-group {
  width: 73%;
  margin-left: 14%;
}
.support-title {
  font-weight: 400;
  font-size: 30px;
}
.support-details {
  background: #5f37ef;
  color: #fff;
  position: relative;
}
.padding-lg {
  padding: 90px 0px;
}
.support-cirlce {
  position: absolute;
  bottom: 0;
  right: 3%;
  bottom: -10%;
}
@media only screen and (max-width: 500px) {
  .text-xs-center {
    text-align: center;
  }
}
</style>
