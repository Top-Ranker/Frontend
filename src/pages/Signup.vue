<template>
  <v-container>
    <SignupForm></SignupForm>
  </v-container>
</template>

<script>
import SignupForm from "../components/Partials/SignupForm";

export default {
  name: "Signup",
  components: {SignupForm},
  created() {
    if (this.$auth.loggedIn)
      this.$router.push('/')
  },
}
</script>

<style scoped>

</style>
