import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class CalendarService {
  public date$ = new BehaviorSubject(new Date());

  updateDate(date: Date) {
    this.date$.next(date);
  }
}
