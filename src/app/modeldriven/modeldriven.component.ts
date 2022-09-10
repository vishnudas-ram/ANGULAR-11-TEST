import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {
  one:any;
  two:any;
  dasform:any;

  constructor() { }

  ngOnInit(): void {
    this.dasform = new FormGroup({
      emailid: new FormControl(""),
      passwd: new FormControl("")

    });
  }

  sunna(data:any) {
    this.one = data.emailid;
    this.two = data.passwd;
   }
 
}
