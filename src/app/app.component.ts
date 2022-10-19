import { Component } from '@angular/core';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';

  isSidebarOpened: any = false;
  constructor(public general: GeneralService) {
    this.general.sidebarStatus.subscribe((value: any) => {
      if (value == false) {
        this.isSidebarOpened = false;
      } else {
        this.isSidebarOpened = true;
      }
    });
  }
  sidebarEvent(value:any) {
    this.isSidebarOpened = value;
  }

  closeSidebar() {
    this.general.changeSidebarStatus(false);
  }
}
