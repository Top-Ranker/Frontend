<template>
  <v-row>
    <v-col md='8' sm='12' xs='12'>
      <v-form ref='Soln' class='input-field'>
        <v-text-field v-if='forceRerender' v-model='solution' :messages='message'
                      :rules='[rules.required,rules.commaSep]' dense
                      flat outlined solo>
          <template #message='{ message }'>
            <span>{{ message }}</span>
            <span v-if='lengthError'></span>
          </template>
        </v-text-field>
      </v-form>
    </v-col>
    <v-col md='4' sm='12' xs='12'>
      <v-btn class='test' elevation='1' outlined small solo
             @click='validate()'>Solve
      </v-btn>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: 'InputFiled',
  props: {
    problemid: {
      type: Number,
      required: true
    },
    dimension: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      rules: {
        required: value => !!value || 'Required.',
        commaSep: value => !!/^\d+(,\d+)*$/.test(value) || 'Comma Seperated Integers only'
      },
      solution: '',
      lengthError: false,
      forceRerender: true
    }
  },
  computed: {
    message() {
      if (this.lengthError) {
        return 'Input length does not match expected length'
      } else
        return null
    }
  },
  methods: {
    validate() {
      if (this.$refs.Soln.validate()) {
        if (this.solution.split(',').length === this.dimension) {
          //CONTINUE
          this.lengthError = false
        } else {
          //SHOW ERROR THAT INPUT LENGTH DOES NOT MATCH EXPECTED LENGTH
          this.lengthError = true
          return
        }
        this.$emit('handleSolution', {
          problemid: this.problemid,
          dimension: this.dimension,
          solution: this.solution
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
