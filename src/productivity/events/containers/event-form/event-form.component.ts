import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "event-form",
  styleUrls: ["event-form.component.scss"],
  template: `
    <div>
      Yo Events
      <shared-form (created)="createNewTask($event)">
        <h2>Add an event</h2>
        <button type="submit">
          Add
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
