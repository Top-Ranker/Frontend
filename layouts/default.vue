<template>
  <v-app>
    <AppBar/>
    <!--    <v-navigation-drawer
          v-model="drawer"
          :mini-variant="miniVariant"
          :clipped="clipped"
          fixed
          app
        >
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <v-container>
            <Nuxt />
          </v-container>
        </v-main>
        <v-navigation-drawer
          v-model="rightDrawer"
          :right="right"
          temporary
          fixed
        >
          <v-list>
            <v-list-item @click.native="right = !right">
              <v-list-item-action>
                <v-icon light>
                  mdi-repeat
                </v-icon>
              </v-list-item-action>
              <v-list-item-title>Switch drawer (click me)</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-footer
          :absolute="!fixed"
          app
        >
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>-->
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
