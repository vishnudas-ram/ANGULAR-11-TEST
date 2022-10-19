import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../../services/general.service'
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input()
  isSidebarOpened: boolean=false;
  scrWidth: number | undefined;
  hidden: boolean = false;
  mobilesidebar: boolean = false;
  sidebar: boolean = false;
  constructor(
    public general: GeneralService,
  ) { 
    this.general.changeSidebarStatus(this.sidebar);
  }

  ngOnInit(): void {
  }
  sidebarClose() {
    this.mobilesidebar = false;
    this.general.changeSidebarStatus(this.mobilesidebar);
  }
  expand(value: any) {
    console.log('value', value);
    this.sidebar = value;
    this.general.changeSidebarStatus(this.sidebar);
  }
}
