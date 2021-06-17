<template>
  <div class="container w-75 mx-auto">
    <v-tabs v-model="tab">
      <v-tab :key="1">My Shops</v-tab>
      <v-tab :key="2">Shop Products</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="p-3">
      <v-tab-item :key="1">
        <v-toolbar flat elevation="0">
          <v-toolbar-title>My Shops</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn class="mb-2" @click="dialog = !dialog" dark color="pink">
            Add new proposal
          </v-btn>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title class="border-bottom">
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-form>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" v-if="store">
                        <input type="file" @change="fileMe" name="file" id="" />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="shopName"
                          placeholder="Shop Name"
                          prepend-icon="mdi-store-24-hour "
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          :rules="phoneRules"
                          required
                          v-model="phonenumber"
                          placeholder="Phone number"
                          prepend-icon="mdi-phone"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="buildingName"
                          placeholder="Building name"
                          prepend-icon="mdi-store-24-hour "
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="locationName"
                          placeholder="Location name"
                          prepend-icon="mdi-store-24-hour "
                        />
                      </v-col>

                      <v-col cols="12">
                        <v-select
                          :item-value="values"
                          v-model="selected"
                          :items="categories"
                          placeholder="Category"
                          :return-object="false"
                          prepend-icon="mdi-shape"
                        >
                        </v-select>
                      </v-col>
                      <v-col>
                        <v-textarea
                          rows="1"
                          v-model="description"
                          prepend-icon="mdi-semantic-web"
                          placeholder="Description"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12">
                        <v-row>
                          <v-col align="center" cols="2"
                            ><v-btn @click="getLocation" fab icon>
                              <v-icon>mdi-map</v-icon></v-btn
                            ></v-col
                          >
                          <v-col
                            ><v-text-field
                              v-model="longtiude"
                              hint="longtiude"
                            ></v-text-field
                          ></v-col>
                          <v-col
                            ><v-text-field
                              hint="latitude"
                              v-model="latitude"
                            ></v-text-field
                          ></v-col>
                          <!-- <v-col cols="2"><v-btn small fab icon> <v-icon>mdi-google-maps</v-icon></v-btn></v-col> -->
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="red lighten--4 darken-1"
                    text
                    @click="dialog = !dialog"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="red lighten--4 darken-1"
                    text
                    @click="CreateShop"
                  >
                    Create Shop
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this shop?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="dialogDelete = !dialogDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="shops"
          sort-by="calories"
          class="elevation-1"
          :items-per-page="5"
        >
          <template v-slot:item.iamgeUrl="{ item }">
            <v-img
              v-if="item.imageUrl"
              class="my-3"
              :aspect-ratio="16 / 9"
              :width="200"
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="GetImageUrl(item.iamgeUrl)"
            ></v-img>
            <!-- <v-img
          v-else
          class="my-3"
          :aspect-ratio="16 / 9"
          :width="200"
          src="https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        ></v-img> -->
          </template>
          <template v-slot:item.shopName="{ item }">
            <router-link :to="{ name: 'shop', params: { id: item.id } }">
              {{ item.shopName.substr(0, 6) }}
            </router-link>
          </template>
          <template v-slot:item.isActive="{ item }">
            <v-chip
              v-if="item.isActive"
              x-small
              color="secondary"
              :ripple="false"
            >
              Active
            </v-chip>
            <v-chip color="primary" x-small v-else :ripple="false">
              Pending
            </v-chip>
          </template>
          <template v-slot:item.description="{ item }">
            {{ item.description.substr(0, 20) }}
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn icon fab x-small @click="deleteSelected(item)">
              <v-icon small color="red lighten--4"> mdi-delete </v-icon>
            </v-btn>
          </template>

          <template v-slot:no-data>
            No Current Shops
            <v-btn
              small
              color="red lighten-4"
              class="my-2 ml-3 red--text"
              @click="dialog = !dialog"
            >
              New Shop Request Form
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>
      <v-tab-item :key="2">
        <v-toolbar flat elevation="0">
          <v-toolbar-title>Shop Products</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialogDeleteProduct" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this shop?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="dialogDelete = !dialogDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
        <v-data-table
          :headers="shopProductHeaders"
          :items="products"
          sort-by="calories"
          class="elevation-1"
          :items-per-page="5"
        >
          <template v-slot:item.iamgeUrl="{ item }">
            <v-img
              v-if="item.imageUrl"
              class="my-3"
              :aspect-ratio="16 / 9"
              :width="200"
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="GetImageUrl(item.iamgeUrl)"
            ></v-img>
            <!-- <v-img
          v-else
          class="my-3"
          :aspect-ratio="16 / 9"
          :width="200"
          src="https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        ></v-img> -->
          </template>
          <template v-slot:item.shopName="{ item }">
            <router-link :to="{ name: 'shop', params: { id: item.id } }">
              {{ item.shopName.substr(0, 6) }}
            </router-link>
          </template>
          <template v-slot:item.isActive="{ item }">
            <v-chip
              v-if="item.isActive"
              x-small
              color="secondary"
              :ripple="false"
            >
              Active
            </v-chip>
            <v-chip color="primary" x-small v-else :ripple="false">
              Pending
            </v-chip>
          </template>
          <template v-slot:item.description="{ item }">
            {{ item.description.substr(0, 20) }}
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn icon fab x-small @click="deleteItem(item.productId)">
              <v-icon small color="red lighten--4"> mdi-delete </v-icon>
            </v-btn>
          </template>

          <template v-slot:no-data>
            No Current Shops
            <v-btn
              small
              color="red lighten-4"
              class="my-2 ml-3 red--text"
              @click="dialog = !dialog"
            >
              New Shop Request Form
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>
export default {
  data: () => ({
    tab: 1,
    dialog: false,
    store: true,
    dialogDeleteProduct: false,
    dialogDelete: false,
    selected: "",
    file: "",
    longtiude: "",
    latitude: "",
    shopID: "",
    shopName: "",
    buildingName: "",
    categoryId: 1,
    locationName: "",
    description: "",
    phonenumber: "",
    shopLocationId: "",
    phoneRules: [(v) => (v && v.length == 10) || "invalid phone number"],
    headers: [
      // {
      //   text: "Image",
      //   align: "start",
      //   sortable: false,
      //   value: "iamgeUrl",
      // },
      {
        text: "Name",
        align: "start",
        sortable: true,
        value: "shopName",
      },
      { text: "Description", value: "description", sortable: false },
      { text: "Status", value: "isActive", sortable: false },
      // { text: "Category", value: "fat", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    shopProductHeaders: [
      {
        text: "Product Name",
        align: "start",
        sortable: true,
        value: "productName",
      },
      { text: "Price", value: "price", sortable: true },
      { text: "Discount", value: "discount", sortable: true },
      { text: "Actions", value: "actions", sortable: true },
      // { text: "Actions", value: "actions", sortable: false },
    ],
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
    items: ["Electronics", "Cosmotics", "Furniture"],
    editedIndex: -1,
    editedItem: {},
    selectedShop: {},
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Shop Request Form" : "Edit Shop";
    },
    categories() {
      return this.$store.state.category.categories.length != 0
        ? this.$store.state.category.categories.map((e) => e.categoryName)
        : [];
    },
    values() {
      return this.$store.state.category.categories.length != 0
        ? this.$store.state.category.categories.map((e) => e.categoryID)
        : [];
    },
    shops() {
      return this.$store.state.shops.shops;
    },
    url() {
      return localStorage.getItem("url");
    },
    products() {
      return this.$store.state.product.products;
    },
  },

  watch: {
    dialog(val) {
      val || this.dialog;
    },
    dialogDelete(val) {
      val || this.dialogDelete;
    },
    selected(val) {
      console.log(val);
    },
  },

  created() {
    this.$store.dispatch("category/GetCategories");
    this.$store.dispatch("shops/GetUserShops");
    this.$store.dispatch("product/GetUserProducts");
  },

  methods: {
    initialize() {
      // rating: 3.5,
    },

    deleteItem(id) {
      this.$store.dispatch("product/DeleteUserProduct", id);
    },
    deleteItemConfirm() {
      console.log("deleted");
      this.$store.dispatch("shops/DeleteShop", this.shopID);
      this.dialogDelete = false;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    CreateShop() {
      this.close();
      const formData = new FormData();
      formData.append("file", this.file);
      const location = {
        longitude: this.longtiude,
        latitude: this.latitude,
        locationName: this.locationName,
      };
      let phonenumber = this.phonenumber.trim();
      let newPhonenumber = "";
      if (phonenumber.startsWith("0")) {
        newPhonenumber = "+251" + this.phonenumber.substring(1);
      }
      const data = {
        shop: {
          shopName: this.shopName,
          buildingName: this.buildingName,
          categoryId: 1,
          imageUrl: "",
          phoneNumber: newPhonenumber,
          description: this.description,
        },
        location: location,
      };

      this.$store.dispatch("shops/CreateShop", {
        shop: data,
        formData,
      });
    },
    getLocation() {
      if (navigator.geolocation) {
        console.log("getlocation")
        navigator.geolocation.getCurrentPosition(this.showPosition , e=> {
          console.log(e)
        });
      } else {
        console.log("not supported");
      }
    },
    showPosition(position) {
      console.log(position.coords.latitude)
      this.latitude = position.coords.latitude;
      this.longtiude = position.coords.longitude;
    },
    fileMe(e) {
      this.file = e.target.files[0];
      console.log(e.target.files[0]);
    },

    editSelected(item) {
      this.longtiude = item.longtiude;
      this.latitude = item.latitude;
      this.shopName = item.shopName;
      this.buildingName = item.buildingName;
      this.categoryId = item.categoryId;
      this.locationName = item.locationName;
      this.description = item.description;
      this.phonenumber = item.phonenumber;
      this.dialog = true;
      this.store = false;
      this.shopID = item.id;
      console.log(item.id);
    },

    storeOrUpdate(store) {
      if (!store) {
        this.$store.dispatch("shop/UpdateShop", {
          longtiude: this.longtiude,
          latitude: this.latitude,
          shopName: this.shopName,
          buildingName: this.buildingName,
          categoryId: this.categoryId,
          locationName: this.locationName,
          description: this.description,
          phonenumber: this.phonenumber,
        });
      } else {
        // create a store in this method
        // this.$store.dispatch("shops/CreateShop" , {})
      }
      this.dialog = false;
      this.store = true;
    },
    deleteSelected(item) {
      this.dialogDelete = true;
      this.longtiude = item.longtiude;
      this.latitude = item.latitude;
      this.shopName = item.shopName;
      this.buildingName = item.buildingName;
      this.categoryId = item.categoryId;
      this.locationName = item.locationName;
      this.description = item.description;
      this.phonenumber = item.phonenumber;
      this.store = false;
      this.shopID = item.id;
      this.shopLocationId = item.shopLocationId;
      // console.log(item.shopId); // delete the shop in here
      // this.$store.dispatch("shops/deleteShop", item.id);
    },
    DeleteShopProduct(item) {
      this.dialogDeleteProduct = true
    },

    GetImageUrl(img) {
      // if (img.startsWith("/")) {
      // console./log(this.url + img);
      return "https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
      // return this.url + img;
      // }
      // return img;
    },
  },
};
</script>