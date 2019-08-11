import { Component } from "@angular/core";

@Component({
  selector: "calendar",
  styleUrls: ["calendar.component.scss"],
  template: `
    <div class="calendar">
      <calendar-controls></calendar-controls>
      <calendar-days></calendar-days>
    </div>
  `
})
export class CalendarComponent {}
