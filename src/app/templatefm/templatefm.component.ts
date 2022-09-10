import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatefm',
  templateUrl: './templatefm.component.html',
  styleUrls: ['./templatefm.component.css']
})
export class TemplatefmComponent implements OnInit {
   user:any;
   pword:any;
   
   title="hhth";
  constructor() { }

  ngOnInit(): void {
  }
   vish(data:any) {
    this.user=data.username;
    this.pword=data.password;
  }
}
