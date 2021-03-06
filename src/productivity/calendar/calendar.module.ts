import { SharedModule } from "./../shared/shared.module";
import { DisplayEventsComponent } from "./components/display-events/display-events.component";
import { CalendarDaysComponent } from "./components/calendar-days/calendar-days.component";
import { CalendarControlsComponent } from "./components/calendar-controls/calendar-controls.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { AppCalendarComponent } from "./containers/app-calendar.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const ROUTES: Routes = [{ path: "", component: AppCalendarComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [
    AppCalendarComponent,
    CalendarComponent,
    CalendarControlsComponent,
    CalendarDaysComponent,
    DisplayEventsComponent
  ]
})
export class CalendarModule {}
