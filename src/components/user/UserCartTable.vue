<template>
  <div class="container w-75 mx-auto">
    <v-toolbar flat elevation="0">
      <v-toolbar-title>My Cart </v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <div v-if="carts">
        <v-btn
          v-if="carts.length != 0"
          @click="GoToHomePage"
          class="mx-2"
          fab
          dark
          small
          color="pink"
        >
          <v-icon small dark> mdi-cart </v-icon>
        </v-btn>
        <v-btn
          v-else
          @click="$router.push({ name: 'Home' })"
          class="mx-2"
          fab
          dark
          small
          color="pink"
        >
          <v-icon small dark> mdi-cart </v-icon>
        </v-btn>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title class="border-bottom"> Total Cart </v-card-title>
            <v-container style="margin-top: 0">
              <div class="cart-page-total m-0 p-0" style="margin-top: 0">
                <ul class="mb-20">
                  <li>Procut cost <span>$250.00</span></li>
                  <li>tax <span>$20</span></li>
                  <li>Total <span>$270.00</span></li>
                </ul>
              </div>
              <v-btn dark color="red lighten--4" block elevation="0"
                >Proceed to checkout</v-btn
              >
              <br />
              <v-btn
                @click="dialog = false"
                dark
                color="green lighten--4"
                block
                elevation="0"
                >Cancel</v-btn
              >
            </v-container>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title>
              Are you sure you want remove this item?
            </v-card-title>
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
      </div>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="carts"
      class="elevation-1"
      :items-per-page="5"
      no-data-text="no data text"
    >
      <template v-slot:item.image="{ item }">
        <v-img
          class="my-3"
          :aspect-ratio="16 / 9"
          :width="200"
          :src="
            item.product.imageUrl
              ? item.product.imageUrl
              : 'https://images.unsplash.com/photo-1609980705251-8d7d6266036d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80'
          "
        ></v-img>
      </template>
      <template v-slot:item.productName="{ item }">
        {{ item.product.productName }}
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          @click="deleteItem(item.wishListItemId)"
          color="red lighten--4"
        >
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        No Current Shops
        <router-link :to="{ name: 'Home' }">
          <v-btn small color="red lighten-4" class="my-2 ml-3 red--text">
            Shop Now
          </v-btn>
        </router-link>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import CartCard from "@/components/cart/CartCard";
export default {
  components: {
    CartCard,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Img",
        align: "start",
        sortable: false,
        value: "image",
      },
      {
        text: "Product Name",
        align: "start",
        sortable: true,
        value: "productName",
      },
      { text: "Price", value: "productPrice", sortable: true },
      { text: "Actions", value: "actions", sortable: false },
    ],
    // desserts: [],
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
    carts() {
      return this.$store.state.shops.carts;
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
    // this.initialize();
    this.$store.dispatch("shops/GetUserCart");
  },

  methods: {
    increment(data) {
      this.desserts.find((d) => data.name == d.name).calories++;
    },
    decrement(data) {
      this.desserts.find((d) => data.name == d.name).calories--;
    },
    initialize() {
      // this.desserts = [
      //   {
      //     name: "Frozen Yogurt",
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     rating: 3.5,
      //     imgUrl:
      //       "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      //   },
      //   {
      //     imgUrl:
      //       "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
      //     name: "Ice cream sandwich",
      //     rating: 3.5,
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //   },
      // ];
      // rating: 3.5,
    },

    deleteItem(id) {
      this.$store.dispatch("shops/DeleteCartItem", id);
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
    GoToHomePage() {
      this.$router.push({name : "Home"})
    }
  },
};
</script>