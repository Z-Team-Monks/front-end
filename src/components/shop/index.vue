<template>
  <div class="w-75 mx-auto">
    <br />
    <ShopHeader />
    <br />
    <br />
    <br />
    <br />
    <v-divider />
    <ShopFillter :products="products" :mine="myShop" />
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
    return {
      isMine: false,
    };
  },
  created() {
    console.log("created in here");
    this.$store.dispatch("shops/GetShop", this.$route.params.id);
    this.$store
      .dispatch("shops/GetShopProducts", this.$route.params.id)
      .then((res) => {
        if (
          JSON.parse(localStorage.getItem("user")).userId == this.shop.userId
        ) {
          this.isMine = true;
          console.log("my shop");
        } else {
          console.log("not mine");
          this.isMine = false;
        }
      });
  },
  computed: {
    products() {
      return this.$store.state.shops.shopProducts;
    },
    shop() {
      return this.$store.state.shops.shop;
    },
    myShop() {
      return this.isMine;
    },
  },
  methods: {},
  props: {},
};
</script>
