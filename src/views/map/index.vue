<template>
  <div>
    <h3 style="margin: 2rem">Near By Shops</h3>
    <div class="full" mx-3>
      <div class="shop mx-2">
        <div id="single-shop">
          <v-card class="mx-auto" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="getImage()"></v-img>

            <v-card-title>{{ detailShop.shopName }}</v-card-title>

            <v-card-text>
              <div>
                {{ detailShop.description }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Contact: </v-card-title>

            <v-card-text>
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>{{ detailShop.phoneNumber }}</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text> Reserve </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <div class="map-view">
        <mapbox-map
          style="height: 600px"
          access-token="pk.eyJ1IjoicGFyMHMiLCJhIjoiY2s4YWxxa3Y0MDNnNjNqcXRjbHAwcGtucyJ9.P53jjAPr1iSjtfa2dSjJkA"
          map-style="mapbox://styles/mapbox/streets-v11"
          :center="[38.7578, 8.9806]"
          :zoom="11"
        >
          <mapbox-marker
            v-for="(shop, i) in shops"
            :key="i"
            :lng-lat="[shop.shopLocation.longitude, shop.shopLocation.latitude]"
          >
            <p class="custom-marker" @click="showDetail(shop)">
              <i class="fas fa-shopping-cart"></i>
            </p>
          </mapbox-marker>
        </mapbox-map>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      shops: [],
      detailShop: null,
    };
  },
  methods: {
    showDetail: function (shop) {
      this.detailShop = shop;
    },
    getImage() {
      console.log(this.detailShop);
      if (!this.detailShop.imageUrl) {
        return "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251__340.jpg";
      }
      console.log("shop image: ", this.detailShop.coverImage);
      return this.detailShop.coverImage;
    },
    getImage() {
      console.log(this.detailShop);
      if (!this.detailShop.imageUrl) {
        return "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251__340.jpg";
      }
      console.log("shop image: ", this.detailShop.imageUrl);
      return this.detailShop.imageUrl;
    },
  },
  created() {
    axios
      .get("search/shops/nearme", {
        params: {
          "radius": 333,
          "latitude": 23.2312,
          "longitude": 22.42323,
        },
      })
      .then((r) => {
        this.shops = r.data.results;
        this.detailShop = this.shops[0];
        console.log(this.shops);
      })
      .catch((e) => console.log("shop error: ", e));
  },
  created() {
    axios
      .get("search/shops/nearme", {
        params: {
          "radius": 333,
          "latitude": 23.2312,
          "longitude": 22.42323,
        },
      })
      .then((r) => {
        this.shops = r.data;
        this.detailShop = this.shops[1];
        console.log(this.shops);
      })
      .catch((e) => console.log("shop error: ", e));

    // this.shops.forEach((shop) => {
    //   if (shop.coverImage == undefined) {
    //     shop.coverImage =
    //       "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251__340.jpg";
    //   }
    // });
  },
};
</script>

<style>
.full {
  margin-top: 20px;
  padding: 10px;
  display: flex;
  width: 100%;
}
.shop {
  flex: 2;
  /* background-color: red; */
}
.map-view {
  flex: 3;
}
.custom-marker {
  padding: 1em;
  background-color: #fff;
  border-radius: 5px;
}
.fa-shopping-cart {
  color: black;
}
</style>