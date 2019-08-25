import { Component, Input } from "@angular/core";

@Component({
  selector: "calendar",
  styleUrls: ["calendar.component.scss"],
  template: `
    <div class="calendar">
      <calendar-controls
        [selected]="selectedDay"
        (switch)="onChange($event)"
      ></calendar-controls>
      <calendar-days></calendar-days>
      <display-events [items]="scheduled"></display-events>
    </div>
  `
})
export class CalendarComponent {
  selectedDay: Date = new Date();
  selectedWeek: Date;

  constructor() {}

  ngOnChanges() {
    this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
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
    //  this.selectedDay = startDate;
    console.log(startDate);
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day;
    return new Date(date.setDate(diff));
  }
}
