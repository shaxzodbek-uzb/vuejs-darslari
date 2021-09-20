<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <p class="h2">
          <strong @click="tableniOzgartir()">Class schedules</strong>
        </p>
        <b-card no-body>
          <div>
            <Table
              ref="jadval"
              :odamlar="items"
              :fields="fields"
              @modalni-och="modalniOchish()"
              @delete-item="deleteItem($event)"
            />
            <Modal
              :value="modalOpen"
              @modal-yopildi="modalOpen = false"
              @yangi-qosh="addItem($event)"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Table from "@/components/Table";
import Modal from "@/components/Modal";

export default {
  components: { Table, Modal },
  data() {
    return {
      fields: [
        { key: "age", label: "Yosh" },
        { key: "avatar", label: "Avatar" },
        { key: "first_name", label: "Ismi" },
        { key: "last_name", label: "Familyasi" },
        { key: "actions", label: "Buyruqlar" }
      ],
      items: [
        {
          age: 401,
          first_name: "Dickerson",
          last_name: "Macdonald",
          avatar: require("@/assets/abdusattor.png")
        },
        {
          age: 21,
          first_name: "Larsen",
          last_name: "Shaw",
          avatar: require("@/assets/abdusattor.png")
        },
        {
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          avatar: require("@/assets/abdusattor.png")
        }
      ],

      modalOpen: false
    };
  },
  methods: {
    addItem(data) {
      // console.log(data);
      //1-usul
      // const new_item = {
      //   age: this.item.age,
      //   first_name: this.item.first_name,
      //   last_name: this.item.last_name,
      //   avatar: this.item.avatar
      // };
      // 2-usul
      // console.log(JSON.stringify(this.item));
      // console.log(this.item);
      const new_item_string = JSON.stringify(data);
      const new_item = JSON.parse(new_item_string);
      console.log(new_item);
      this.items.push(new_item);
      //3-usul
      // const new_item = Object.assign({}, this.item);
      // this.items.push(new_item);
      //4-usul
      // console.log({ ...this.item });
      // const new_item = { ...this.item };
      // this.items.push(new_item);
    },
    modalniOchish() {
      console.log("ochish haqida xabar keldi");
      this.modalOpen = true;
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
    tableniOzgartir() {
      this.$refs.jadval.log();
    }
  }
};
</script>
