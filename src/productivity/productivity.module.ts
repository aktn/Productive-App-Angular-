import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
  { path: "events", loadChildren: "./events/events.module#EventsModule" },
  {
    path: "routines",
    loadChildren: "./routines/routines.module#RoutinesModule"
  },
  {
    path: "calendar",
    loadChildren: "./calendar/calendar.module#CalendarModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule.forRoot()]
})
export class ProductivityModule {}
