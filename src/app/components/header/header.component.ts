import { Component, OnInit } from '@angular/core';
import { GeneralService} from '../../services/general.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:string=''
  constructor(
    private general:GeneralService
  ) {
    this.general.currentUser.subscribe(val => this.user = val)
   }

  ngOnInit(): void {
  }

}
