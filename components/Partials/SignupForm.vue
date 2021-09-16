<template>
  <v-card>
    <v-card-text>
      <v-form ref="signup" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" md="6" sm="6">
            <v-text-field v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required
                          solo></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-text-field v-model="lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required
                          solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="username" :rules="[rules.required]" label="Username" maxlength="20" required
                          solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model='password'
                          :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules='[rules.required,rules.min]'
                          :type="passShow ? 'text':'password'"
                          counter hint='At least 8 characters' label="Password" placeholder='Password' solo
                          @click:append='passShow=!passShow'></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="passwordConfirm"
                          :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, passwordMatch]"
                          :type="passShow ? 'text' : 'password'" counter label="Confirm Password"
                          solo @click:append="passShow = !passShow"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
            <v-btn block color="success" x-large @click="validate">Register</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      passShow: false,
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
      }
    }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.passwordConfirm || "Password must match";
    }
  },

  methods: {
    validate() {
      if (this.$refs.signup.validate()) {
        // submit form to server/API here...
      }
    },
  }
}
</script>

<style scoped>

</style>
