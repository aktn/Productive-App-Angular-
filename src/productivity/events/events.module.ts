import { EventComponent } from "./containers/event/event.component";
import { SharedModule } from "../shared/shared-form.module";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EventFormComponent } from "./components/event-form/event-form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

export const ROUTES: Routes = [{ path: "", component: EventComponent }];

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [EventFormComponent, EventComponent]
})
export class EventsModule {}
