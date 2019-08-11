import { Component } from "@angular/core";

@Component({
  selector: "about",
  styleUrls: ["about.component.scss"],
  template: `
    <div class="about">
      <h2>About the app</h2>
      <ul>
        <li>
          - Have you been feeling like a day just goes by without getting things
          done?
        </li>
        <li>
          - Or do you need an assistance to effectively take control of your
          time?
        </li>
        <li>- If so, then this app might solve your problems!</li>
      </ul>
      <h2>How to use it</h2>
      <ul>
        <li>
          - Schedule section allows you to create tasks/routines that needs to
          be done on regular basis.
        </li>
        <li>
          - In event section, you will be able to create task/event for one off
          basis.
        </li>
        <li>
          - Calendar section displays a list of tasks that a user wish to do on
          the selected date.
        </li>
      </ul>
    </div>
  `
})
export class AboutComponent {}
