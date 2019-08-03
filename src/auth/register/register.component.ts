import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "register",
  styleUrls: ["register.component.scss"],
  template: `
    <auth-form (submit)="createUser($event)">
      <h2>Register</h2>
      <button type="submit">Create</button>
    </auth-form>
  `
})
export class RegisterComponent {
  createUser(event: FormGroup) {
    console.log(event);
  }
}
