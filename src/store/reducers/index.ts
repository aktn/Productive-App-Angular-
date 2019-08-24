import * as fromSchedule from "./schedule.reducer";

export const reducers = {
  schedule: fromSchedule.scheduleReducer
};

export const getScheduleState = state => state.schedule;
