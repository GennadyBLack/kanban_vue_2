
const state ={
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
      }
    ]
}

const mitations = {
    updateKanban(state,value){
        state = value
    }
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