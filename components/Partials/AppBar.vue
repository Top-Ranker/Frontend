<template>
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
