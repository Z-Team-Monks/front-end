<template>
  <div v-if="shop && shop.isVisible" class="row height">
    <div class="col-xl-5">
      <div class="product-top">
        <div class="product-img rounded">
          <router-link :to="{ name: 'shop', params: { id: shop.shopId } }">
            <img src="../../assets/img/product/pro13.jpg" alt="" />
            <img
              class="secondary-img"
              src="../../assets/img/product/pro14.jpg"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-xl-7 my-auto">
      <div class="product-content pro-list-content pr-0">
        <h4>
          <router-link :to="{ name: 'shop', params: { id: shop.shopId } }">{{
            shop.shopName
          }}</router-link>
        </h4>
        <p>
          Follower: 102
          <br>
          {{ shop.description }}
        </p>
        <div class="product-action">
          <!-- <a @click="showShopDetails" title="Quick View">
            <i class="flaticon-eye"></i>
          </a> -->
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