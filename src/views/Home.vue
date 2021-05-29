<template>
  <div class="">
    <!-- <TheSlider /> -->
    <Ads :ad="[1, 2, 3]" />
    <NewProducts />
    <NewProducts />
    <NewsFeed />
    <NewsLetter />
  </div>
</template>

<script>
import TheSlider from "@/components/home/TheSlider";
import Ads from "@/components/home/Ads";
import NewProducts from "@/components/home/NewProducts";
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
  },
};
</script>
