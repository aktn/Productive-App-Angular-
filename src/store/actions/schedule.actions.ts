import { Action } from "@ngrx/store";

export const SCHEDULE_CREATE = "[Schedule] Create";
export const SCHEDULE_FINISH = "[Schedule] Finish";

export class ScheduleCreateAction implements Action {
  type = SCHEDULE_CREATE;
  constructor(public payload: object) {}
}

export class ScheduleFinishAction implements Action {
  type = SCHEDULE_FINISH;
  constructor(public payload: object) {}
}
