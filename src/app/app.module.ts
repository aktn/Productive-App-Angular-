import { ProductivityModule } from "../productivity/productivity.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./containers/app/app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule, ProductivityModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
