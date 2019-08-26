import { CalendarService } from "./../../shared/services/calendar.service";
import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { getScheduleState } from "src/store/reducers";
import { Observable } from "rxjs";
import { ScheduleFinishAction } from "src/store/actions/schedule.actions";

@Component({
  selector: "app-calendar",
  styleUrls: ["app-calendar.component.scss"],
  template: `
    <div class="app-calendar" *ngIf="scheduled$ | async as scheduled">
      <calendar
        [scheduled]="scheduled"
        [date]="date$ | async"
        (update)="changeDate($event)"
        (finished)="finishedTask($event)"
      ></calendar>
    </div>
  `
})
export class AppCalendarComponent {
  scheduled$: any;
  date$: Observable<Date>;

  constructor(
    private store: Store<{ Schedule }>,
    public calendarService: CalendarService
  ) {}

  ngOnInit(): void {
    this.scheduled$ = this.store.pipe(select(getScheduleState));
    this.date$ = this.calendarService.date$;
  }

  changeDate(date: Date) {
    this.calendarService.updateDate(date);
  }

  finishedTask(event) {
    this.store.dispatch(new ScheduleFinishAction(event));
  }
}
