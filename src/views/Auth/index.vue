<template>
  <div class="container">
    <v-row>
      <v-col></v-col>
      <v-col><AuthForm /></v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>
<script>
import AuthForm from "@/components/auth/index";
export default {
  components: {
    AuthForm,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  props: {},
};
</script>
