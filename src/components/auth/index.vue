<template>
  <div class="">
    <div
      style="border: 1px solid; border-radius: none"
      :class="[
        signUpDiv
          ? 'wrapper__area sign-up__Mode-active shadow-lg border'
          : 'wrapper__area shadow-lg border',
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
            <template v-if="$v.loginName.$error">
              <small class="input__error_message" v-if="!$v.loginName.required"
                >Username can't be empty</small
              >
            </template>
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
            <template v-if="$v.loginPassword.$error">
              <small
                class="input__error_message"
                v-if="!$v.loginPassword.required"
                >Password can't be empty</small
              >
            </template>
          </div>
          <div class="form__actions">
            <!-- <label
              for="checkboxInput"
              class="remeber_me"
              style="margin-left: 10px"
            >
              <input type="checkbox" id="checkboxInput" />
              <span class="checkmark"></span>
              <span class="remember-me" style="margin-left: 10px"
                >Remeber Me</span
              >
            </label> -->
            <!-- <div class="forgot_password">Forgot Password?</div> -->
          </div>
          <!-- Login Button -->
          <button type="submit" class="submit-button" id="loginSubmitBtn">
            Sign in
          </button>
          <v-btn color="accent" plain
            >forgot password?
            <v-btn text :to="{ name: 'forgot' }">here</v-btn></v-btn
          >
          >
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
            <template v-if="$v.name.$error">
              <small class="input__error_message" v-if="!$v.name.required"
                >Username can't be empty</small
              >
            </template>
          </div>
          <div class="input__group">
            <label class="field">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                id="name"
                v-model.trim="$v.fullName.$model"
              />
            </label>
            <span class="input__icon"><i class="bx bx-user"></i></span>
            <template v-if="$v.fullName.$error">
              <small class="input__error_message" v-if="!$v.fullName.required"
                >Name can't be empty</small
              >
            </template>
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
            <template v-if="$v.email.$error">
              <small class="input__error_message" v-if="!$v.email.required"
                >Email can't be empty</small
              >
              <small class="input__error_message" v-if="!$v.email.email"
                >Invalid email</small
              >
            </template>
          </div>
          <div class="input__group">
            <label class="field">
              <input
                type="text"
                name="phone"
                v-model.trim="$v.phone.$model"
                placeholder="0911......"
                id="phone"
              />
            </label>
            <span class="input__icon"><i class="bx bx-at"></i></span>
            <template v-if="$v.phone.$error">
              <small class="input__error_message" v-if="!$v.phone.required"
                >phonenumber can not be empty</small
              >
            </template>
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
            <template v-if="$v.password.$error">
              <small class="input__error_message" v-if="!$v.password.required"
                >Password is required.</small
              >
              <small class="input__error_message" v-if="!$v.password.minLength"
                >Password length should be greater than 5 characters.</small
              >
            </template>
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
            <template v-if="$v.repeatPassword.$error">
              <small
                class="input__error_message"
                v-if="!$v.repeatPassword.sameAsPassword"
                >Passwords must be identical</small
              >
            </template>
          </div>
          <button type="submit" class="submit-button" id="signUpSubmitBtn">
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

    <v-snackbar v-model="registered">
      successfully Registerd!!
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="registered = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="registerFail">
      Please use valid information to register!!
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="registerFail = false">
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
    // passwordMatch() {
    //   return () => this.password === this.verify || "Password must match";
    // },
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
    registered: false,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" },
    ],
    valid: true,
    name: "",
    registerFail: false,
    email: "",
    password: "",
    repeatPassword: "",
    fullName: "",
    phone: "",
    verify: "",
    loginName: "",
    loginPassword: "",
    loginEmail: "",
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
    phone: {
      required,
    },
    fullName: {
      required,
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
      // if (this.$refs.registerForm.validate()) {
      // if (this.$v.$touch()) {
      this.$store
        .dispatch("auth/Register", {
          username: this.username,
          email: this.email,
          role: "user",
          phone: this.phone,
          password: this.password,
        })
        .then((res) => {
          this.registered = true
        }).catch(res => {
          this.registerFail = true
        });
      // }
    },
    toggleFormDiv() {
      this.signUpDiv = !this.signUpDiv;
    },

    AttemptSignUp() {
      this.firstSignUpBtnTouch = false;
      this.loginName = "somename";
      this.loginPassword = "someoneelse";
      this.$v.$touch();
      this.phone = this.phone.trim();
      let newPhonenumber = "";
      if (this.phone.startsWith("0")) {
        newPhonenumber = "+251" + this.phone.substring(1);
      }
      // if (!this.$v.$invalid) {
      this.$store
        .dispatch("auth/Register", {
          username: this.name.trim(),
          email: this.email.trim(),
          name: this.fullName,
          role: "user",
          phone: newPhonenumber,
          password: this.password.trim(),
        })
        .then((res) => {
          if (!this.$store.state.auth.hasError) {
            this.loginName = "";
            this.fullName = "";
            this.loginPassword = "";
            this.repeatPassword = "";
            this.name = "";
            this.email = "";
            this.role = "";
            this.phone = "";
            this.password = "";
          } else {
            console.log(this.$store.state.auth.message);

            this.$store.dispatch(
              "message/SaveMessage",
              this.$store.state.auth.message
            );
            this.$store.dispatch("message/ShowNotification");
            this.$store.dispatch("message/HideNotification");
          }
        });
      this.$v.$reset();
      // } else {
      //   console.log("yes");
      // }
      // this.$store.dispatch("auth/saveMessage" , "Loged in successfully")
      // console.log(this.$store.state.auth.message);

      // } else newPhonenumber = this.phone;

      // .then((r) => {
      //   this.username = "";
      //   this.email = "";
      //   this.phone = "";
      //   this.password = "";
      // });
      // }
    },
    //dummies
    signUp() {
      // this.firstSignUpBtnTouch = false;
    },
    signIn(e) {
      e.preventDefault();
      this.firstSignInBtnTouch = false;
      // if (this.$v.$touch()) {
      console.log("touched");
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
