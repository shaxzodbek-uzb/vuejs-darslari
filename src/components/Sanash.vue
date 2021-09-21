<template>
  <div>
    <button type="button" class="btn btn-primary">
      Notifications
      <span class="badge bg-secondary">4</span>
    </button>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("Sanash beforeCreate");
  },
  created() {
    console.log("Sanash created");
  },
  beforeMount() {
    console.log("Sanash beforeMount");
  },
  mounted() {
    console.log("Sanash mounted");
  },
  updated() {
    this.$emit("filter-updated");
  },
  beforeDestroy() {
    // confirm("Siz o'zgarishlarni o'chirmoqchimisiz?");
    console.log("Sanash before destroy");
  },
  destroyed() {
    console.log("Sanash destroyed");
  },
  data() {
    return {
      sana: 0
    };
  },
  methods: {
    kamaytir() {
      this.sana--;
    },
    oshir() {
      this.sana++;
    }
  }
};
</script>
