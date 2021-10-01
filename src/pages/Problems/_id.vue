<template>
  <div>
    <ProblemCard :problem="problem"/>
  </div>
</template>

<script>
import ProblemCard from "../../components/ProblemCard";

export default {
  name: "ProblemId",
  components: {ProblemCard},
  asyncData({params, $axios}) {
    // When calling /abc the slug will be "abc"
    //Replaced by Actual route to get problem with id
    /*const problem = $axios.get('/problem/' + params.id)
    return {problem: problem.data}*/

    //TEMP
    return {problemId: params.id}
  },
  data() {
    return {
      problem: {}
    }
  },
  mounted() {
    this.problem = this.$store.getters.getProblem(Number(this.problemId))
    this.problem.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
      " Aliquid, aperiam cupiditate dicta, ducimus, eius eum fugit iusto nam nesciunt porro " +
      "quisquam repellendus sequi voluptates? Doloremque eius minus quae sequi tempore?" + "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
      " Aliquid, aperiam cupiditate dicta, ducimus, eius eum fugit iusto nam nesciunt porro " +
      "quisquam repellendus sequi voluptates? Doloremque eius minus quae sequi tempore?" + "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
      " Aliquid, aperiam cupiditate dicta, ducimus, eius eum fugit iusto nam nesciunt porro " +
      "quisquam repellendus sequi voluptates? Doloremque eius minus quae sequi tempore?";
  }
}
</script>

<style scoped>
</style>
