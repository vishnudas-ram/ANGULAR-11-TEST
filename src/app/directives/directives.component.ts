import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title="directive";
  server= "offline";
  btn=true;

  name=['vishnu','sunitha','nandu','sukanya','aadi'];

  constructor() {
    setTimeout(()=>{this.btn=false;},10000);
    
    if(Math.random()>0.5)
    {
      this.server= "online";
    }
  else{
    this.server= "offline";

  }
    
   }  

  ngOnInit(): void {
  }
  fun1(){alert("hai")}

  
}

