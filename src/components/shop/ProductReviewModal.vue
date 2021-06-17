<template>
  <div class="n">
    <v-dialog
      @click:outside="hideMe"
      :scrollable="false"
      max-width="800"
      v-model="cc"
    >
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-textarea
                v-model="reviewString"
                rows="2"
                counter
                label="Review"
              ></v-textarea>
              <v-rating medium v-model="rating" color="orange"></v-rating>
              <v-btn
                @click="submitReview"
                color="primary"
                class="mt-3"
                outlined
                block
              >
                <v-icon left>mdi-pen</v-icon> Submit Review</v-btn
              >
            </v-col>
            <v-col cols="6" v-if="reviews" sm="6" md="6">
              <h6>Reviews</h6>
              <v-list-item
                two-line
                v-for="(r, i) in reviews"
                :key="i"
                class="border-bottom border-top"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ r.comment }}</v-list-item-title>
                  <v-list-item-subtitle> </v-list-item-subtitle>
                  <v-row>
                    <v-col>
                      <v-list-item-subtitle>{{
                        r.user.name
                      }}</v-list-item-subtitle>
                    </v-col>
                    <v-col>
                      <v-rating
                        x-small
                        :value="r.rating"
                        class="display-inline pl-0"
                        readonly
                        color="orange"
                      ></v-rating>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col v-else cols="6" sm="6" md="6">
              <h6>No reviews yet</h6>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      rating: 1,
      reviewString: "",
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
      this.$emit("hideMe")
    },
    submitReview() {
      console.log(this.reviews);
      this.$emit("submitReview", {
        rating: this.rating,
        comment: this.reviewString,

      });
    },
  },

  props: ["dialog", "reviews"],
};
</script>