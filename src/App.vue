<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  data: () => ({
    //
  }),
};
</script>

<style>

@import url("assets/css/bootstrap.min.css");
/* @import url("assets/css/owl.carousel.min.css"); */
@import url("assets/css/animate.min.css");
@import url("assets/css/magnific-popup.css");
@import url("assets/css/fontawesome-all.min.css");
@import url("assets/css/flaticon.css");
@import url("assets/css/meanmenu.css");
@import url("assets/css/slick.css");
@import url("assets/css/default.css");
@import url("assets/css/style.css");
@import url("assets/css/responsive.css"); 
</style>