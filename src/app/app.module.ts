import { AboutComponent } from "./components/about/about.component";
import { AppSidebarComponent } from "./components/app-sidebar/app-sidebar.component";
import { AuthModule } from "./../auth/auth.module";
import { ProductivityModule } from "../productivity/productivity.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./containers/app/app.component";

@NgModule({
  declarations: [AppComponent, AppSidebarComponent, AboutComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductivityModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
