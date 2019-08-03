import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

export const ROUTES: Routes = [
  { path: "events", loadChildren: "./events/events.module#EventsModule" },
  {
    path: "routines",
    loadChildren: "./routines/routines.module#RoutinesModule"
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)]
})
export class ProductivityModule {}
