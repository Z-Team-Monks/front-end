<template>
  <div class="">
    <!-- <TheSlider /> -->
    <!-- <Ads :ad="[1, 2, 3]" /> -->
    <TheSlider />

    <NewProducts />
    <NewShops />
    <NewsFeed />
    <NewsLetter />
  </div>
</template>

<script>
// import TheSlider from "@/components/home/TheSlider";
import Ads from "@/components/home/Ads";
import NewProducts from "@/components/home/NewProducts";

import TheSlider from "@/components/home/TheSlider";
import NewShops from "@/components/home/NewShops";
import NewsFeed from "@/components/home/NewsFeed";
import NewsLetter from "@/components/home/NewsLetter";
export default {
  name: "Home",

  components: {
    TheSlider,
    Ads,
    NewProducts,
    NewsFeed,
    NewsLetter,
    NewShops,
  },
};
</script>
