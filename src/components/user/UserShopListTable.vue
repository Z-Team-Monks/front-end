<template>
  <div class="container w-75 mx-auto">
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
                    <v-combobox
                      :value="values"
                      :items="categories"
                      v-model="selected"
                      placeholder="Category"
                      prepend-icon="mdi-shape"
                    />
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
              <v-btn color="red lighten--4 darken-1" text @click="dialog = !dialog">
                Cancel
              </v-btn>
              <v-btn color="red lighten--4 darken-1" text @click="CreateShop">
                Create Shop
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline"
            >Are you sure you want to delete this item?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialogDelete = !dialogDelete"
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
      <template v-slot:item.coverImage="{ item }"> igm </template>
      <template v-slot:item.shopName="{ item }">
        {{ item.shopName.substr(0, 6) }}
      </template>
      <template v-slot:item.description="{ item }">
        {{ item.description.substr(0, 20) }}
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon fab x-small @click="editSelected(item)">
          <v-icon small color="red lighten--4"> mdi-pencil </v-icon>
        </v-btn>

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
  </div>
</template>


<script>
export default {
  data: () => ({
    dialog: false,
    store: true,
    dialogDelete: false,
    selected: "",
    file: "",
    longtiude: "",
    latitude: "",
    shopID:"",
    shopName: "",
    buildingName: "",
    categoryId: 1,
    locationName: "",
    description: "",
    phonenumber: "",
    phoneRules: [(v) => (v && v.length == 10) || "invalid phone number"],
    headers: [
      {
        text: "Image",
        align: "start",
        sortable: false,
        value: "coverImage",
      },
      {
        text: "Name",
        align: "start",
        sortable: true,
        value: "shopName",
      },
      { text: "Description", value: "description", sortable: false },
      // { text: "Category", value: "fat", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
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
  },

  watch: {
    dialog(val) {
      val || this.dialog;
    },
    dialogDelete(val) {
      val || this.dialogDelete;
    },
  },

  created() {
    this.$store.dispatch("category/GetCategories");
    this.$store.dispatch("shops/GetShops");
  },

  methods: {
    initialize() {
      // rating: 3.5,
    },


    deleteItemConfirm() {
      // this.$store.dispatch("shops/deteShop", this.shopId);
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
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();

      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("shopName", this.shopName);
      formData.append("buildingName", this.phoneNumber);
      // formData.append("coverImage", this.phoneNumber);
      formData.append("categoryId", this.phoneNumber);
      const location = {
        longitude: this.longtiude,
        latitude: this.latitude,
        locationName: this.locationName,
      };
      formData.append("shopLocationDto", JSON.string(location));
      formData.append("description", this.description);
      console.log(formData);
      this.$store.dispatch("shops/CreateShop", formData);
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        console.log("not supported");
      }
    },
    showPosition(position) {
      console.log(position);
      this.latitude = position.latitude;
      this.longtiude = position.longitude;
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
    this.shopID = item.shopId;

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
      // delete the shop in here
      // this.$store.dispatch("shops/deleteShop", item.id);
    },
  },
};
</script>