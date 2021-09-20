<template>
  <div>
    {{ value }}
    <b-modal :visible="value" @change="modalHolati($event)" @ok="addItem()" title="BootstrapVue">
      <p class="my-4">
        {{ item }}
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-input v-model="item.first_name" placeholder="First name" required class="mb-2" />
          <b-form-input v-model="item.last_name" placeholder="Last name" required class="mb-2" />
          <b-form-input v-model="item.age" placeholder="Age" required class="mb-2" />
        </b-form>
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      defaulf: false
    }
  },
  data() {
    return {
      item: {
        age: null,
        first_name: null,
        last_name: null,
        avatar: require("@/assets/abdusattor.png")
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    modalHolati(e) {
      if (e == false) {
        this.$emit("modal-yopildi");
      }
    },
    addItem() {
      this.$emit("yangi-qosh", this.item);
    }
  }
};
</script>
