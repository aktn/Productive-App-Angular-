import { SharedModule } from "../shared/shared-form.module";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EventFormComponent } from "./containers/event-form/event-form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

export const ROUTES: Routes = [{ path: "", component: EventFormComponent }];

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [EventFormComponent]
})
export class EventsModule {}
