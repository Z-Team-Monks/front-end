<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="password"
      label="New Password"
      required
    ></v-text-field>
    <v-text-field
      v-model="repeatPassword"
      label="Confirm Password"
      required
    ></v-text-field>
    <v-btn color="warning" @click="submit"> Reset </v-btn>
  </v-form>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  computed: {},

  created() {
    this.token = this.$route.query.token;
  },
  data: () => ({
    forget: true,
    valid: true,
    password: "",
    repeatPassword: "",
    token: "",
  }),

  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },

  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit(e) {
      e.preventDefault();
      this.$store
        .dispatch("auth/ResetPassword", {
          password: this.password,
          token: this.token,
        })
        .then((e) => {
          this.password = ""
          this.token = ""
          this.$router.push({name : "Auth"})
          console.log("password changes successfuly!");
        });
      // }
    },
    hideMessage() {
      this.$store.dispatch("message/HideNotification");
    },
  },
};
</script>

<style scoped>
</style>
