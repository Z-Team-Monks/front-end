<template>
  <div class="w-75 mx-auto">
    <br />
    <ShopHeader />
    <br />
    <br />
    <br />
    <br />
    <v-divider />
    <ShopFillter :products="products" />
  </div>
</template>

<script>
import ShopHeader from "@/components/shop/ShopHeader";
import ShopProducts from "@/components/shop/ShopProducts";
import ShopFillter from "@/components/shop/ShopFillter";
export default {
  components: {
    ShopHeader,
    ShopProducts,
    ShopFillter,
  },
  name: "shop",
  data() {
    return {};
  },
  created() {
    console.log("created in here");
    this.$store.dispatch("shops/GetShop" , this.$route.params.id)
    this.$store.dispatch("shops/GetShopProducts", this.$route.params.id);
  },
  computed: {
    products() {
      return this.$store.state.shops.shopProducts;
    },
  },
  methods: {},
  props: {},
};
</script>
