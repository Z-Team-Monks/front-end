<template>
  <div class="container w-75 mx-auto">
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
      :items-per-page="5"
    >
      <template v-slot:top>
        <v-toolbar flat elevation="0">
          <v-toolbar-title>My Shops</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mb-2" v-bind="attrs" v-on="on" dark color="pink">
                Add new proposal
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="border-bottom">
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-form>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
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
                  <v-btn color="red lighten--4 darken-1" text @click="close">
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
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
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
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
          color="red lighten--4"
        >
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)" color="red lighten--4">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:item.name="{ item }">
        <router-link
          class="text-dark"
          :to="{ name: 'shop', params: { id: '12' } }"
        >
          {{ item.name }}</router-link
        >
      </template>
      <template v-slot:no-data>
        No Current Shops
        <v-btn
          small
          color="red lighten-4"
          class="my-2 ml-3 red--text"
          v-bind="attrs"
          v-on="on"
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
    dialogDelete: false,
    selected: "",
    file: "",
    longtiude: "",
    latitude: "",
    shopName: "",
    buildingName: "",
    categoryId: 1,
    locationName: "",
    description: "",
    phoneRules: [(v) => (v && v.length == 10) || "invalid phone number"],
    phonenumber: "",
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Product amount", value: "calories", sortable: false },
      { text: "Category", value: "fat", sortable: false },
      // { text: "Carbs (g)", value: "carbs" },
      // { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
    items: ["Electronics", "Cosmotics", "Furniture"],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
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
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.$store.dispatch("category/GetCategories");
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          rating: 3.5,
        },
        {
          name: "Ice cream sandwich",
          rating: 3.5,
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          rating: 3.5,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          rating: 3.5,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          rating: 3.5,
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          rating: 3.5,
        },
        {
          name: "Lollipop",
          calories: 392,
          rating: 3.5,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: "Honeycomb",
          rating: 3.5,
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          rating: 3.5,
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          rating: 3.5,
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ];
      // rating: 3.5,
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
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
      formData.append("shopLocationDto", JSON.stringify(location));
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
  },
};
</script>