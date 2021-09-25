<template>
  <v-card class="px-12" flat>
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
            <v-col>
              <div class="text-center">
                <Button :style-object="style" name="Login" @click="validate"/>
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import Button from "./Button";

export default {
  name: "LoginForm",
  components: {Button},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      style: {
        "--color": '#000',
        "--pady": '15px',
        "--padx": '45px',
        "--hover-background": 'black',
        "--hover-color": 'white',
      },
      passShow: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => (v && v.length >= 3) || "Min 8 characters"
      }
    }
  },
  computed: {},
  methods: {
    async validate() {
      if (this.$refs.login.validate()) {
        // submit form to server/API here...
        try {
          await this.$auth.loginWith('local', {data: this.user})
        } catch (err) {
          console.log(err)
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
