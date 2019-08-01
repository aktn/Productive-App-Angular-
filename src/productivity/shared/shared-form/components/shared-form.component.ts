import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "shared-form",
  styleUrls: ["shared-form.component.scss"],
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
      <ng-content select="h2"> </ng-content>
      <input type="text" placeholder="Task Name" formControlName="taskName" autofocus />
      <textarea
        rows="5"
        placeholder="Description"
        formControlName="description"
      ></textarea>
      <ng-content select="button"> </ng-content>
    </form>
  `
})
export class SharedFormComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    taskName: ["", Validators.required],
    description: [""]
  });

  @Output() created = new EventEmitter<FormGroup>();

  onSubmit() {
    if (this.form.valid) {
      this.created.emit(this.form);
    }
  }
}
