<template>
  <v-app-bar app color='cyan lighten-3'
             dense
             fixed>
    <nuxt-link to='/'>
      <v-toolbar-title v-text='title' />
    </nuxt-link>
    <v-spacer />

    <v-btn class='mx-1'
           color='cyan lighten-3'
           depressed to='/problems'>
      Problems
    </v-btn>
    <v-btn class='mx-1'
           color='cyan lighten-3'
           depressed>
      Contests
    </v-btn>
    <v-btn class='mx-1'
           color='cyan lighten-3'
           depressed>
      Leaderboard
    </v-btn>
    <v-btn class='mx-1'
           color='cyan lighten-3'
           depressed>
      Contribute
    </v-btn>
    <v-btn v-if='!$auth.loggedIn'
           class='mx-1'
           color='cyan lighten-3' depressed @click="$auth.redirect('login')">
      Login
    </v-btn>
    <v-btn v-if='!$auth.loggedIn'
           class='mx-1'
           color='cyan lighten-3' depressed @click="$router.push('/signup')">
      Signup
    </v-btn>

    <div v-else>
      <v-btn class='mx-1' color='cyan lighten-3' depressed raised>
        Welcome {{ $auth.user.username }}
      </v-btn>
      <v-btn class='mx-1' color='cyan lighten-3' depressed raised @click='$auth.logout()'>
        Logout
      </v-btn>
    </div>

  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      title: '$ Top Ranker LOGO'
    }
  }
}
</script>

<style>
.no-background-hover::before {
  background-color: transparent !important;
}

a {
  text-decoration: none;
  color: black !important;
}

a:hover {
  color: #1d8b9b !important;
}
</style>
