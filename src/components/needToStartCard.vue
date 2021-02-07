<template>
<div data-aos="zoom-out-up" data-aos-delay="100" data-aos-duration="1000">
  <div class="image-container">
    <img src="../assets/image/appleIcon.svg" class="appleIcon-align" alt="icon" />
    <img src="../assets/image/listItem.svg" class="listItem-align" alt="list" />
    <img src="../assets/image/needToStart.svg" width="100%" height="100%" alt="background" />
    </div>
    <div class="card-body">
      <h4 class="card-title text-capitalize">All you need to start</h4>
      <h6
        class="subtext pl-4"
      >Add Commerce plugin to any WordPress site and set up a new store in minutes.</h6>
      <v-btn plain rounded class="text-capitalize py-2 mt-2" color="ternary">
        Ecommerce for Wordpress
        <v-icon class="ml-0" right>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  
</div>
</template>

<script>
export default {
  name: "needToStartCard"
};
</script>

<style scoped>
.appleIcon-align {
  position: absolute;
  top: 9%;
  right: 80%;
}
.listItem-align {
  position: absolute;
  top: 15%;
  right: 51%;
  height: 89%;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
  /* For portrait layouts only */
  .appleIcon-align {
    position: absolute;
    top: 14%;
    right: 88%;
  }

  .listItem-align {
    position: absolute;
    top: 15%;
    right: 54%;
    height: 95%;
  }

}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  /* For landscape layouts only */
  .appleIcon-align {
    position: absolute;
    top: 11%;
    right: 80%;
  }
 
  .listItem-align {
    position: absolute;
    top: 16%;
    right: 53%;
    height: 93%;
  }
 
 
}

@media only screen and (min-width: 1025px) and (max-width: 1279px) {
  .appleIcon-align {
    position: absolute;
    top: 23%;
    right: 95%;
  }

  .listItem-align {
    position: absolute;
  top: 26%;
    right: 62%;
    height: 90%;
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .appleIcon-align {
    position: absolute;
    top: 11%;
    right: 95%;
  }

  .listItem-align {
  position: absolute;
    top: 21%;
    right: 69%;
    height: 93%;
  }

}
@media only screen and (min-width: 1441px) {
  .appleIcon-align {
    position: absolute;
    top: 11%;
    right: 95%;
  }
  .listItem-align {
       position: absolute;
    top: 18%;
    right: 66%;
    height: 95%;
  }

}
</style>
