<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" @click:outside="changeme" max-width="850">
      <v-card class="p-3">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            x-small
            color="green darken-1"
            text
            @click="emitCloseModal"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-row>
          <v-col cols="5">
            <v-img
              contain
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="300"
              max-width="300"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-col>
          <!-- <v-col cols="1" /> -->
          <v-col cols="6">
            <div class="details-cat mb-20">
              <a href="#">decor,</a>
              <a href="#">furniture</a>
            </div>
            <h2 class="pro-details-title">Limonda Women</h2>
            <div class="details-price mb-20">
              <span>$119.00</span>
              <span class="old-price">$246.00</span>
            </div>

            <div class="product-desc variant-item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <v-row>
              <v-col cols="4">
                <v-btn color="red lighten-4" x-small>
                  <v-icon small> mdi-arrow-up </v-icon>
                </v-btn>
                <p class="mx-2 d-inline-block">1</p>
                <v-btn color="red lighten-4" x-small>
                  <v-icon small> mdi-arrow-down </v-icon>
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  class="ml-2"
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
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <div class="d-none">{{ showC }}</div>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      dialog: true,
      current: true,
    };
  },
  computed: {
    showC() {
      if (this.current != this.show) {
        this.current = !this.current;
        this.dialog = !this.dialog;
      }
      return this.show;
    },
  },
  created() {
    this.current = this.show;
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    emitCloseModal() {
      this.$emit("emitCloseModal");
    },
    changeme() {
      this.dialog = false;
      console.log("this is not the out side");
    },
  },
};
</script>