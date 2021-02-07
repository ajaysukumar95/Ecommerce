<template>
  <div class="documentBg pt-12">
    <v-container fluid class="page-container">
      <v-row>
        <documentContent1 />
      </v-row>
      <v-row>
        <documentContent2 />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import documentContent1 from "../components/documentContent_1.vue";
import documentContent2 from "../components/documentContent_2.vue";
export default {
  components: {
    documentContent1,
    documentContent2
  }
};
</script>

<style scoped>
.documentBg {
  background: url(../assets/image/documentBg1.svg) no-repeat;
  margin-top: 7%;
  background-size: cover;
  background-position: center center;
}
.document-image-1 {
  position: relative;
  height: 90%;
  margin-left: -15%;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  .document-image-1 {
    position: relative;
    height: 83%;
    margin: 12% 0% 0 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .document-image-1 {
    position: relative;
    margin-top: 3%;
    height: 100%;
    float: left;
    margin-left: -13%;
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1279px) {
  .document-image-1 {
    position: relative;
    height: 58%;
    margin-top: 0%;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .documentBg {
    background: url(../assets/image/documentBg1.svg) no-repeat;
    margin-top: 7%;
    background-size: cover;
    background-position: center center;
  }
  .document-image-1 {
    position: relative;
    height: 73%;
    margin-top: 0%;
  }
  .document-image-2 {
    position: relative;
    height: 73%;
  }
}
@media only screen and (min-width: 1441px) {
  .document-image-1 {
    position: relative;
    margin-top: -21%;
    height: 100%;
  }
  .document-image-2 {
    position: relative;
    margin-bottom: -12%;
    height: 100%;
  }
}
</style>