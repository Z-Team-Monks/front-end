<template>
  <section class="product-area box-90 pt-70 pb-40">
    <div class="text-center">
      <Banner />
    </div>
    
    <ShopListTable />
    <!-- </div> -->
  </section>
</template>
<script>
import ShopListTable from "@/components/admin/ShopListTable";
import Banner from "@/components/admin/Banner";
export default {
  components: {
    ShopListTable,
    Banner,
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