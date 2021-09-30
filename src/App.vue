<template>
  <div>
    <Header />
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

export default {
  components: {
    AboutCompany,
    AboutFrutata,
    Contacts,
    Footer,
    Header,
    Intro,
    ProductSlider,
    Pack
  }
};
</script>
    Contacts
