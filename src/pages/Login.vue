<template>
  <v-container>
  <LoginForm></LoginForm>
  </v-container>
</template>

<script>
import LoginForm from "../components/Partials/LoginForm";

export default {
  name: "Login",
  components: {LoginForm},
  created() {
    if (this.$auth.loggedIn)
      this.$router.push('/')
  },
}
</script>

<style scoped>

</style>
