<template>
  <div class="">
    <div
      :class="[
        signUpDiv ? 'wrapper__area sign-up__Mode-active' : 'wrapper__area',
      ]"
      id="wrapper_Area"
    >
      <!-- Forms Area -->
      <div class="forms__area">
        <!-- Login Form -->
        <form class="login__form" @submit.prevent="signIn" id="loginForm">
          <!-- Form Title -->
          <h1 class="form__title">Sign In!</h1>
          <!-- inputs Groups -->
          <div class="input__group">
            <label class="field">
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="logInUsername"
                v-model.trim="$v.loginName.$model"
              />
            </label>
            <span class="input__icon"><i class="bx bx-user"></i></span>
            <small class="input__error_message" v-if="!$v.loginName.required"
              >Username can't be empty</small
            >
          </div>
          <div class="input__group">
            <label class="field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="loginPassword"
                v-model.trim="$v.loginPassword.$model"
              />
            </label>
            <span class="input__icon"><i class="bx bx-lock"></i></span>
            <span class="showHide__Icon"><i class="bx bx-hide"></i></span>
            <small
              class="input__error_message"
              v-if="!$v.loginPassword.required"
              >Password can't be empty</small
            >
          </div>
          <div class="form__actions">
            <label
              for="checkboxInput"
              class="remeber_me"
              style="margin-left: 10px"
            >
              <input type="checkbox" id="checkboxInput" />
              <span class="checkmark"></span>
              <span class="remember-me" style="margin-left: 10px"
                >Remeber Me</span
              >
            </label>
            <!-- <div class="forgot_password">Forgot Password?</div> -->
          </div>
          <!-- Login Button -->
          <button type="submit" class="submit-button" id="loginSubmitBtn">
            Sign in
          </button>
        </form>
        <!-- End Login Form -->

        <!-- Sign Up Form -->
        <form
          @submit.prevent="AttemptSignUp"
          class="sign-up__form"
          id="signUpForm"
        >
          <!-- Form Title -->
          <h1 class="form__title">Sign Up!</h1>
          <!-- inputs Groups -->
          <div class="input__group">
            <label class="field">
              <input
                type="text"
                name="username"
                placeholder="Username"
                id="signUpUsername"
                v-model.trim="$v.name.$model"
              />
            </label>
            <span class="input__icon"><i class="bx bx-user"></i></span>
            <small class="input__error_message" v-if="!$v.name.required"
              >Username can't be empty</small
            >
          </div>
          <div class="input__group">
            <label class="field">
              <input
                type="text"
                name="email"
                placeholder="Email@example.com"
                id="signUpEmail"
                v-model.trim="$v.email.$model"
              />
            </label>
            <span class="input__icon"><i class="bx bx-at"></i></span>
            <small class="input__error_message" v-if="!$v.email.required"
              >Email can't be empty</small
            >
            <small class="input__error_message" v-if="!$v.email.email"
              >Invalid email</small
            >
          </div>
          <div class="input__group">
            <label class="field">
              <input
                type="text"
                name="phone"
                placeholder="0911......"
                id="phone"
              />
            </label>
            <span class="input__icon"><i class="bx bx-at"></i></span>
            <small class="input__error_message"></small>
          </div>
          <div class="input__group">
            <label class="field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="signUpPassword"
                v-model.trim="$v.password.$model"
              />
            </label>
            <span class="input__icon"><i class="bx bx-lock"></i></span>
            <span class="showHide__Icon"><i class="bx bx-hide"></i></span>
            <small class="input__error_message" v-if="!$v.password.required"
              >Password is required.</small
            >
            <small class="input__error_message" v-if="!$v.password.minLength"
              >Password length should be greater than 5 characters.</small
            >
          </div>
          <div class="input__group confirm__group">
            <label class="field">
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                id="signUpConfirmPassword"
                v-model.trim="$v.repeatPassword.$model"
              />
            </label>
            <span class="input__icon"><i class="bx bx-lock"></i></span>
            <span class="showHide__Icon"><i class="bx bx-hide"></i></span>
            <small
              class="input__error_message"
              v-if="!$v.repeatPassword.sameAsPassword"
              >Passwords must be identical</small
            >
          </div>
          <button
            type="submit"
            class="submit-button"
            id="signUpSubmitBtn"
            @click="signUp()"
          >
            Sign Up
          </button>
        </form>
        <!-- End Sign Up Form -->
      </div>
      <!-- End Forms Area -->

      <!-- Aside Area -->
      <div class="aside__area" id="aside_Area">
        <div class="login__aside-info">
          <h4>Hello</h4>
          <img src="https://d.top4top.io/p_1945xjz2y1.png" alt="Image" />
          <p>Enter your personal details and start journey with us</p>
          <button
            @click="toggleFormDiv()"
            class="side-btn"
            id="aside_signUp_Btn"
          >
            Sign Up
          </button>
        </div>
        <div class="sign-up__aside-info">
          <h4>Welcome</h4>
          <img src="https://e.top4top.io/p_1945sidbp2.png" alt="Image" />
          <p>To Keep connected with us please login with your personal info</p>
          <button
            @click="toggleFormDiv()"
            class="side-btn"
            id="aside_signIn_Btn"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
    <v-snackbar :value="snackbar" :multi-line="multiLine">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="hideMessage">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";

export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
    snackbar() {
      return this.$store.state.message.showSnack;
    },

    text() {
      return this.$store.state.message.message;
    },
  },

  created() {
    this.$store.dispatch("message/HideNotification");
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" },
    ],
    valid: true,

    name: "",
    email: "",
    phoneNo: "",
    password: "",
    repeatPassword: "",

    phone: "",
    verify: "",
    loginName: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      (v) => !!v || "Required",
      // (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.testf(v) || "E-mail must be valid",
    ],
    phoneRules: [
      (v) => !!v || "Required",
      (v) => (v && v.length == 10) || "invalid phone number",

      // (v) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(v) || "phone number must be valid",
    ],

    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 6) || "Min 8 characters",
    },
    signUpDiv: false,
    firstSignUpBtnTouch: true,
    firstSignInBtnTouch: true,

    multiLine: true,
  }),

  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
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
    loginName: {
      required,
    },
    loginPassword: {
      required,
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

    login(e) {
      // if (this.$refs.loginForm.validate()) {
      // }
    },
    register() {
      if (this.$refs.registerForm.validate()) {
        this.$store.dispatch("auth/Register", {
          username: this.username,
          email: this.email,
          role: "user",
          phone: this.phone,
          password: this.password,
        });
      }
    },
    toggleFormDiv() {
      this.signUpDiv = !this.signUpDiv;
    },

    AttemptSignUp() {
      this.firstSignUpBtnTouch = false;

      // if (this.$refs.registerForm.validate()) {
      this.$store
        .dispatch("auth/Register", {
          username: this.username,
          email: this.email,
          role: "user",
          phone: this.phone,
          password: this.password,
        })
        .then((r) => {
          this.username = "";
          this.email = "";
          this.phone = "";
          this.password = "";
        });
      // }
    },
    //dummies
    signUp() {
      // this.firstSignUpBtnTouch = false;
    },
    signIn(e) {
      e.preventDefault();
      console.log("this is me");
      this.firstSignInBtnTouch = false;
      this.$store
        .dispatch("auth/Login", {
          username: this.loginName,
          password: this.loginPassword,
        })
        .then((e) => {
          // this.snackbar = this.$store.state.message.showSnack;
          if (this.snackbar) {
            if (this.$store.state.auth.message == "successfully logged in") {
              this.$router.push({ name: "user" });
            }
            console.log("success");
            this.$store.dispatch(
              "message/SaveMessage",
              this.$store.state.auth.message
            );
            this.$store.dispatch("message/HideNotification");
            this.$store.dispatch("message/ShowNotification");
          } else {
            this.$store.dispatch(
              "message/SaveMessage",
              this.$store.state.auth.message
            );
            this.$store.dispatch("message/ShowNotification");
            if (this.$store.state.auth.message == "successfully logged in") {
              this.$router.push({ name: "user" });
            }
          }
        });
    },
    hideMessage() {
      this.$store.dispatch("message/HideNotification");
    },
  },
};
</script>

<style scoped>
</style>
