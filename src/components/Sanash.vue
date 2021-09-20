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
