import * as schedule from "../actions/schedule.actions";

const initialState = [
  {
    id: "1",
    taskName: "Hello 1",
    description: "Hello my task",
    date: "Wed Aug 21 2019",
    finished: false
  },
  {
    id: "2",
    taskName: "Hello 2 ",
    description: "Hello my task",
    date: "Wed Aug 21 2019",
    finished: false
  }
];

export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case schedule.SCHEDULE_CREATE:
      return [...state, action.payload];
    case schedule.SCHEDULE_FINISH:
      const objIndex = state.findIndex(task => task.id == action.payload.id);
      const updatedObj = {
        ...state[objIndex],
        finished: !state[objIndex].finished
      };
      const test = [
        ...state.slice(0, objIndex),
        updatedObj,
        ...state.slice(objIndex + 1)
      ];
      console.log(test);
      return test;
    default:
      return state;
  }
};
