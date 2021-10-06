<template>
  <div>
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
  computed: {
    ...mapGetters(["increment/countWithText"])
  }
};
</script>
    Contacts
