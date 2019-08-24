import { Component, Input } from "@angular/core";

@Component({
  selector: "calendar",
  styleUrls: ["calendar.component.scss"],
  template: `
    <div class="calendar">
      <calendar-controls [selected]="selectedDay"></calendar-controls>
      <calendar-days></calendar-days>
    </div>
  `
})
export class CalendarComponent {
  //selectedDay: Date;

  selectedDay: Date = new Date();
}
