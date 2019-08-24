import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Schedule } from "src/models/schedule.model";
import { Event } from "src/models/event.model";
import { ScheduleCreateAction } from "src/store/actions/schedule.actions";

@Component({
  selector: "event",
  styleUrls: ["event.component.scss"],
  template: `
    <event-form (created)="addEvent($event)"></event-form>
  `
})
export class EventComponent {
  constructor(public store: Store<Schedule>) {}

  addEvent(event: Event) {
    this.store.dispatch(new ScheduleCreateAction(event));
  }
}
