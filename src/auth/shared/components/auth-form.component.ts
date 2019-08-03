import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "auth-form",
  styleUrls: ["auth-form.component.scss"],
  template: `
    <div class="auth-form">
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <ng-content select="h2"></ng-content>
        <input
          autofocus
          type="email"
          placeholder="Email"
          formControlName="email"
        />
        <input
          type="password"
          placeholder="Password"
          formControlName="password"
        />
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent {
  constructor(private fb: FormBuilder) {}

  error: string;

  @Output() submit = new EventEmitter<FormGroup>();

  onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.form);
    }
  }

  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });

  get checkEmail() {
    const email = this.form.get("email");
    return email.hasError("email") && email.touched;
  }

  get checkPassword() {
    const password = this.form.get("password");
    return password.hasError("required") && password.touched;
  }
}
