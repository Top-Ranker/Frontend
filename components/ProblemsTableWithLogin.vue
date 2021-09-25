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
        <template v-if="$auth.loggedIn"
                  #body="{ items }">
          <tbody>
          <tr
            v-for="item in items"
            :key="item.id">
            <td>
              <nuxt-link to="/"> {{ item.id }}</nuxt-link>
            </td>
            <td>
              <nuxt-link to="/"> {{ item.name }}</nuxt-link>
            </td>
            <td>{{ item.difficulty }}</td>
            <td>{{ item.country }}</td>
            <td>
              <nuxt-link style="color: black" to="/">{{ item.owner }}</nuxt-link>
            </td>
            <td>
          <tr>
            <div v-for="dim in item.dimension" :key="dim.dimension" class="mb-1 font-weight-light">
              <td>
                <v-row class="mt-1 justify-space-around">
                  <v-col class="mt-1" cols="2">for D={{ dim.dimension }}</v-col>
                  <v-col cols="7">
                    <v-text-field v-model="test" dense flat outlined solo/>
                  </v-col>
                  <v-col class="mt-3" cols="3">
                    <!--                    <Button :style-object="style" name="SOLVE!!"></Button>-->
                    <v-btn class="test" elevation="1" outlined small solo>Solve!</v-btn>
                  </v-col>
                </v-row>
              </td>
            </div>
          </tr>
          </td>
          <td>
            <div v-for="dim in item.dimension" :key="dim.dimension"
                 class="mb-1 font-weight-light">
              <p class="text-center mr-6">
                35/{{ dim.participationD }}
                <br>
                view all my submissions
              </p>
            </div>
          </td>
          <td class="text-center">{{ item.participationAll }}<br>
            <nuxt-link to="/"> View all rankers of the problem</nuxt-link>
          </td>
          </tr></tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
//import Button from "./Partials/Button";

export default {
  name: "ProblemsTableWithLogin",
  /*  components: {Button},*/
  data() {
    return {
      page: 1,
      test: '',
      pageCount: 2,
      itemsPerPage: 15,
      style: {
        "--color": 'black',
        "--pady": '5px',
        "--padx": '15px',
        "--hover-background": 'black',
        "--hover-color": '#fff',
      },
      style2: {
        "--color": 'black',
        "--pady": '5px',
        "--padx": '15px',
        "--hover-background": 'cyan',
        "--hover-color": 'black',
      },
      headers: [
        {text: 'Problem #Id', align: 'start', sortable: true, value: 'id', width: '4%'},
        {text: 'Problem Name', value: 'name', width: '8%'},
        {text: 'Difficulty', value: 'difficulty', width: '5%'},
        {text: 'Country', sortable: false, value: 'country', width: '5%'},
        {text: 'Owner', sortable: false, value: 'owner', width: '8%'},
        {text: 'Submit Solution', sortable: false, align: 'start', value: 'participationAll'},
        {text: 'My Ranking (Problem Dimention Wise)', sortable: false, value: 'participationAll'},
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

.test:hover {
  color: white;
  background-color: black;
}
</style>
