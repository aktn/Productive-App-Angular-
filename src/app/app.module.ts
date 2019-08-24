import { AboutComponent } from "./components/about/about.component";
import { AppSidebarComponent } from "./components/app-sidebar/app-sidebar.component";
import { AuthModule } from "./../auth/auth.module";
import { ProductivityModule } from "../productivity/productivity.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./containers/app/app.component";
import { reducers } from "src/store/reducers";

@NgModule({
  declarations: [AppComponent, AppSidebarComponent, AboutComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ProductivityModule,
    AuthModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
