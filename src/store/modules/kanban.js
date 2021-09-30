
const state ={
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
    ]
}

const mitations = {

}

const actions = {

}

const getters = {}

export default {
state,
mitations,
actions,
getters
}