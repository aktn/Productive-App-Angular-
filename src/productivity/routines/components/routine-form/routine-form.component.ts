import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "routine-form",
  styleUrls: ["routine-form.component.scss"],
  template: `
    <div class="routine-form">
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <h2>Add a routine</h2>
        <input
          type="text"
          placeholder="Routine Name"
          formControlName="name"
          autofocus
        />
        <textarea
          rows="5"
          placeholder="Description"
          formControlName="description"
        ></textarea>

        <select formControlName="section">
          <option value="" disabled selected>Pick Routine</option>
          <option *ngFor="let section of sections" [ngValue]="section">{{
            section
          }}</option>
        </select>

        <div class="days">
          <div
            formArrayName="selectedDays"
            *ngFor="let day of selectedDays.controls; index as i"
          >
            <div class="day">
              <label>
                <input type="checkbox" [formControl]="day" /><span>
                  {{ days[i].day }}</span
                >
              </label>
            </div>
          </div>
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  `
})
export class RoutineFormComponent {
  days = [
    { day: "Mon", selected: false },
    { day: "Tue", selected: false },
    { day: "Wed", selected: false },
    { day: "Thu", selected: false },
    { day: "Fri", selected: false },
    { day: "Sat", selected: false },
    { day: "Sun", selected: false }
  ];

  sections = ["Morning", "Afternoon", "Evening", "Night"];

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    name: ["", Validators.required],
    description: [""],
    section: ["", Validators.required],
    selectedDays: this.addDays()
  });

  @Output() created = new EventEmitter<FormGroup>();

  get selectedDays() {
    return this.form.get("selectedDays");
  }

  addDays() {
    const arr = this.days.map(day => {
      return this.fb.control(day.selected);
    });
    return this.fb.array(arr);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // this.created.emit(this.form);
    }
  }
}
