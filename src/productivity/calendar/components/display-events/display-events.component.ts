import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "display-events",
  styleUrls: ["display-events.component.scss"],
  template: `
    <div class="display-events">
      <ul class="display-events__list" *ngFor="let item of items">
        <li [className]="item.finished ? 'active' : 'inactive'">
          <span class="taskName">{{ item.taskName }}</span>
          <span class="date"
            >{{ item.date | date: "EEEE d MMMM y" }}
            <label class="deleteIcon" (click)="crossItem(item)">
              ✕
            </label>
          </span>
        </li>
      </ul>
    </div>
  `
})
export class DisplayEventsComponent {
  @Input() items: any;
  @Output() cross = new EventEmitter<any>();

  crossItem(item) {
    this.cross.emit(item);
  }
}
