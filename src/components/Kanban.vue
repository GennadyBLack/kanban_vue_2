<template>
  <div class="container-fluide">
    <div class="row">
      <modal
        v-if="addFormVisible"
        @cancelAddForm="cancelAddForm"
        @addCard="addCard"
        :fields="initialCardValues"
        @editCard="ModalEditCard"
      />
    </div>
    <div class="row">
      <button class="btn btn-success" @click="addColumn">Add new Column</button>
      <div
        v-for="column in kanban.column"
        :key="column.id"
        class="col"
        :style="{ background: column.color }"
      >
        <div>
          <h3>{{ column.title }}</h3>
        </div>
        <!-- //DRAG -->
        <draggable
          :list="column.card"
          group="cards"
          @start="dragOver"
          @end="dragEnd"
        >
          <div
            v-for="card in column.card"
            :key="card.id"
            class="card shadow p-3 mb-5 bg-white rounded"
          >
            <h3>{{ card.title }}</h3>
            <div>{{ card.description }}</div>
            <div>{{ card.createdAt.toLocaleDateString() }}</div>
            <button
              class="btn btn-primary btn-sm"
              @click="editCard(card, column.id)"
            >
              edit
            </button>
          </div>
        </draggable>
        <!-- DRAG END -->
        <button class="btn btn-success" @click="cardFormVisible(column.id)">
          +
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import Modal from "@/components/Modal";
export default {
  name: "Kanban",
  components: {
    draggable,
    Modal,
  },

  data() {
    return {
      initialCardValues: {
        id: "",
        title: "",
        description: "",
      },
      addFormVisible: false,
      ModalCurrentColumn: null,
      board: {
        id: 1,
        column: [
          {
            id: 1,
            title: "Monday",
            card: [
              {
                id: 1,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
              {
                id: 21,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
            ],
            color: "LightSalmon",
          },
          {
            id: 2,
            title: "Tuesday",
            card: [
              {
                id: 12,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
              {
                id: 22,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
            ],
            color: "MediumTurquoise",
          },
          {
            id: 3,
            title: "Wednesday",
            card: [
              {
                id: 13,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
              {
                id: 23,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
            ],
            color: "MediumSpringGreen",
          },
          {
            id: 4,
            title: "Thursday",
            card: [
              {
                id: 13,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
              {
                id: 23,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
            ],
            color: "MediumSpringGreen",
          },
          {
            id: 5,
            title: "Friday",
            card: [
              {
                id: 13,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
              {
                id: 23,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
            ],
            color: "MediumSpringGreen",
          },
          {
            id: 6,
            title: "Saturday",
            card: [
              {
                id: 13,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
              {
                id: 23,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
            ],
            color: "MediumSpringGreen",
          },
          {
            id: 7,
            title: "Sunday",
            card: [
              {
                id: 13,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
              {
                id: 23,
                title: "test title",
                description: "description for card",
                createdAt: new Date(),
              },
            ],
            color: "MediumSpringGreen",
          },
        ],
      },
    }
  },
  methods: {
    addColumn() {
      this.board.column.push({
        id: this.board.column.length + 1,
        title: "new Title",
        card: [],
      });
    },
    cardFormVisible(id) {
      this.ModalCurrentColumn = id;
      this.addFormVisible = true;
    },
    cancelAddForm() {
      this.addFormVisible = false;
      this.ModalCurrentColumn = null;
      this.initialCardValues = { id: "", title: "", description: "" };
    },
    addCard(item) {
      const columnId = this.ModalCurrentColumn;
      const column = this.board.column.filter((item) => item.id == columnId);
      const newItem = {
        description: item.description,
        title: item.title,
        createdAt: new Date(),
      };
      newItem.id = column[0].card.length + 1;
      column[0].card.push(newItem);
      this.addFormVisible = false;
      this.ModalCurrentColumn = null;
    },
    dragOver(event) {
      event.from.classList.add("over");
    },
    dragEnd(event) {
      event.from.classList.remove("over");
    },
    editCard(card, columnId) {
      this.initialCardValues = card;
      this.ModalCurrentColumn = columnId;
      this.addFormVisible = true;
    },
    ModalEditCard(card) {
      try {
        const column = this.board.column.filter(
          (item) => item.id == this.ModalCurrentColumn
        );

        column[0].card.forEach((elem) => {
          if (elem.id == card.id) {
            elem = card;
            this.addFormVisible = false;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed:{

    kanban: {
        get() {
            return this.$store.state.kanban
        },
        set(value) {
            this.$store.commit('updateKanban', value)
        }
    }
}
  
};
</script>
<style scoped>
.container-fluide {
  border: 2px solid black;
}
.card {
  height: auto;
  background: cornsilk;
  margin-top: 10px;
  box-shadow: 10px 5px 5px rgb(99, 96, 96);
}
.col {
  /* background: rgba(231, 215, 215, 0.363); */
  margin: 2px;
}
.over {
  opacity: 0.2;
}
</style>
