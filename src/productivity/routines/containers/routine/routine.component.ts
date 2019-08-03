import { Component } from "@angular/core";

@Component({
  selector: "routine",
  styleUrls: ["routine.component.scss"],
  template: `
    <routine-form (select)="selectedDay($event)"></routine-form>
  `
})
export class RoutineComponent {
  selectedDay(index: number) {
    console.log(index);
  }
}
