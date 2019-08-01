import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EventsComponent } from "./containers/events/events.component";
import { CommonModule } from "@angular/common";

export const ROUTES: Routes = [{ path: "", component: EventsComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [EventsComponent]
})
export class EventsModule {}
