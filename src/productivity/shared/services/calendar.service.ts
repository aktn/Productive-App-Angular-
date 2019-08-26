import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class CalendarService {
  private date$ = new BehaviorSubject(new Date());
}
