<template>
  <div class="pro-item mr-2" v-if="shop.isVisible">
    <div class="product-wrapper mb-50">
      <div class="product-img mb-25">
        <a @click="emitProductDetail">
          <img :src=" shop.image ? shop.image : 'https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' " alt="" />
          <!-- <img
            class="secondary-img"
            src="../../assets/img/product/pro6.jpg"
            alt=""
          /> -->
        </a>
        <div class="product-action text-center">
          <router-link :to="{ name: 'shop', params: { id: shop.shopId } }">
            <i class="fas fa-link"></i>
          </router-link>
          <a href ="#" @click="EmitME">
            <v-icon> mdi-google-maps </v-icon>
          </a>
          <!-- <p>{{ shop.brand }}</p> -->
        </div>
      </div>
      <div class="product-content">
        <h6>
          {{ shop.name }}
        </h6>
        <p>{{ shop.buildingName }}</p>
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
    emitProductLike() {
      console.log("emitproductlike");
      this.$emit("emitProductLike", this.product.productId);
    },
    emitAddToCart(e) {
      e.preventDefault();
      console.log("emitaddtocart");
      this.$emit("emitAddToCart", this.product.productId);
    },
    emitProductDetail(e) {
      e.preventDefault();
    },
    preventMe(e) {
      e.preventDefault();
    },
    EmitME(e) {
      e.preventDefault();
      this.$emit("NearByModal")
      console.log("NearByModal")
    }
  },
  props: {
    shop: {
      type: Object,
      required: false,
    },
  },
};
</script>