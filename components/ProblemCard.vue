<template>
  <v-container>
    <v-card class="mt-6 elevation-0 pa-3">
      <h1 class="text-h3 font-weight-medium mb-3"> {{ problem.name }}</h1>
      <v-row>
        <v-col md="6" sm="12">
          <v-card class="stats mt-6 ml-4" flat>
            <div class="ma-2">
              <div> Problem Id :</div>
              {{ problem.id }}
            </div>
            <div class="ma-2">
              <div>Difficulty :</div>
              {{ problem.difficulty }}
            </div>
            <div class="ma-2">
              <div>Owner :</div>
              {{ problem.owner }}, {{ problem.country }}
            </div>
            <div class="ma-2">
              <div>Type :</div>
              Multi Model, Constraint, Multi Dimensional
            </div>
            <div class="ma-2">
              <div>Submission Date :</div>
              23 Dec 2017
            </div>
            <div class="ma-2">
              <div>Submissions :</div>
              {{ problem.participationAll }}
            </div>
          </v-card>
        </v-col>
        <v-col md="6" sm="12">
          <v-card flat>
            <v-card-title>Top Rankers</v-card-title>
            <v-simple-table class="mx-3">
              <template #default>
                <thead>
                <tr>
                  <th class="text-left" style="width: 10%">
                    Rank/Problem Dimension
                  </th>
                  <th class="text-left" style="width: 30%">
                    1st Position
                  </th>
                  <th class="text-left" style="width: 30%">
                    2nd Position
                  </th>
                  <th class="text-left" style="width: 30%">
                    3rd Position
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                  v-for="rank in ranks"
                  :key="rank.dimension">
                  <td>For D ={{ rank.dimension }}</td>
                  <td>{{ rank.first }}</td>
                  <td>{{ rank.second }}</td>
                  <td>{{ rank.third }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-card flat>
            <v-card-title>Problem Description:</v-card-title>
            <v-card-text>{{ problem.description }}</v-card-text>
            <v-card-text>{{ problem.description }}</v-card-text>
            <v-card-text>{{ problem.description }}</v-card-text>
            <v-card-title>Download Fitness Function Code:
            </v-card-title>
            <v-col>
              <v-select :items="lang" :value="language" color="black" outlined solo style="width:20%"></v-select>
              <v-btn bottom elevation="4" large outlined> Download</v-btn>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "ProblemCard",
  props: {
    problem: {
      type: Object,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      ranks: [
        {
          "dimension": 20,
          "first": "One",
          "second": "Two",
          "third": "Third",
          "participationD": 40
        },
        {
          "dimension": 50,
          "first": "One",
          "second": "Two",
          "third": "Third",
          "participationD": 50
        },
        {
          "dimension": 120,
          "first": "One",
          "second": "Two",
          "third": "Third",
          "participationD": 60
        }],
      lang: ['Python', 'Java', 'C++', 'C'],
      language: 'Python',

    }
  },
}
</script>

<style scoped>
.stats div div {
  display: inline-block;
  font-weight: bold;
}
</style>
