import { Component, Input } from "@angular/core";

@Component({
  selector: "calendar-controls",
  styleUrls: ["calendar-controls.component.scss"],
  template: `
    <div class="calendar-controls">
      <button type="button" (click)="moveDate(offset - 1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 18 18"
        >
          <path
            style="fill:#fff;"
            d="M11.56 5.56L10.5 4.5 6 9l4.5 4.5 1.06-1.06L8.12 9z"
          />
        </svg>
      </button>
      <p>{{ selected | date: "yMMMMd" }}</p>
      <button type="button" (click)="moveDate(offset + 1)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 18 18"
        >
          <path
            style="fill:#fff;"
            d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"
          />
        </svg>
      </button>
    </div>
  `
})
export class CalendarControlsComponent {
  @Input()
  selected: Date;
}
