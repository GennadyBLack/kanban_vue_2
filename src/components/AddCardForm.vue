<template>
  <div>
    <div class="back-form"></div>
    <div class="add-car-form">
      <p>Add Card</p>
      <input type="text" v-model="title" placeholder="Add title" />
      <input type="text" v-model="description" placeholder="Add description" />
      <div class="btn-group">
        <button type="button" class="btn btn-outline-success" @click="addCard">
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
  name: "AddCardForm",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    cancelForm() {
      this.$emit("cancelAddForm");
    },
    addCard() {
      const newCard = {
        title: this.title,
        description: this.description,
        createdAt: new Date(),
      };
      this.$emit("addCard", newCard);
    },
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
  opacity: 0.4;
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
