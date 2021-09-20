<template>
  <div>
    {{ items }}
    <p>ism: {{ ism.value }}</p>
    <p>ism-2: {{ ism2.value }}</p>
    <p>ism-3: {{ ism3.value }}</p>
    <button @click="yuklash()">yuklash</button>
    <button @click="tenglash()">tenglash</button>
    <button @click="tenglash2()">tenglash-2</button>
    <button @click="tekshirish()">Tekshirsih</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ism: { value: "Shaxzodbek" },
      ism2: { value: "Azizbekjon" },
      ism3: { value: "Ibrohim" },
      items: []
    };
  },
  methods: {
    yuklash() {
      this.items.push(this.ism);
      this.items.push(this.ism2);
      this.items.push(this.ism3);
    },
    tenglash() {
      this.ism.value = this.ism2.value;
    },
    tenglash2() {
      this.ism2.value = this.ism3.value;
    },
    tekshirish() {
      // 1 ta obyekt -> 100 xil nom, joyda ishlatish mumkin/ Singleton class
      this.ism2 = this.ism; // ism2 = ism ni address
      this.ism3 = this.ism2; // ism3 = ism ni address
      this.ism.value = "Nimadir";
    }
  }
};
</script>