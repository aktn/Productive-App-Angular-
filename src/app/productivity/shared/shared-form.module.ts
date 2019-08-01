import { SharedFormComponent } from "./shared-form/components/shared-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SharedFormComponent],
  exports: [SharedFormComponent]
})
export class SharedModule {}
