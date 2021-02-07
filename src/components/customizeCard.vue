<template>
<div data-aos="zoom-out-up" data-aos-delay="150" data-aos-duration="1000">
  <div class="image-container">
    <img src="../assets/image/customizeCard.svg" width="100%" height="100%" alt="background" />
    <img src="../assets/image/subImage_1.svg" class="subImage-1" alt="subImage1" />
    <img src="../assets/image/subImage_2.svg" class="subImage-2" alt="subImage2" />
    <img src="../assets/image/subImage_3.svg" class="subImage-3" alt="subImage3" />
    <img src="../assets/image/subImage_4.svg" class="subImage-4" alt="subImage4" />
    <img src="../assets/image/subImage_5.svg" class="subImage-5" alt="subImage5" /> 
  </div>
    <div class="card-body">
      <h4 class="card-title text-capitalize">Customize and Extend</h4>
      <h6
        class="subtext pl-4"
      >From subscriptions to gym classes to luxury cars, Commerce is fully customizable.</h6>
      <v-btn plain rounded class="text-capitalize py-2 mt-2" color="ternary">
   Browse Extensions 
        <v-icon class="ml-0" right>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
</div>
  
</template>

<script>
export default {
  name: "customizeCard"
};
</script>

<style scoped>
  .subImage-1 {
    position: absolute;
    height: 50%;
    top: -40px;
    left: 9%;
  }

  .subImage-2 {
    position: absolute;
    height: 50%;
    right: 7px;
    top: 6px;
  }
  .subImage-3 {
    position: absolute;

    height: 50%;
    left: 9%;
    top: 25%;
  }
  .subImage-4 {
    position: absolute;
   
    height: 50%;
    right :8%;
    top: 30%;
  }
  .subImage-5 {
    position: absolute;
    height: 50%;
    left: 27%;
    bottom: -20px;
  }

</style>