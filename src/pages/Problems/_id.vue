<template>
  <div>
    <ProblemCard :problem='problem' />
  </div>
</template>

<script>
import ProblemCard from '../../components/ProblemCard'

export default {
  name: 'ProblemId',
  components: { ProblemCard },
  async asyncData({ params, $axios }) {
    // When calling /abc the slug will be "abc"
    //Replaced by Actual route to get problem with id
    const problem = await $axios.get('http://localhost:8000/api/problems/' + params.id)
    return { problem: problem.data }
  },
  mounted() {
    this.problem.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Aliquid, aperiam cupiditate dicta, ducimus, eius eum fugit iusto nam nesciunt porro ' +
      'quisquam repellendus sequi voluptates? Doloremque eius minus quae sequi tempore?' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Aliquid, aperiam cupiditate dicta, ducimus, eius eum fugit iusto nam nesciunt porro ' +
      'quisquam repellendus sequi voluptates? Doloremque eius minus quae sequi tempore?' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
      ' Aliquid, aperiam cupiditate dicta, ducimus, eius eum fugit iusto nam nesciunt porro ' +
      'quisquam repellendus sequi voluptates? Doloremque eius minus quae sequi tempore?'
  }
}
</script>

<style scoped>
</style>
