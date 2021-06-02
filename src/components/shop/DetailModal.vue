<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="850">
      <v-card v-if="prod" class="p-3">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            x-small
            color="green darken-1"
            text
            @click="emitClose"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-row>
          <v-col cols="6">
            <v-img
              contain
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="200"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>

            <v-divider />
            <!-- <v-rating
                small
                v-model="rating"
                :length="length"
                color="red lighten-3"
                class="text-center"
                background-color="grey lighten-1"
                large
              ></v-rating>
              <v-textarea
                class="mx-5"
                rows="1"
                v-model="description"
                placeholder="review"
              ></v-textarea> -->

            <!-- <v-btn
                small
                class="ml-2"
                outlined
                color="secondary"
                dark
                tile
                block
              >
                Submit Review
              </v-btn> -->
          </v-col>
          <!-- <v-col cols="1" /> -->
          <v-col cols="6">
            <div class="details-cat mb-20">
              {{ prod.brand }}
            </div>
            <h2 class="pro-details-title">{{ prod.productName }}</h2>
            <div class="details-price mb-20">
              <span>{{ prod.price }}</span>
              <span class="old-price">$246.00</span>
            </div>

            <div class="product-desc variant-item">
              <p>{{ prod.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
    data () {
        return {
            show: false
        }

    },  
    created() {
        this.show = this.dialog
    },

    methods: {
        emitClose(e) {
            this.show = false;
            this.$emit("hideModal")
        }
    },

    props:["dialog" , "prod"]
}
</script>