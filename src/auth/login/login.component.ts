import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: "login",
  styleUrls: ["login.component.scss"],
  template: `
    <auth-form (submit)="createUser($event)">
      <h2>Login</h2>
      <button type="submit">Sign In</button>
    </auth-form>
  `
})
export class LoginComponent {
  createUser(event: FormGroup) {
    console.log(event);
  }
}
