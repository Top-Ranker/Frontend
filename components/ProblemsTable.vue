<template>
  <v-container fluid>
    <div class="fluffy text-center pb-4">
      <v-pagination
        v-model="page"
        :length="pageCount"
        color="cyan accent-4">
      </v-pagination>
    </div>
    <v-card flat>
      <v-data-table
        :headers="headers"
        :items="problems"
        :items-per-page="itemsPerPage"
        :page.sync="page"
        class="elevation-1"
        hide-default-footer
        @page-count="pageCount = $event">
        <template #body="{ items }">
          <tbody>
          <tr
            v-for="item in items"
            :key="item.id">
            <td>
              <nuxt-link :to="'/problems/' + item.id"> {{ item.id }}</nuxt-link>
            </td>
            <td>
              <nuxt-link :to="`/problems/${item.id}`"> {{ item.name }}</nuxt-link>
            </td>
            <td>{{ item.difficulty }}</td>
            <td>{{ item.country }}</td>
            <td>
              <nuxt-link style="color: black" to="/">{{ item.owner }}</nuxt-link>
            </td>
            <td>
              <div v-for="dim in item.dimension" :key="dim.dimension" class="mb-1 font-weight-light">
                <span>for D={{ dim.dimension }}</span>
              </div>
            </td>
            <td>
              <div v-for="dim in item.dimension" :key="dim.dimension" class="mb-1 font-weight-light">
                <span>{{ dim.participationD }}</span>
              </div>
            </td>
            <td>{{ item.participationAll }}<br>
              <span>
              <nuxt-link to="/"> View all rankers of the problem</nuxt-link>

            </span>
            </td>
            <td>
              <v-btn outlined
                     shaped
                     @click="$router.push('/login')">Solve!
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProblemsTable",
  data() {
    return {
      page: 1,
      pageCount: 2,
      itemsPerPage: 15,
      headers: [
        {text: 'Problem #Id', align: 'start', sortable: true, value: 'id', width: '8%'},
        {text: 'Problem Name', value: 'name', width: '13%'},
        {text: 'Difficulty', value: 'difficulty', width: '7%'},
        {text: 'Country', sortable: false, value: 'country', width: '4%'},
        {text: 'Owner', sortable: false, value: 'owner', width: '12%'},
        {text: 'Problem Dimensions ', sortable: false, align: 'start', value: 'participationAll', width: '10%'},
        {text: 'Total Participations (Dimension wise)', sortable: false, value: 'participationAll', width: '10%'},
        {text: 'Total Participations (Problem Wise)', sortable: false, value: 'participationAll'},

      ],
    }
  },
  computed: {
    problems() {
      return this.$store.getters.getAllProblems
    }
  },
  methods: {},
}
</script>

<style>
.v-data-table-header th {
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: black;
  font-weight: bolder;
}
</style>
