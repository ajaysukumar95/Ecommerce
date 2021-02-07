<template>
  <v-app class="bg-gradient">
    <v-main>
      <NavBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.bg-gradient{
  background: linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%)!important;
}
.page-container{
  padding:125px 190px;
}
</style>
