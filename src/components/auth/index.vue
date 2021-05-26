<template>
  <div>
    <v-card class="mx-auto mt-5" max-width="500">
      <v-card-title class="title font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>
      <v-window v-model="step">
        <v-alert v-if="message != ''" type="error">
          I'm an error alert.
        </v-alert>
        <v-alert v-else-if="successMessage != ''" type="success"
          >Success! Redirecting
        </v-alert>
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
              label="Email"
              :value="email"
              :rules="emailRules"
              type="email"
              hint="email"
            ></v-text-field>
            <v-text-field
              hint="password"
              label="Password"
              type="password"
              :value="password"
            ></v-text-field>
            <v-btn
              class="mb-4"
              block
              :loading="loading4"
              :disabled="loading4"
              color="info"
              @click="AttemptLogin"
            >
              Login
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>
            <v-btn
              block
              :disabled="step === 3"
              color="primary"
              depressed
              @click="step++"
            >
              Create Account
            </v-btn>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <div class="text-center my-2">
                <v-avatar size="62">
                  <v-btn
                    :loading="loading5"
                    :disabled="loading5"
                    color="blue-grey"
                    class="ma-2 white--text"
                    fab
                  >
                    <v-icon dark> mdi-cloud-upload </v-icon>
                  </v-btn>
                </v-avatar>
                <div class="text-center">
                  <v-card-text> Profile Picture </v-card-text>
                </div>
              </div>
              <v-text-field
                v-model="username"
                label="Username"
                type="text"
                :rules="usernameRules"
              ></v-text-field>
              <v-text-field
                label="phone"
                v-model="phone"
                type="text"
                :rules="phoneRules"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                :rules="passwordRules"
              ></v-text-field>
              <v-text-field
                v-model="passwordConfirmation"
                label="Confirm Password"
                type="password"
                :rules="passwordConfirmationRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="https://img-premium.flaticon.com/png/512/709/709510.png?token=exp=1622063580~hmac=68194b3a531d09ec7e524b7ffa281d36"
            ></v-img>
            <h3 class="title font-weight-light  mb-2">
              Welcome to the Zembil Family
            </h3>
            <span class="caption grey--text ">Thanks for signing up!</span>
            <span class="d-block caption blue--text">Redirecting</span>
          </div>
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions v-if="step != 1">
        <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="step === 3"
          color="primary"
          depressed
          @click="AttemptRegister"
        >
          Create Account
        </v-btn>
        <!-- <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
          Next
        </v-btn> -->
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    // intent 1 means login or intent 2 means register
    return {
      valid: true,
      intent: 1,
      step: 1,
      email: "",
      password: "",
      passwordConfirmation: "",
      name: "",
      username: "",
      phone: "",
      role: "user",
      usernameRules: [(v) => !!v || "User Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        // (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => v.length <= 6 || "password less than 6 characters",
        (v) => !!v || "Password is required",
      ],
      passwordConfirmationRules: [
        (v) => v.length >= 6 || "password less than 6 characters",
        (v) => !!v || "Password is required",
        (v) =>
          this.passwordConfirmation === this.password || "Password mismatch!",
      ],
      phoneRules: [
        (v) => /.[2-9]{1}\d{2}/.test(v) || "Incorrect phonenumber",
        (v) => v.length === 10 || "phone number must be 10 digits!",
      ],
      /// loader
      loading5: false,
      loading4: false,
    };
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Login";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    },
    message() {
      return this.$store.state.auth.message;
    },
    successMessage() {
      return this.$store.state.auth.successMessage;
    },
  },
  methods: {
    AttemptLogin(e) {
      // this.$store.dispatch("auth/changeMessag  eStatus");
      this.loader = "loading4";
      this.$store.dispatch("auth/makeLoginRequest", {
        username: "Kidus",
        password: "123456",
      });
    },
    AttemptRegister(e) {
      this.validate();
      if (this.valid) {
        this.step++;
        // this.$store
        //   .dispatch("auth/makeRegisterLoginRequest", {
        //     username: this.username,
        //     email: this.email,
        //     password: this.password,
        //     phone: this.phone,
        //   })
        //   .then((res) => {
        //     // this.$route.redirect()
        //   });
        // this.reset();
      }
    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
