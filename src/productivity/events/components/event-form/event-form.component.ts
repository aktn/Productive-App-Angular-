import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "event-form",
  styleUrls: ["event-form.component.scss"],
  template: `
    <div class="event-form">
      <shared-form (created)="createNewTask($event)">
        <h2>Add an event.</h2>
        <div class="event-form__datePicker">
          <input
            matInput
            [matDatepicker]="picker"
            placeholder="Choose a date"
            disabled
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
      </shared-form>
    </div>
  `
})
export class EventFormComponent {
  createNewTask(event: FormGroup) {
    console.log(event.value);
  }
}
