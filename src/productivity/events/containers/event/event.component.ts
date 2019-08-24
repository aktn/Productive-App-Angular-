import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Schedule } from "src/models/schedule.model";

@Component({
  selector: "event",
  styleUrls: ["event.component.scss"],
  template: `
    <event-form></event-form>
  `
})
export class EventComponent {
  constructor(public store: Store<Schedule>) {}
}
