import { ProductivityModule } from "./productivity/productivity.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductivityModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
