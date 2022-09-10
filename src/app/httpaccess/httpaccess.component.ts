import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-httpaccess',
  templateUrl: './httpaccess.component.html',
  styleUrls: ['./httpaccess.component.css']
})
export class HttpaccessComponent implements OnInit {
  httpdata:any; 
  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
  this.myhttp.get("http://jsonplaceholder.typicode.com/users")
   .subscribe((data)=>this.displayData(data));    
  }
  displayData(data:any){
    this.httpdata=data;
  }
}
