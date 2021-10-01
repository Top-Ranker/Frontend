<template>
  <v-container>
    <v-tabs v-model="tab" centered>
      <v-tab class="font-weight-bold">Login</v-tab>
      <v-tab class="font-weight-bold">Signup</v-tab>
      <v-tabs-slider color="cyan lighten-2"></v-tabs-slider>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <!-- LOGIN       -->
        <Login></Login>
      </v-tab-item>

      <v-tab-item>
        <!-- Signup       -->
        <Signup class="signupform"></Signup>

      </v-tab-item>
    </v-tabs-items>
  </v-container>

</template>

<script>
import Login from "./Partials/LoginForm";
import Signup from "./Partials/SignupForm";

export default {
  name: "LoginSignup",
  components: {Login, Signup},
  data() {
    return {
      tab: null,
    }
  },
}
</script>

<style scoped>
.signupform {
  height: 65vh;
  overflow: -moz-scrollbars-none;
  overflow-y: auto;
}
</style>
