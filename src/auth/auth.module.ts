import { SharedModule } from "./shared/shared.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const ROUTES: Routes = [
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterModule"
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
  declarations: []
})
export class AuthModule {}
