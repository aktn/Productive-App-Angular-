import { Component, Input } from "@angular/core";

@Component({
  selector: "calendar",
  styleUrls: ["calendar.component.scss"],
  template: `
    <div class="calendar">
      <calendar-controls [selected]="selectedDay"></calendar-controls>
      <calendar-days></calendar-days>
      <display-events [items]="scheduled"></display-events>
    </div>
  `
})
export class CalendarComponent {
  selectedDay: Date = new Date();

  constructor() {}

  @Input()
  scheduled: any;
}
