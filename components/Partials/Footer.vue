<template>
  <v-footer absolute padless color="cyan lighten-4" class="bg-white border-top border-3">
    <div class="mx-auto mt-5 mb-3">
      <div class="row mx-0 px-0">
        <div class="col">
          <div class="mb-3 text-h4">Top Ranker</div>
          <v-btn class="mx-2 " icon elevation="5">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="mx-2 " icon elevation="5">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn class="mx-2 " icon elevation="5">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </div>
        <div class="footer col text-end">
          <p class="font-weight-black d-block">Company</p>
          <a class="smaller-font-size d-block" href="/about">About</a>
          <a class="smaller-font-size d-block" href="#">Contact Us</a>
          <a class="smaller-font-size d-block" href="#">Credits</a>
          <a class="smaller-font-size d-block" href="#">Jobs / Careers</a>
          <a class="smaller-font-size d-block" href="#">Become a Campus Repesentative</a>
        </div>
        <div class="footer col text-end">
          <p class="font-weight-black d-block">Developers</p>
          <a class="smaller-font-size d-block" href="#">Scoring</a>
          <a class="smaller-font-size d-block" href="#">Environment</a>
          <a class="smaller-font-size d-block" href="#">FAQs</a>
          <a class="smaller-font-size d-block" href="#">For University/College/ Institute</a>
        </div>
        <div class="footer col text-end">
          <p class="font-weight-black d-block">Companies</p>
          <a class="smaller-font-size d-block" href="#">Solutions</a>
          <a class="smaller-font-size d-block" href="#">Request a Feature</a>
          <a class="smaller-font-size d-block" href="#">Try for Free</a>
          <a class="smaller-font-size d-block" href="#">Pricing</a>
        </div>
        <div class="footer col text-end">
          <p class="font-weight-black d-block">Resource</p>
          <a class="smaller-font-size d-block" href="#">API</a>
          <a class="smaller-font-size d-block" href="#">Guides</a>
          <a class="smaller-font-size d-block" href="#">Videos</a>
          <a class="smaller-font-size d-block" href="#">Partners</a>
          <a class="smaller-font-size d-block" href="#">Events</a>
          <a class="smaller-font-size d-block" href="#">Tools</a>
          <a class="smaller-font-size d-block" href="#">Tutorials</a>
          <a class="smaller-font-size d-block" href="#">News</a>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
a.smaller-font-size.d-block{
  color: black;
  text-decoration: none;
}
a.smaller-font-size.d-block:hover{
  color: #57a0a9;
}
</style>
