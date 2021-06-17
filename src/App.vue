
<template>
  <div>
    <v-app>
      <TheHeader />
      <!-- <TheSlider /> -->
      <router-view />
      <TheFooter />
    </v-app>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
import TheSlider from "@/components/home/TheSlider";
import TheFooter from "@/components/common/TheFooter";

import axios from "axios";
console.log("initiate request");
axios
  .post("http://10.6.250.75:4444/api/v1/auth", {
    username: "abbi",
    password: "fake",
  })
  .then((r) => console.log("this is response: ", r.data))
  .catch((e) => console.log("this is error: ", e))
  .finally((g) => console.log("end request"));

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    TheSlider,
  },
  data: () => ({
    //
  }),
  created() {
    if (localStorage.getItem("isAuthenticated") == "true") {
      this.$store.dispatch("auth/ChangeStatus", false);
      this.$store.dispatch("auth/ChangeStatus", true);
    } else {
      this.$store.dispatch("auth/ChangeStatus", true);
      this.$store.dispatch("auth/ChangeStatus", false);
    }
  },
};
</script>

<style>
@import url("assets/css/bootstrap.min.css");
/* @import url("assets/css/owl.carousel.min.css"); */
@import url("assets/css/animate.min.css");
@import url("assets/css/auth.css");
@import url("assets/css/magnific-popup.css");
@import url("assets/css/fontawesome-all.min.css");
@import url("assets/css/flaticon.css");
@import url("assets/css/meanmenu.css");
@import url("assets/css/slick.css");
@import url("assets/css/default.css");
@import url("assets/css/style.css");
@import url("assets/css/responsive.css");
@import url("assets/css/notfound.css");
</style>