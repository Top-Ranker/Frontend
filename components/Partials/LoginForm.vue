<template>
  <v-card class="px-4">
    <v-card-text>
      <v-form ref="login" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="user.username" :rules="[rules.required]" label="Username" solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model='user.password'
                          :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules='[rules.required,rules.min]'
                          :type="passShow ? 'text':'password'"
                          counter hint='At least 8 characters' label="Password" placeholder='Password' solo
                          @click:append='passShow=!passShow'></v-text-field>
          </v-col>
          <v-row>
          <v-col class="d-flex" cols="3" >
          </v-col>
          <v-col class="d-flex" cols="6" >
            <v-btn block color="success" @click="validate"> Login</v-btn>
          </v-col>
          <v-col class="d-flex" cols="3">
          </v-col>
          </v-row>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      passShow: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
      }
    }
  },
  computed: {},
  methods: {
    validate() {
      if (this.$refs.login.validate()) {
        // submit form to server/API here...
      }
    },
  }
}
</script>

<style scoped>

</style>
