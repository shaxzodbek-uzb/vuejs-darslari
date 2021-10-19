<template>
  <div class="p-4">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="Username:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.username" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" required type="password"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "shaxzodbek@patron-erp.uz",
        password: "password"
      },
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      //todo auth action
    }
  }
};
</script>