import { Component, Input, OnChanges } from "@angular/core";

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
      <display-events [items]="scheduled"></display-events>
    </div>
  `
})
export class CalendarComponent implements OnChanges {
  selectedDay: Date = new Date();
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

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day;
    return new Date(date.setDate(diff));
  }

  public getToday(date: Date) {
    let today = date.getDay();
    console.log(today);
    return today;
  }

  selectDay(index: number) {
    const selectedDay = new Date(this.selectedWeek);
    selectedDay.setDate(selectedDay.getDate() + index);
    this.selectedDay = selectedDay;
    this.selectedDayIndex = this.getToday(this.selectedDay);
  }
}
