<template>
  <div class="container w-75">
    <!-- <p class="">User Settings</p> -->
    <v-container fluid>
      <v-card>
        <v-btn @click="unlock" absolute top color="pink" right dark fab>
          <v-icon dark>{{ lockIcon }}</v-icon>
        </v-btn>
        <v-card-title> Account Details </v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col>
                <v-text-field
                  prepend-icon="mdi-account"
                  required
                  :value = "userDetails.username"
                  :disabled="disabled"
                  @change = "nameChange"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn class="mb-2" :disabled="nameDisabled" dark color="pink">
                  Update username
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div>
                  <div class="grey--text text-darken-1 mb-2">
                    Reset Password
                  </div>
                </div>
              </v-col>
              <v-col></v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  name="input-10-1"
                  :type="show1 ? 'text' : 'password'"
                  label="new password"
                  hint="At least 8 characters"
                  :disabled="disabled"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col></v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="passwordConfirmation"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  name="input-10-1"
                  :type="show1 ? 'text' : 'password'"
                  label="new password"
                  hint="At least 8 characters"
                  counter
                  :disabled="disabled"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col></v-col>
            </v-row>
            <v-row>
              <!--  add loading -->
              <v-col>
                <v-btn
                  v-if="disabled || passwordConfrim != passwordC"
                  color="pink"
                  right
                  light
                  disabled
                  block
                  >Reset Password</v-btn
                >
                <v-btn v-else color="pink" right dark block
                  >Reset Password</v-btn
                >
              </v-col>
              <v-col></v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      d_lockIcon: "mdi-lock",
      disabled: true,
      nameDisabled: true,
      show1: true,
      password: "",
      passwordConfirmation: "",
    };
  },
  created() {
    console.log("created")
    this.$store.dispatch("users/GetUserDetails",2)
  },
  computed: {
    userDetails() {
      return this.$store.state.users.userDetails
    },
    lockIcon() {
      return this.d_lockIcon;
    },
    passwordConfrim() {
      return this.passwordConfirmation;
    },
    passwordC() {
      return this.password;
    },
    nameDisabledC() {
        return this.nameDisabled;
    }
  },
  methods: {
    unlock(e) {
      this.disabled = !this.disabled;
      this.d_lockIcon =
        this.d_lockIcon === "mdi-lock" ? "mdi-lock-open-variant" : "mdi-lock";
      console.log("clicked");
      //
    },
    nameChange(e) {
        this.nameDisabled = !this.nameDisabled;
    }
  },
  props: {},
};
</script>