<template>
  <button @click="increment()">+</button>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increment/increment"])
  }
};
</script>