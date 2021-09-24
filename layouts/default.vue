<template>
  <v-app>
    <AppBar/>
    <v-main>
      <Nuxt/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
/*
import Button from "../components/Partials/Button";
*/
import Footer from "../components/Partials/Footer";
import AppBar from "../components/Partials/AppBar";
export default {
  components: {AppBar,Footer},
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: '< Top Ranker LOGO >'
    }
  }
}
</script>

<style lang="scss">
.no-background-hover::before {
  background-color: transparent !important;
}
</style>
