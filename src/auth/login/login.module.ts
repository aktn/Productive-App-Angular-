import { SharedModule } from "./../shared/shared.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

export const ROUTES: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
