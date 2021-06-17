<template>
  <v-row justify="center p-2">
    <v-dialog v-model="show" max-width="850">
      <v-card v-if="prod" class="p-3">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon x-small color="green darken-1" text @click="emitClose">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-img
                contain
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="200"
                :src="
                  prod.imageUrl
                    ? prod.imageUrl
                    : 'https://picsum.photos/id/11/500/300'
                "
              ></v-img>
            </v-col>
            <!-- <v-col cols="1" /> -->
            <v-col cols="6">
              <h1>{{ prod.product.productName }}</h1>
              <div class="details-cat mb-20">
                {{ prod.product.brand }}
              </div>
              <h2 class="pro-details-title">{{ prod.productName }}</h2>
              <div class="details-price mb-20">
                <span>{{ prod.price }} ETB</span>
                <span class="old-price">59.99 ETB</span>
              </div>

              <div class="product-desc variant-item">
                <p>{{ prod.description }}</p>
              </div>
              <v-btn
                @click="AddToCart"
                outlined
                color="red lighten--4"
                dark
                tile
                block
              >
                <v-icon left>mdi-cart</v-icon>
                Add To Cart
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.show = this.dialog;
  },

  methods: {
    emitClose(e) {
      this.show = false;
      this.$emit("hideModal");
    },
    AddToCart() {
      this.$emit("addToCart");
      console.log("added to cart");
    },
  },

  props: ["dialog", "prod"],
};
</script>