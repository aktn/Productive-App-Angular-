import { SharedModule } from "./../shared/shared.module";
import { RegisterComponent } from "./register.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const ROUTES: Routes = [{ path: "", component: RegisterComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [RegisterComponent]
})
export class RegisterModule {}
