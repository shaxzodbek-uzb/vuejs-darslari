<template>
  <div>
    <b-row class="my-2 mx-1">
      <b-col>
        <b-input-group prepend="@" class="w-50">
          {{ ism }}
          <b-form-input placeholder="Search" v-model="ism"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col style="text-align: right">
        <b-button variant="outline-secondary" class="mx-1">
          <img src="@/assets/filter.svg" width="20px" />
        </b-button>
        <b-button variant="outline-primary" class="mx-1">
          Download
          <img src="@/assets/download.svg" width="20px" />
        </b-button>
        <b-button variant="success" class="mx-1" @click="$emit('modalni-och')">+ Create</b-button>
        <b-button variant="outline-primary" class="mx-1">
          <img src="@/assets/settings.svg" width="20px" />
        </b-button>
      </b-col>
    </b-row>
    <b-table :items="odamlar" :fields="fields" thead-class="bg-secondary text-white">
      <template #cell(actions)="data">
        <b-button class="mx-1" variant="info">Edit</b-button>
        <b-button variant="danger" @click="$emit('delete-item', data.index)">Delete</b-button>
      </template>
      <template #cell(avatar)="data">
        <div :style="getStyle(data.value)" />
      </template>
      <template #table-caption>
        <div class="bg-secondary">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            class="py-2 justify-content-center"
          ></b-pagination>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    odamlar: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    ism(newVal, oldVal) {
      console.log("ism o'zgardi: ", oldVal, " => ", newVal);
      this.ism = newVal.toUpperCase();
    }
  },
  data() {
    return {
      rows: 1,
      perPage: 10,
      currentPage: 1,
      ism: ""
    };
  },
  methods: {
    getStyle(image) {
      return {
        width: "55px",
        height: "55px",
        "border-radius": "100%",
        "background-image": `url(${image})`,
        "background-size": "cover",
        "background-position": "center"
      };
    },
    log() {
      console.log("jadvaldan log");
    },
    handleInput(e) {
      this.ism = e.toUpperCase();
    }
  }
};
</script>

<style>
</style>