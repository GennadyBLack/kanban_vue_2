<template>
  <div class="container-fluide">
    
    <div class="row">
      <test
        v-if="addFormVisible"
        @cancelAddForm="cancelAddForm"
        @addCard="addCard"
        :fields="initialCardValues"
        :option='true'
      />
    </div>
    <div class="row">
      <button class="btn btn-success" @click="addColumn">Add new Column</button>
      <div
        v-for="column in board.column"
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
            <button class='btn btn-small btn-primary' @click='editCard(card)'>edit</button>
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

import Test from "@/components/Test";
export default {
  name: "Kanban",
  components: {
    draggable,
    
    Test
  },
  data() {
    return {
      initialCardValues: {
                id:"",
                title: "",
                description: "",
              },
      addFormVisible: false,
      addFormCurrentColumn: null,
      board: {
        id: 1,
        column: [
          {
            id: 1,
            title: "TODO",
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
            title: "TODOSEC",
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
            title: "TODOSONOSEC",
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
    };
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
      this.addFormCurrentColumn = id;
      this.addFormVisible = true;
    },
    cancelAddForm() {
      this.addFormVisible = false;
      this.addFormCurrentColumn = null;
      this.initialCardValues = {id:'',title: "", description: ""}
    },
    addCard(item) {
        console.log(item,'ITEM')
      const columnId = this.addFormCurrentColumn;
      const column = this.board.column.filter((item) => item.id == columnId);
      const newItem = {
          description:item.description,
          title:item.title,
          createdAt: new Date()
      };
      newItem.id = column[0].card.length + 1;
      column[0].card.push(newItem);
      this.addFormVisible = false;
      this.addFormCurrentColumn = null;
    },
    dragOver(event) {
      event.from.classList.add("over");
      console.log(event, "event");
    },
    dragEnd(event) {
      event.from.classList.remove("over");
    },
    editCard(card){
        console.log(card,'CARD')
        this.initialCardValues = card
        this.addFormVisible = true
    }
  },
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
