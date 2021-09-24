<template>
  <v-card flat>
    <v-card-text>
      <v-form ref="signup" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" md="6" sm="6">
            <v-text-field v-model="user.firstName" :rules="[rules.required]" label="First Name" maxlength="20" required
                          solo></v-text-field>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <v-text-field v-model="user.lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required
                          solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.username" :rules="[rules.required]" label="Username" maxlength="20" required
                          solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model='age'
              :items='age'
              :menu-props='{ maxHeight:200 }'
              :rules='[rules.required]'
              class='lang-choices'
              color='black'
              label='Age' outlined solo>
            </v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.email" :rules="[rules.required]" label="E-mail" required solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.field" :rules="[rules.required]" label="Field" required solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.profession" :rules="[rules.required]" label="Profession" required
                          solo></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.university" :rules="[rules.required]" label="University" required
                          solo></v-text-field>
          </v-col>


          <v-col cols="12">
            <v-text-field v-model='user.password'
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
          <v-col>
            <div class="text-center">
              <Button :style-object="style" name="Signup" @click="validate"/>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import Button from "./Button";

export default {
  name: "SignupForm",
  components: {Button},
  data() {
    return {
      style: {
        "--color": '#000',
        "--pady": '15px',
        "--padx": '45px',
        "--hover-background": 'black',
        "--hover-color": 'white',
      },
      valid: true,
      user: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        country: "",
        field: "",
        profession: "",
        university: "",
      },
      passwordConfirm: "",
      passShow: false,
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 8) || "Min 8 characters"
      },
      age: Array(45).fill(30).map((e, i) => i + 1),

    }
  },
  computed: {
    passwordMatch() {
      return () => this.user.password === this.passwordConfirm || "Password must match";
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
