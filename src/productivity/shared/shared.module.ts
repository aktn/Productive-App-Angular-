import { CalendarService } from "./services/calendar.service";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CalendarService]
    };
  }
}
