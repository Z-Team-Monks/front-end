<template>
  <div v-if = "shop && shop.isVisible" class="row height ">
    <div class="col-xl-5 ">
      <div class="product-top">
        <div class="product-img">
          <a href="product-details.html">
            <img src="../../assets/img/product/pro13.jpg" alt="" />
            <img
              class="secondary-img"
              src="../../assets/img/product/pro14.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <div class="col-xl-7 my-auto">
      <div class="product-content pro-list-content pr-0">
        <h4>
          <a href="product-details.html">{{ shop.shopName }}</a>
        </h4>
        <p>
          {{ shop.description }}
        </p>
        <div class="product-action">
          <a @click="showShopDetails" title="Quick View">
            <i class="flaticon-eye"></i>
          </a>
          <a @click="followShop" title="Wishlist"
            ><i class="flaticon-like"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    showShopDetails(e) {
      e.preventDefault();
      console.log("show details");
    },

    followShop(e) {
      e.preventDefault();
      console.log("show details");
    },
  },
  props: {
    shop: {
      type: Object,
      required: false,
     
    },
  },
};
</script>

<style scoped>
.product-img {

    height: 200px;
}
</style>