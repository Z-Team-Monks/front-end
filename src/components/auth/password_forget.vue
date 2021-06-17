<template>
  <div class="w-50 container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="email" label="E-mail" required></v-text-field>
      <v-btn color="warning" @click="submit"> Send Email </v-btn>
    </v-form>
  </div>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";

export default {
  computed: {},

  created() {},
  data: () => ({
    valid: true,
    email: "",
  }),

  validations: {
    email: {
      email,
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },

  methods: {
    validate(e) {
      if (this.$refs.loginForm.validate()) {
        this.reset();
        this.resetValidation();
        this.submit(e);
      } else {
        console.log("validation error");
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
        .dispatch("auth/SendResetEmail", {
          email: this.email,
          host: window.location.origin,
        })
        .then((e) => {
          this.email = "";
          console.log("email sent");
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
