<template>
  <v-app-bar app color="cyan lighten-3"
             dense
             fixed>
    <v-toolbar-title v-text="title"/>
    <v-spacer/>
    <v-btn class="mx-3 no-background-hover"
           color="cyan lighten-3"
           depressed>
      Dashboard
    </v-btn>

    <v-btn class="mx-3 no-background-hover"
           color="cyan lighten-3"
           depressed>
      Problems
    </v-btn>
    <v-btn class="mx-3"
           color="cyan lighten-3"
           depressed>
      Contests
    </v-btn>
    <v-btn class="mx-3"
           color="cyan lighten-3"
           depressed>
      Leaderboard
    </v-btn>
    <v-btn class="mx-3"
           color="cyan lighten-3"
           depressed>
      Contribute
    </v-btn>
    <v-btn class="mx-3"
           color="cyan lighten-3"
           depressed>
      Statistics
    </v-btn>
    <v-btn class="mx-3"
           color="cyan lighten-3"
           depressed>
      Discuss
    </v-btn>
    <v-btn v-if="!$auth.loggedIn"
           class="mx-3"
           color="cyan lighten-3" depressed>
      Sign In
    </v-btn>
    <div v-else>
      <v-btn class="mx-3" color="cyan lighten-3" depressed raised>
        Welcome {{ $auth.user.username }}
      </v-btn>
      <v-btn class="mx-3" color="cyan lighten-3" depressed raised @click="$auth.logout()">
        Logout
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      title: '< Top Ranker LOGO >'
    }
  },
}
</script>

<style scoped>
.no-background-hover::before {
  background-color: transparent !important;
}
</style>
