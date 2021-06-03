<template>
    <div class="pro-item mr-2" v-if="product.isVisible">
      <div class="product-wrapper mb-50">
        <div class="product-img mb-25">
          <a @click="emitProductDetail" href="#">
            <img src="../../assets/img/product/pro3.jpg" alt="" />
            <img
              class="secondary-img"
              src="../../assets/img/product/pro6.jpg"
              alt=""
            />
          </a>
          <div class="product-action text-center">
            <a @click="emitAddToCart" href="" title="Shoppingb Cart">
              <i class="flaticon-shopping-cart"></i>
            </a>
            <a @click="emitProductDetail" href="" title="Quick View">
              <i class="flaticon-eye"></i>
            </a>
          </div>
          <div class="sale-tag">
            <span v-if = "new String(product.condition).valueOf() == new String('New').valueOf()" class="new">new</span>
          </div>
        </div>
        <div class="product-content">
          <div class="pro-cat mb-10">
            <a @click="preventMe"> {{ product.brand }} </a>
          </div>
          <h4>
            <a class="text-dark w-100" href="product-details.html">{{
              product.productName
            }}</a>
          </h4>
          <div class="product-meta">
            <div class="pro-price">
              <span>{{ product.price }} ETB</span>
              <span class="old-price">150 ETB</span>
            </div>
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
      console.log("productDetail");
      e.preventDefault();
      this.$emit("emitProductDetail", this.product.productId);
    },
    preventMe(e) {
      e.preventDefault();
    },
  },
  props:  {
    product: {
      type: Object,
      required: false
    }
  }
};
</script>