import {
  Component,
  Input,
  OnChanges,
  EventEmitter,
  Output
} from "@angular/core";

@Component({
  selector: "calendar",
  styleUrls: ["calendar.component.scss"],
  template: `
    <div class="calendar">
      <calendar-controls
        [selected]="selectedDay"
        (switch)="onChange($event)"
      ></calendar-controls>
      <calendar-days
        (select)="selectDay($event)"
        [selected]="selectedDayIndex"
      ></calendar-days>
      <display-events
        [items]="scheduled"
        (cross)="finishTask($event)"
      ></display-events>
    </div>
  `
})
export class CalendarComponent implements OnChanges {
  selectedDay: Date;
  selectedWeek: Date;
  selectedDayIndex: number;

  constructor() {}

  ngOnChanges() {
    this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
    this.selectedDayIndex = this.getToday(this.selectedDay);
  }

  @Input() scheduled: any;

  onChange(weekOffset: number) {
    const startOfWeek = this.getStartOfWeek(new Date());
    const startDate = new Date(
      startOfWeek.getFullYear(),
      startOfWeek.getMonth(),
      startOfWeek.getDate()
    );
    startDate.setDate(startDate.getDate() + weekOffset * 7);
    this.selectedDay = startDate;
  }

  @Input() set date(date: Date) {
    this.selectedDay = new Date(date.getTime());
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day;
    return new Date(date.setDate(diff));
  }

  public getToday(date: Date) {
    let today = date.getDay();
    return today;
  }

  @Output() update = new EventEmitter<Date>();
  selectDay(index: number) {
    const selectedDay = new Date(this.selectedWeek);
    selectedDay.setDate(selectedDay.getDate() + index);
    this.update.emit(selectedDay);
  }

  @Output() finished = new EventEmitter<any>();
  finishTask(event) {
    this.finished.emit(event);
  }
}
