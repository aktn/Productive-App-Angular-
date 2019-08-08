import { Component } from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-sidebar",
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "translateX(100%)", opacity: 0 }),
        animate("500ms", style({ transform: "translateX(0)", opacity: 1 }))
      ]),
      transition(":leave", [
        style({ transform: "translateX(0)", opacity: 1 }),
        animate("500ms", style({ transform: "translateX(100%)", opacity: 0 }))
      ])
    ])
  ],
  styleUrls: ["app-sidebar.component.scss"],
  template: `
    <div class="app-sidebar">
      <div class="app-sidebar__nav" *ngIf="toggle" [@enterAnimation]>
        <a class="closebtn" (click)="toggleNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">View Calendar</a>
        <a href="#">Add Events</a>
        <a href="#">Add Routine</a>
      </div>
      <div class="hamburger-icon" (click)="toggleNav()">&#9776;</div>
    </div>
  `
})
export class AppSidebarComponent {
  toggle: boolean = false;

  toggleNav() {
    this.toggle = !this.toggle;
  }
}
