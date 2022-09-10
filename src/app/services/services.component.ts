import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  datee:any;
  constructor(private vishnu:ServicesService) { }

  ngOnInit(): void {
    this.datee=this.vishnu.tdate();
  }

}
