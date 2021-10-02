<template>
  <div>
    <Header />
    <p class="p-4">
      <Increment />
      {{ countWithText }}
    </p>
    <intro />
    <about-company />
    <product-slider />
    <about-frutata />
    <pack />

    <contacts />
    <Footer />
  </div>
</template>

<script>
import AboutCompany from "./components/AboutCompany";
import AboutFrutata from "./components/AboutFrutata";
import Contacts from "./components/Contacts.vue";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ProductSlider from "./components/ProductSlider";
import Pack from "./components/Pack";
import Increment from "./components/Increment";
import { mapGetters } from "vuex";

export default {
  components: {
    AboutCompany,
    AboutFrutata,
    Contacts,
    Footer,
    Header,
    Intro,
    ProductSlider,
    Pack,
    Increment
  },
  computed: {
    ...mapGetters(["increment/countWithText"])
  }
};
</script>
    Contacts
