<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <p>Date: {{ date }}</p>
        <input type="text" :value="date" @input.prevent.stop="kiritish" />
        <!-- Malumot chop etish -->
        Qandaydir ma'lumot, 123, 20.10.2021
        {{ malumot }}
        <div v-html="malumot"></div>
        <!-- SHart -->
        <div v-show="false">BIror ma'lumot keltirilgan1</div>
        <div v-if="false">BIror ma'lumot keltirilgan2</div>
        <div style="color: green" v-if="isOnline == true">Online</div>
        <div style="color: red" v-else>Online emas</div>
        <!-- SIKL -->
        <!-- {{items}}
        <ul>
          <li v-for="(item, idx) in items" :key="idx">
            <div>TR: #{{ idx+1 }}</div>
            <div>ISM: {{item.first_name}}</div>
            <div>Yoshi: {{ item.age }}</div>
            <hr />
          </li>
        </ul>-->
        <!-- Computed -->
        <button @click="addNew">Yangi</button>
        <p>{{ umumiySoni }} ta</p>
        <p>Yoshlar: {{ sumAge / umumiySoni}}</p>
        <input type="text" v-model="showSana" />
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
  computed: {
    sumAge() {
      return this.items.reduce((sum, item) => {
        return sum + item.age;
      }, 0);
    }
  },
  watch: {
    items() {
      this.umumiySoni = this.items.length;
      this.confirm = true;
    }
  },
  data() {
    return {
      date: "",
      umumiySoni: 0,
      malumot: "<b>Istalgan ma'lumot</b>",
      showSana: false,
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

      modalOpen: false,
      isOnline: false
    };
  },
  methods: {
    kiritish($e) {
      console.log($e);
      let str = $e.target.value;
      let validated_str = "";
      for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element == "a" || element == "b") {
          validated_str += element;
        }
      }
      this.date = validated_str;
    },
    addNew() {
      this.items.push({
        age: 89,
        first_name: "Geneva",
        last_name: "Wilson",
        avatar: require("@/assets/abdusattor.png")
      });
    },
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
