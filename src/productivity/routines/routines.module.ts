import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "./../shared/shared-form.module";
import { RoutineFormComponent } from "./components/routine-form/routine-form.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutineComponent } from "./containers/routine/routine.component";
import { ReactiveFormsModule } from "@angular/forms";

export const ROUTES: Routes = [{ path: "", component: RoutineComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [RoutineFormComponent, RoutineComponent]
})
export class RoutinesModule {}
