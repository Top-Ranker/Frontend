<template>
<v-container>
  <LoginSignup></LoginSignup>
  <Footer/>
</v-container>
</template>

<script>
import Footer from "../components/Partials/Footer";
import LoginSignup from "../components/LoginSignup";
export default {
  name: "Index",
  components: {LoginSignup, Footer}
}
</script>

<style scoped>

</style>
