import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  todaydate:any;
  constructor() { }
  tdate(){
    this.todaydate=new Date();
    return this.todaydate;
  }
}
