import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
    title="string interpolation";
    a=10;
    b=20;
    c=0;
    buttons=true;

  constructor() { 
    setTimeout( ()=>{this.buttons =false;},10000);
  }

  ngOnInit(): void {
  }
  myFunction(){
    this.c=this.a+this.b;
  }
  name="vishnu";
}
