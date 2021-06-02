<template>
  <div class="n">
    <v-row>
      <v-col cols="6">
        <v-dialog @click:outside="hideMe" width="500" v-model="cc">
          <v-card tile>
            <v-list-item two-line v-for="(r, i) in reviews" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{ r.reviewString }}</v-list-item-title>
                <v-list-item-subtitle>{{ r.userName }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.show = this.dialog;
  },
  computed: {
    cc() {
      return this.show;
    },
  },
  methods: {
    emitClose(e) {
      this.show = false;
      this.$emit("hideModal");
    },
    hideMe() {
      console.log("hiding");
      this.show = false;
    },
  },

  props: ["dialog", "reviews"],
};
</script>