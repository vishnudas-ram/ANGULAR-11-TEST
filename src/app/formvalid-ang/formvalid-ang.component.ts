import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formvalid-ang',
  templateUrl: './formvalid-ang.component.html',
  styleUrls: ['./formvalid-ang.component.css']
})
export class FormvalidAngComponent implements OnInit {
  one:any;
  two:any;
  dasform:any;
  constructor() { }

  ngOnInit(): void {
    this.dasform = new FormGroup({
      emailid: new FormControl("",Validators.compose([Validators.required,
      Validators.pattern("^[a-zA-Z,.,@]*$")])),
      passwd: new FormControl("",Validators.compose([Validators.required,
      Validators.maxLength(6)]))

    });
  }

  sunna(data:any) {
    this.one = data.emailid;
    this.two = data.passwd;
    
   }
}
