<template>
  <div class="container w-75 mx-auto">
    <v-data-table
      :headers="userAds"
      :items="desserts"
      sort-by="calories"
      class="elevation-1 border"
      :items-per-page="5"
      no-data-text="No Ads avialable"
    >
      <template v-slot:top>
        <v-toolbar flat elevation="0">
          <v-toolbar-title>Live Ads: 200</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

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
      <template v-slot:item.imgUrl="{ item }">
        <v-img
          class="my-3"
          :aspect-ratio="16 / 9"
          :width="200"
          :src="item.imgUrl"
        ></v-img>
      </template>
      <template v-slot:item.description="{ item }">
        {{
          item.description.length < 20
            ? item.description
            : item.description.slice(0, 20) + " ..."
        }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn class="mx-2" color="red lighten-4" x-small>
          <!-- <v-icon small > mdi-arrow-up </v-icon> -->
          Request Approval
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
          Add new Shop
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
        text: "Image",
        align: "start",
        sortable: false,
        value: "imgUrl",
      },
      { text: "Product Name", value: "name" },
      { text: "Description", value: "description" },
      { text: "Discount", value: "discount" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add A new Shop" : "Edit Shop";
    },

    userAds() {
      return this.$store.state.ads.userAds
    }
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
    this.$store.dispatch("ads/GetUserAds")
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Mac 14 inch",
          discount: "10",
          description:
            "An elegant laptop that is able to do anything!! just like Nabek",
          imgUrl:
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        },
        {
          imgUrl:
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          name: "Mac 19 inch",
          discount: "10",
          description:
            "An elegant laptop that is able to do anything!! just like Nabek",
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