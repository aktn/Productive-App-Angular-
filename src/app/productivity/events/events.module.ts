import { SharedModule } from "./../shared/shared-form.module";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EventsComponent } from "./containers/events/events.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

export const ROUTES: Routes = [{ path: "", component: EventsComponent }];

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [EventsComponent]
})
export class EventsModule {}
