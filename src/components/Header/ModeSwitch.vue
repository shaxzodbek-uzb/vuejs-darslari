<template>
  <DarkModeSwitch @switched="changeDarkModeState" :initialState="isDarkMode" />
</template>

<script>
import DarkModeSwitch from "vue-dark-mode-switch";
import "vue-dark-mode-switch/dist/vue-dark-mode-switch.css";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isDarkMode"])
  },
  components: {
    DarkModeSwitch
  },
  methods: {
    ...mapActions(["changeDarkModeState"])
  }
};
</script>