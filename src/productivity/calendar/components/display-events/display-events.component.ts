import { Component, Input } from "@angular/core";

@Component({
  selector: "display-events",
  styleUrls: ["display-events.component.scss"],
  template: `
    <div class="display-events">
      <ul class="display-events__list" *ngFor="let item of items">
        <li>
          <span class="taskName">{{ item.taskName }}</span>
          <span class="date">{{ item.date | date: "EEEE d MMMM y" }}</span>
        </li>
      </ul>
    </div>
  `
})
export class DisplayEventsComponent {
  @Input() items: any;
}
