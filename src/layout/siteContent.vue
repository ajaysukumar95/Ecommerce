<template>
  <div>
    <v-container
      fluid
      class="py-12 px-15 pb-0 site-contentBg"
      data-aos="fade-down"
      data-aos-delay="70"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <v-row class="site-content-align">
        <v-col cols="12" sm="12" md="4">
          <v-row>
            <v-col cols="2" class="pr-0">
              <img src="../assets/image/successIcon.svg" class="image-align" alt="success" />
            </v-col>
            <v-col cols="10" class="pl-0">
              <h6 class="subtitle-1 white--text font-weight-regular">
                30 day
                <strong>money back guarantee</strong>
              </h6>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-row>
            <v-col cols="2" class="pr-0">
              <img src="../assets/image/Union.svg" class="image-align" alt="union" />
            </v-col>
            <v-col cols="10" class="pl-0">
              <h6 class="subtitle-1 white--text font-weight-regular">
                <strong>Support</strong> teams across the world
              </h6>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-row>
            <v-col cols="2" class="pr-0">
              <img src="../assets/image/lock.svg" class="image-align" alt="lock" />
            </v-col>
            <v-col cols="10" class="pl-0">
              <h6 class="subtitle-1 white--text font-weight-regular">
                <strong>Safe & Secure</strong> online payment
              </h6>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="site-content-align pt-15 mt-10" justify="center">
        <img src="../assets/image/logoWhite.svg" alt="logo" />
      </v-row>
      <v-divider class="mx-15 my-15" color="#9A7DFF"></v-divider>
      <v-row justify="center" class="site-content-align1 pt-0">
        <v-col cols="12" offset-md="1" xs="6" sm="4" md="2">
          <h6 class="body-2 text-uppercase white--text font-weight-bold pb-5">Who are we</h6>
          <p class="mb-0 white--text caption">About</p>
          <p class="mb-0 white--text caption">Team</p>
          <p class="mb-0 white--text caption">Work With Us</p>
        </v-col>
        <v-col cols="12" xs="6" sm="4" md="2">
          <h6 class="body-2 text-uppercase white--text font-weight-bold pb-5">Commerce</h6>
          <p class="mb-0 white--text caption">Features</p>
          <p class="mb-0 white--text caption">Payments</p>
          <p class="mb-0 white--text caption">Marketing</p>
          <p class="mb-0 white--text caption">Shipping</p>
          <p class="mb-0 white--text caption">Extension Store</p>
          <p class="mb-0 white--text caption">eCommerce Blog</p>
          <p class="mb-0 white--text caption">Development Blog</p>
          <p class="mb-0 white--text caption">Ideas Board</p>
          <p class="mb-0 white--text caption">Mobile App</p>
          <p class="mb-0 white--text caption">Commuity</p>
          <p class="mb-0 white--text caption">Style Guide</p>
          <p class="mb-0 white--text caption">Email Newsletter</p>
        </v-col>
        <v-col cols="12" xs="6" sm="4" md="2">
          <h6 class="body-2 text-uppercase white--text font-weight-bold pb-5">other products</h6>
          <p class="mb-0 white--text caption">Storefront</p>
          <p class="mb-0 white--text caption">Slider</p>
          <p class="mb-0 white--text caption">Majax</p>
          <p class="mb-0 white--text caption">Majax Extension</p>
        </v-col>
        <v-col cols="12" xs="6" sm="4" md="2">
          <h6 class="body-2 text-uppercase white--text font-weight-bold pb-5">Support</h6>
          <p class="mb-0 white--text caption">Documentation</p>
          <p class="mb-0 white--text caption">Customizations</p>
          <p class="mb-0 white--text caption">Support Policy</p>
          <p class="mb-0 white--text caption">Contact</p>
          <p class="mb-0 white--text caption">COVID-19 Resources</p>
          <p class="mb-0 white--text caption">Privacy Notice for</p>
          <p class="mb-0 white--text caption">California Users</p>
        </v-col>
        <v-col cols="12" xs="6" sm="4" md="2">
          <h6 class="body-2 text-uppercase white--text font-weight-bold pb-5">We recommend</h6>
          <p class="mb-0 white--text caption">Experts</p>
          <p class="mb-0 white--text caption">Hosting Solutions</p>
          <p class="mb-0 white--text caption">Pre-sales FAQ</p>
          <p class="mb-0 white--text caption">Success Stories</p>
          <p class="mb-0 white--text caption">COVID-19 Resources</p>
          <p class="mb-0 white--text caption">Privacy Notice for</p>
          <p class="mb-0 white--text caption">Design Feedback Group</p>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="pt-4 pb-1 footer-container text-small-align">
      <v-col cols="12" sm="6" class=" text-small-align">
        <v-icon class="pr-8">mdi-twitter</v-icon>
        <v-icon class="px-6">mdi-facebook</v-icon>
        <v-icon class="px-6">mdi-rss</v-icon>
        <v-icon class="px-6">mdi-instagram</v-icon>
      </v-col>
      <v-col cols="12" class="text-right text-small-align" sm="6">
        <h5 class="caption">
          COPYRIGHT COMMERCE 2020 -
          <u>TERMS & CONDITIONS PRIVACY POLICY</u>
        </h5>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.site-contentBg {
  background: #7854f7;
}
.site-content-align {
  padding: 5% 5%;
}
.image-align {
  width: 25px;
  height: 25px;
}

@media only screen and (max-width: 600px) {
  .text-small-align {
    text-align: center!important;
  }
}
@media only screen and(min-width: 500px) and (max-width: 1366px) {
  .image-align {
    width: 30px;
    height: 30px;
  }
}
@media only screen and (min-width: 1367px) {
  .image-align {
    width: 30px;
    height: 30px;
  }
  .site-content-align {
    padding: 2% 15%;
  }
  .footer-container {
    padding: 0 11%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  .image-align {
    width: 25px;
    height: 25px;
  }
  .site-content-align {
    padding: 5% 30%;
  }
  .site-content-align1 {
    padding-left: 10%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .image-align {
    width: 25px;
    height: 25px;
  }
}
</style>
