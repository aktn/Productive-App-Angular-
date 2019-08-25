import * as schedule from "../actions/schedule.actions";

const initialState = [
  {
    taskName: "Hello 1",
    description: "Hello my task",
    date: "Wed Aug 21 2019"
  },
  {
    taskName: "Hello 2 ",
    description: "Hello my task",
    date: "Wed Aug 21 2019"
  }
];
export const scheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case schedule.SCHEDULE_CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
