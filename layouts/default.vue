<template>
  <v-app>
    <v-app-bar app color="cyan lighten-3"
               dense
               fixed>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn class="mx-3 no-background-hover"
             color="cyan lighten-3"
             depressed raised>
        Dashboard
      </v-btn>

      <v-btn class="mx-3 no-background-hover"
             color="cyan lighten-3"
             depressed raised>
        Problems
      </v-btn>
      <v-btn class="mx-3"
             color="cyan lighten-3"
             depressed raised>
        Contests
      </v-btn>
      <v-btn class="mx-3"
             color="cyan lighten-3"
             depressed raised>
        Leaderboard
      </v-btn>
      <v-btn class="mx-3"
             color="cyan lighten-3"
             depressed raised>
        Contribute
      </v-btn>
      <v-btn class="mx-3"
             color="cyan lighten-3"
             depressed raised>
        Statistics
      </v-btn>
      <v-btn class="mx-3"
             color="cyan lighten-3"
             depressed raised>
        Discuss
      </v-btn>
      <v-btn class="mx-3"
             color="cyan lighten-3"
             depressed raised>
        Sign In
      </v-btn>
    </v-app-bar>
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
      <!--      <Button button-name="Test" class="pa-12"></Button>-->
      <Nuxt/>
    </v-main>

  </v-app>
</template>

<script>
/*
import Button from "../components/Partials/Button";
*/

export default {
  components: {},
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
