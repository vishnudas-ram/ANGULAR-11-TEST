import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  user={
    name:'vishnu',
    designation:['developer','webdesigner','stockbuyer'],
    age:26,
  }
  name1='vishnudas';
  datee:any;
  
  constructor(private vishnu:ServicesService) { }

  ngOnInit(): void {
    this.datee=this.vishnu.tdate();
  }

}
