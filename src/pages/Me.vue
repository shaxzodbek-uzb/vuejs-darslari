<template>
  <div>{{ user }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user/user"])
  }
};
</script>

<style>
</style>