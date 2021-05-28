<template>
  <div class="container w-75 mx-auto">
    <v-data-table
      :headers="headers"
      :items="myDesert"
      sort-by="calories"
      class="elevation-1"
      :items-per-page="5"
    >
      <template v-slot:top>
        <v-toolbar flat elevation="0">
          <v-toolbar-title>Wish List </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
         
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="mx-2"
                dark
                tile
                small
                color="pink"
              >
              &nbsp;&nbsp;ship to Cart <v-spacer/>
              <v-icon small dark> mdi-cart </v-icon>
              
              </v-btn>

            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Dessert name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
         
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                Are you sure?
              </v-card-title>
              <v-card-text
                >once removed you will not be able to restore it unless it is added 
                again as a wishlist product.</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialogDelete = false">
                  Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="dialogDelete = false">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <!-- <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon> -->
        <v-btn icon @click="deleteItem(item)">

        <v-icon small color="red lighten--4"> mdi-delete </v-icon>
        </v-btn >
      </template>
      <template v-slot:item.addToCart="{ item }">
        <!-- <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon> -->
        <v-btn icon @click="() =>{}" href="#">
          <v-icon small color="red lighten--4"> mdi-cart </v-icon>
        </v-btn>
      </template>
      <template v-slot:item.item="{ item }">
        <v-img
          class="my-3"
          :aspect-ratio="16 / 9"
          :width="200"
          :src="item.imgUrl"
        ></v-img>
      </template>
      <template v-slot:item.calories="{ item }">
        <v-btn
          @click="increment(item)"
          class="mx-2"
          color="red lighten-4"
          x-small
        >
          <v-icon small> mdi-arrow-up </v-icon>
        </v-btn>
        {{ item.calories }}
        <v-btn
          @click="decrement(item)"
          class="mx-2"
          col<v-btn
          @click="increment(item)"
          class="mx-2"
          color="red lighten-4"
          x-small
        >
          <v-icon small> mdi-arrow-down </v-icon>
        </v-btn>
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
          Shop Now
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
    headers: [
      {
        text: "Img",
        align: "start",
        sortable: false,
        value: "item",
      },
      {
        text: "Product Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Add to cart", value: "addToCart" },
      { text: "Remove", value: "actions", sortable: false },
    ],
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
      return this.editedIndex === -1 ? "Add A new Shop" : "Edit Shop";
    },
    myDesert() {
      console.log("well hello there");
      return this.desserts;
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
  },

  methods: {
    increment(data) {
      this.desserts.find((d) => data.name == d.name).calories++;
    },
    decrement(data) {
      this.desserts.find((d) => data.name == d.name).calories--;
    },
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          rating: 3.5,
          imgUrl:
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        },
        {
          imgUrl:
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          name: "Ice cream sandwich",
          rating: 3.5,
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>