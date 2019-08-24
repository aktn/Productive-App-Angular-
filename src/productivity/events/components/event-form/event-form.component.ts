import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "event-form",
  styleUrls: ["event-form.component.scss"],
  template: `
    <div class="event-form">
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <h2>Add an event.</h2>
        <input
          type="text"
          placeholder="Task Name"
          formControlName="taskName"
          autofocus
        />
        <textarea
          rows="5"
          placeholder="Description"
          formControlName="description"
        ></textarea>
        <div class="event-form__datePicker">
          <input
            matInput
            [matDatepicker]="picker"
            placeholder="Choose a date"
            disabled
            formControlName="date"
          />
          <div class="calendar">
            <mat-datepicker-toggle
              matSuffix
              [for]="picker"
            ></mat-datepicker-toggle>
            <mat-datepicker touchUi #picker disabled="false"></mat-datepicker>
          </div>
        </div>
        <button type="submit">
          Create
        </button>
      </form>
    </div>
  `
})
export class EventFormComponent {
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.created.emit(this.form.value);
    }
  }

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    taskName: ["", Validators.required],
    description: [""],
    date: ["", Validators.required]
  });

  @Output() created = new EventEmitter<FormGroup>();
}
