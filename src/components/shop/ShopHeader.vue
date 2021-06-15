<template>
  <div class="">
    <v-card class="mx-auto">
      <input type="file" name="file" class="d-none" id="file-shop" />
      <v-btn absolute @click="Upload" bottom color="pink" dark right fab>
        <v-icon dark> mdi-cloud-upload </v-icon>
      </v-btn>
      <v-img
        height="200"
        aspect-ratio="16/9"
        src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      ></v-img>
      <v-row style="margin: 2.5%; position: absolute; top: 130px">
        <v-list-item>
          <v-list-item-avatar size="100">
            <img
              src="https://images.unsplash.com/photo-1587987501183-33e43fdde781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=803&q=80"
              alt="John"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title pt-1" style="margin-top: 20px">
              <h6 class="d-inline-block pt-2">
                {{ shop.shopName }}
              </h6>
              <v-icon color="primary">mdi-check-decagram</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle>
              <!-- <p>
                Followers:
                <span class="light-text">200</span>
                <v-btn
                  x-small
                  v-if="isAuthenticated"
                  elevation="0"
                  :hidden="followingC"
                  @click="following = !following"
                  color="red lighten--6"
                  class="ma-2 white--text d-block-inline"
                >
                  <v-icon x-small light> mdi-account </v-icon>
                  <v-icon x-small light class="ml-1"> mdi-check</v-icon>
                </v-btn>
                <v-btn
                  x-small
                  elevation="0"
                  @click="following = !following"
                  :hidden="!followingC"
                  color="red lighten--6"
                  class="ma-2 white--text d-block-inline"
                >
                  Follow
                  <v-icon x-small right light> mdi-account </v-icon>
                </v-btn>
              </p> -->
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rating: 4,
      following: false,
    };
  },
  watch: {},
  created() {},
  computed: {
    followingC() {
      return this.following;
    },

    shop() {
      return this.$store.state.shops.shop;
    },

    isAuthenticated() {
      return this.shop && localStorage.getItem("user")
        ? this.shop.ownerId ===
            JSON.parse(localStorage.getItem("user")).userId
        : false;
    },
  },
  methods: {
    Upload(e) {
      const file = document.querySelector("#file-shop");
      file.addEventListener("change", (e) => {
        console.log(e.target.files[0]);
      });
      file.click();
    },
  },
  props: {},
};
</script>