<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab>Login</v-tab>
      <v-tab>Signup</v-tab>
      <v-tabs-slider color="cyan lighten-2"></v-tabs-slider>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <!-- LOGIN       -->
        <Login></Login>
      </v-tab-item>

      <v-tab-item>
        <!-- Signup       -->
        <Signup></Signup>
      </v-tab-item>
    </v-tabs-items>
  </v-container>

</template>

<script>
import Login from "./Partials/Login";

export default {
  name: "LoginSignup",
  components: {Login},
  data() {
    return {
      tab: null
    }
  },
}
</script>

<style scoped>

</style>
