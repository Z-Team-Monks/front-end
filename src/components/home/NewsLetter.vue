<template>
  <!-- subscribe-area start -->
  <section class="subscribe-area box-105">
    <div class="subscribe-inner black-bg pt-70 pb-20">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-5">
            <div class="subscribe d-flex fix">
              <div class="subscribe-icon">
                <img src="../../assets/img/icon/subscribe.png" alt="" />
              </div>
              <div class="area-title white-color mb-50">
                <h2>Newsletter</h2>
                <p>Subsribe here for get every single updates</p>
              </div>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="subscribe fix">
              <div class="subscribe-form mb-50">
                <form @submit="subscribe" action="#">
                  <v-text-field
                    class="mr-2 w-50 text-light"
                    dark
                    type="text"
                    placeholder="Enter your email address"
                  />
                  <button class="btn theme-btn" type="submit">
                    subscribe now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- subscribe-area end -->
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    subscribe(e) {
      e.preventDefault();
      console.log("this is me");
    },
  },
  props: {},
};
</script>