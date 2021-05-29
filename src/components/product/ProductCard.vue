<template>
  <div class="pro-item">
    <div class="product-wrapper mb-50">
      <div class="product-img mb-25">
        <a @click="emitProductDetail" href = "#">
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
          <span class="new">new</span>
          <span class="sale">sale</span>
        </div>
      </div>
      <div class="product-content">
        <div class="pro-cat mb-10">
          <a href="shop.html">decor, </a>
          <a href="shop.html">furniture</a>
        </div>
        <h4>
          <a href="product-details.html">Minimal Troma Furniture</a>
        </h4>
        <div class="product-meta">
          <div class="pro-price">
            <span>$119.00 USD</span>
            <span class="old-price">$230.00 USD</span>
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
      this.$emit("emitProductLike", 12);
    },
    emitAddToCart(e) {
      e.preventDefault();
      this.$emit("emitAddToCart", 12);
    },
    emitProductDetail(e) {
      e.preventDefault();
      this.$emit("emitProductDetail", 123);
    },
  },
  props: {},
};
</script>