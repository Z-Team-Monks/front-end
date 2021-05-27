<template>
  <div class="">
    <!-- <TheSlider /> -->
    <Ads :ad="[1, 2, 3]" />
    <NewProducts />
    <NewProducts />
  </div>
</template>

<script>
import TheSlider from "@/components/home/TheSlider";
import Ads from "@/components/home/Ads";
import NewProducts from "@/components/home/NewProducts";
export default {
  name: "Home",

  components: {
    TheSlider,
    Ads,
    NewProducts,
  },
};
</script>
