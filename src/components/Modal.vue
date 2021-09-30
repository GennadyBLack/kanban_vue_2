<template>
  <div v-if='items!= null'>
    <div class="back-form"></div>
    <div class="add-car-form">
      <input
        v-for="(input, index) in fieldsWithoutId"
        :key="input.name"
        v-model="items[index]"
        type="text"
        :placeholder="index"
      />
      <div class="btn-group">
        <button v-if='ButtonToggler' type="button" class="btn btn-outline-success" @click="editCard">
          Edit
        </button>
        <button v-if='!ButtonToggler' type="button" class="btn btn-outline-success" @click="addCard">
          Add
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="cancelForm"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  computed: {
    fieldsWithoutId() {
      const newFields = {};
      const fields = this.items;
      for (let key in fields) {
        if (key == "id" || key == "createdAt") {
          continue;
        }
        newFields[key] = fields[key];
      }
      return newFields;
    },
    ButtonToggler(){
      return this.items.id ==''? false: true
    }
  },
  props: {
    fields: {
      required: true,
    },
  },
  data() {
    return { items: null };
  },
  mounted() {
    this.items = this.fields;
  },
  methods: {
    cancelForm() {
      this.$emit("cancelAddForm");
    },
    addCard() {
      this.$emit("addCard", this.items);
    },
    editCard(){
       this.$emit("editCard", this.items);
    }
  },
};
</script>
<style>
.back-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(94, 91, 91);
  opacity: 0.9;
  min-height: 100%;
  min-width: 100%;
  z-index: 1000;
}

.add-car-form {
  position: fixed;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(225, 217, 228);
  width: 600px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  z-index: 10000;
  display: flex;
  flex-direction: column;
}
.add-car-form input {
  padding: 10px;
  margin: 10px;
}
.btn-group {
  margin: 10px;
}
</style>
