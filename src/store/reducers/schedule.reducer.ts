import * as schedule from "../actions/schedule.actions";

export const scheduleReducer = (state = [], action) => {
  switch (action.type) {
    case schedule.SCHEDULE_CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
