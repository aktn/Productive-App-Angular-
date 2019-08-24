import { Event } from "./event.model";

export interface Schedule {
  key?: string;
  events: Event[];
  timestamp: number;
}
