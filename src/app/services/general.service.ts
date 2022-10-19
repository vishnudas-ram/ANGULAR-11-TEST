import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  sidebarStatus = new BehaviorSubject(null);
  currentUser = new BehaviorSubject('John')
  constructor() { }
  changeSidebarStatus(value: any) {
    this.sidebarStatus.next(value);
  }
  updateUserName(name:string) {
    console.log('new user name : ',name);
    this.currentUser.next(name);
  }
}
