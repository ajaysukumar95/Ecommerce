<template>
  <div data-aos="zoom-out-up" data-aos-delay="180" data-aos-duration="1000">
    <div class="image-container">
      <img src="../assets/image/activeCard.svg" width="100%" height="100%" alt="background" />
      <img
        src="../assets/image/activeSubImage_2.svg"
        class="activeSubImage-1"
        alt="activeSubImage1"
      />
      <img
        src="../assets/image/activeSubImage_1.svg"
        class="activeSubImage-2"
        alt="activeSubImage2"
      />
      <img
        src="../assets/image/activeSubImage_3.svg"
        class="activeSubImage-3"
        alt="activrSubImage3"
      />
    </div>
    <div class="card-body">
      <h4 class="card-title text-capitalize">Active Community</h4>
      <h6 class="subtext pl-4">Commerce is one of the fastest-growing eCommerce communities.</h6>
      <v-btn plain rounded class="text-capitalize py-2 mt-2" color="ternary">
        Check our Forums
        <v-icon class="ml-0" right>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.activeSubImage-1 {
  position: absolute;
  height: 50%;
  top: -40px;
  left: 9%;
}

.activeSubImage-2 {
  position: absolute;
  height: 50%;
  right: 7px;
  top: -36%;
}
.activeSubImage-3 {
  position: absolute;
  height: 50%;
  right: -4%;
  top: 33%;
}
</style>
