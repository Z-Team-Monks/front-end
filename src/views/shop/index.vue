<template>
  <div>
    <ShopWrapper />
  </div>
</template>
<script>
import ShopWrapper from "@/components/shop/index";
export default {
  components: {
    ShopWrapper,
  },
  data() {
    return {};
  },
  created() {
    // getting shop detail error
    // this.$store.dispatch("shops/GetShop", this.$route.params.id);
  },
  computed: {},
  methods: {},
  props: {},
};
</script>