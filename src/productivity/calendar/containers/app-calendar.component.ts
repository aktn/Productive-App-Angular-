import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { getScheduleState } from "src/store/reducers";

@Component({
  selector: "app-calendar",
  styleUrls: ["app-calendar.component.scss"],
  template: `
    <div class="app-calendar" *ngIf="scheduled$ | async as scheduled">
      <calendar [scheduled]="scheduled"></calendar>
    </div>
  `
})
export class AppCalendarComponent {
  scheduled$: any;

  constructor(private store: Store<{ Schedule }>) {}

  ngOnInit(): void {
    this.scheduled$ = this.store.pipe(select(getScheduleState));
    console.log(this.scheduled$);
  }
}
