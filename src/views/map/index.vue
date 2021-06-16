<template>
  <div>
    <div class="full" mx-3>
      <div class="shop mx-2">
        <h3 style="margin: 2rem" class="text-center">Near By Shops</h3>
        <div id="single-shop">
          <v-card v-if="detailShop" class="mx-auto" max-width="374">
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
              <router-link
                :to="{ name: 'shop', params: { id: detailShop.id } }"
                color="deep-purple lighten-2"
                text
              >
                Check out shop page
              </router-link>
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
            :lng-lat="[shop.location.longitude, shop.location.latitude]"
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
      latitude: "",
      longitude: "",
    };
  },
  methods: {
    showDetail: function (shop) {
      this.detailShop = shop;
    },
    getImage() {
      console.log(this.detailShop);
      //   console.log(this.detailShop);
      //   if (!this.detailShop.imageUrl) {
      //     return "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251__340.jpg";
      //   }
      //   console.log("shop image: ", this.detailShop.coverImage);
      //   return this.detailShop.coverImage;
      // },
      // getImage() {
      //   console.log(this.detailShop);
      //   if (!this.detailShop.imageUrl) {
      //     return "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251__340.jpg";
      //   }
      //   console.log("shop image: ", this.detailShop.imageUrl);
      if (this.detailShop.imageUrl) return this.detailShop.imageUrl;
      return "https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251__340.jpg";
    },

    getLocation() {
      if (navigator.geolocation) {
        for (const key in navigator.geolocation) {
          console.log(key);
        }
        navigator.geolocation.getCurrentPosition((e) => {
          this.latitude = e.coords.latitude;
          this.longitude = e.coords.longitude;
          axios
            .get("search/shops/nearme", {
              params: {
                radius: 333,
                latitude: this.latitude,
                longitude: this.longitude,
              },
            })
            .then((r) => {
              console.log(r);
              this.shops = r.data;
              this.detailShop = this.shops[0];
              console.log("this.shops");
              console.log(this.shops);
              console.log("this.shops");
            })
            .catch((e) => console.log("shop error: ", e));
        });
        // navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("not supported");
      }
    },
    showPosition(position) {
      // console.log(position)
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
  },
  created() {
    console.log("geo location");
    this.getLocation();
  },

  computed: {},
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