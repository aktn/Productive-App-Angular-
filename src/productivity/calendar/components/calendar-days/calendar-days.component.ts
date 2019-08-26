import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "calendar-days",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["calendar-days.component.scss"],
  template: `
    <div class="calendar-days">
      <button
        class="calendar-days__day"
        type="button"
        *ngFor="let day of days; index as i"
        (click)="selectDay(i)"
        [class.active]="i === selected"
      >
        <span>
          {{ day }}
        </span>
      </button>
    </div>
  `
})
export class CalendarDaysComponent {
  constructor() {}

  @Input() selected: number;

  days = ["S", "M", "T", "W", "T", "F", "S"];

  @Output() select = new EventEmitter<number>();
  selectDay(index: number) {
    this.select.emit(index);
  }
}
