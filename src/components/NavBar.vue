<template>
<div data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
  <v-app-bar  color="transparent" class="ml-8 mr-6 my-7" dense flat>
    <img src="../assets/image/LOGO.png" height="16" width="94" alt="Logo" class="mr-10" />
    <div class="hidden-sm-and-down" v-for="(item,index) in navItem" :key="index">
      <v-btn text class="text-capitalize px-2 py-0 mr-4" min-width="0">
        <span class="font-medium">{{item}}</span>
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-btn text class="text-capitalize font-medium ml-7 mr-5 hidden-sm-and-down">
      <span class="font-medium">Log In</span>
    </v-btn>
    <v-btn color="primary" depressed class="text-capitalize btn-padding mr-3" height="40">
      <span class="font-medium">Get Started</span>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn plain v-bind="attrs" v-on="on" class="hidden-md-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list color="#e5f0ff">
        <v-list-item v-for="(item, index) in menuIitems" :key="index" link>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</div>
</template>

<script>
export default {
  data() {
    return {
      navItem: ["Sell", "Marketplace", "Community", "Develop", "Resources"],
      menuIitems: [
        { title: "Sell" },
        { title: "Marketplace" },
        { title: "Community" },
        { title: "Develop" },
        { title: "Resources" },
        { title: "Log In" }
      ]
    };
  }
};
</script>

<style scoped>
.font-medium {
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0;
}
.btn-padding {
  padding: 13px 11px !important;
}
</style>