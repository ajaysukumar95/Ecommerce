<template>
  <v-container fluid class="page-container">
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        lg="4"
        xl="4"
        class="text-center"
        data-aos="zoom-out-up"
        data-aos-easing="linear"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <h6 class="hero-subtitle-1">
          Your eCommerce
          made simple
        </h6>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="4" class="pa-0">
        <needToStartCard />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <div class="mt-7 hidden-md-and-up"></div>
        <div class="mt-12 hidden-sm-and-down"></div>
        <customizeCard />
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <div class="mt-15 pt-15 hidden-md-only"></div>
        <communityCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import needToStartCard from "../components/needToStartCard.vue";
import customizeCard from "../components/customizeCard.vue";
import communityCard from "../components/communityCard.vue";
export default {
  name: "cardLayout",
  components: {
    needToStartCard,
    customizeCard,
    communityCard
  }
};
</script>

<style>
.hero-subtitle-1 {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 42px;
  line-height: 70px;
  margin-top: 2rem;
  color: #272d4e;
}
</style>