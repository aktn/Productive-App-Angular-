import { Component } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/compiler/src/core";

@Component({
  selector: "calendar-days",
  styleUrls: ["calendar-days.component.scss"],
  template: `
    <div class="calendar-days">
      <button
        class="calendar-days__day"
        type="button"
        *ngFor="let day of days; index as i"
        (click)="selectDay(i)"
      >
        <span [class.active]="i === selected">
          {{ day }}
        </span>
      </button>
    </div>
  `
})
export class CalendarDaysComponent {
  constructor() {}

  days = ["S", "M", "T", "W", "T", "F", "S"];
}
