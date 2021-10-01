<template>
  <v-card class="rounded-b" hover>
    <v-card-title class="font-italic text-subtitle-1 font-weight-medium ">Top Rankings</v-card-title>
    <v-simple-table class="ml-12" style="width: 80%">
      <template #default>
        <tbody>
        <tr>
          <td>
            <nuxt-link to="userprofile/">Lim Choo, China</nuxt-link>
          </td>
          <td>
            <nuxt-link to="userprofile/">Liquid Water, India</nuxt-link>
          </td>
          <td>
            <nuxt-link to="userprofile/">Boris Baker, Poland</nuxt-link>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-card-title class="font-italic text-subtitle-1 font-weight-medium">Top Contributor</v-card-title>
    <v-simple-table class="pb-6 ml-12" dense style="width: 80%">
      <template #default>
        <tbody>
        <tr>
          <td>
            <nuxt-link to="userprofile/"> JC Bansal,
              SAU, India.
            </nuxt-link>
          </td>
          <td>
            <nuxt-link to="userprofile/">Manoj Tiwari,
              IIT Kgp, India
            </nuxt-link>
          </td>
          <td>
            <nuxt-link to="userprofile/">Manoj Thakur,
              IIT Mandi, India
            </nuxt-link>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "TopRankTables"
}
</script>

<style scoped>
table, th, td {
  border: 1px solid darkgray;
}

a {
  text-decoration: none;
  color: rgba(75, 75, 75, 0.96);
}

a:hover {
  color: #24adc4;
}

</style>
