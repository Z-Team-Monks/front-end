<template>
  <v-col cols="12" class="mt-50">
    <base-material-card color="warning" class="px-5 py-3">
      <template v-slot:heading>
        <div class="display-2 font-weight-light">All Users</div>
      </template>
      <v-card-text>
        <v-data-table :headers="headers" :items="users">
          <template v-slot:item.role="{ item }">
            {{ item.role }}
          </template>
          <template v-slot:item.dateAccountCreated="{ item }">
            {{ new Date(item.dateAccountCreated) }}
          </template>
        </v-data-table>
      </v-card-text>
    </base-material-card>
  </v-col>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      headers: [
        {
          text: "user name",
          align: "start",
          sortable: false,
          value: "username",
        },
        { text: "email", value: "email" },
        { text: "role", value: "role" },
        { text: "phone", value: "phone" },
        { text: "Date", value: "dateAccountCreated" },
        // { text: "actions", value: "actions" },
      ],
    };
  },
  computed: {
    users() {
      return this.$store.state.admin.AUsers;
    },
  },
  created() {
    this.$store.dispatch("admin/GetAllUsers");
  },
  methods: {
    deleteUser(id) {
      //delete your user in here
      this.$store.dispatch("users/deleteUser", id);
    },
  },
};
</script> 