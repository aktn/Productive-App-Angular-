import { Action } from "@ngrx/store";

export const SCHEDULE_CREATE = "[Schedule] Create";

export class ScheduleCreateAction implements Action {
  type = SCHEDULE_CREATE;

  constructor(public payload: object) {}
}
