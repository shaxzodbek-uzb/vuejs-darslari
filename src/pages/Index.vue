<template>
  <div>
    <!-- <Loading v-if="this.loading" /> -->
    <intro />
    <about-company />
    <product-slider />
    <about-frutata />
    <pack />
    <contacts />
  </div>
</template>

<script>
import AboutCompany from "../components/AboutCompany";
import AboutFrutata from "../components/AboutFrutata";
import Contacts from "../components/Contacts.vue";
import Intro from "../components/Intro";
import ProductSlider from "../components/ProductSlider";
import Pack from "../components/Pack";
import { mapGetters } from "vuex";

export default {
  components: {
    AboutCompany,
    AboutFrutata,
    Contacts,
    Intro,
    ProductSlider,
    Pack
  },
  mounted() {
    console.log("1-qadam");
    console.log("1.1-qadam");
    console.log("1.2-qadam");
    // Promise
    this.$api
      .get("/bpi/currentprice.json") // HTTP MEthods: get, post, delete, put, patch
      .then(function(response) {
        console.log("2-qadam");

        console.log(response.data);
      })
      .catch(function(err) {
        console.log("3-qadam");

        console.log(err);
      })
      .finally(() => {
        console.log("4-qadam");

        console.log("yakunlandi");
      });

    console.log("5-qadam");
  },
  computed: {
    ...mapGetters(["increment/countWithText"])
  }
};
</script>