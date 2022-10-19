import { Component, OnInit } from '@angular/core';
import { ApiConstant } from 'src/app/shared/apiConstant';
import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GeneralService } from '../../services/general.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  details:any[]=[];
  searchWord:string='';
  userName:string='';
  itemCount:number = 5;
  constructor(
    private apiService: ApiService,
    private general:GeneralService
  ) { 
  
  }

  ngOnInit(): void {
    this.getProfileData()
  }
 getProfileData() {
  this.apiService
  .ExecuteGet(this.apiService.baseUrl + ApiConstant.profileData)
  .pipe(takeUntil(this.unsubscribe))
  .subscribe(
    (response: any) => {
      if (this.searchWord.length) {
        this.details = response.data.slice(0,this.itemCount).filter((v:any)=>{ return v.employee_name.includes(this.searchWord)})      
      } else {
        this.details = response.data.slice(0,this.itemCount)
        console.log(this.details); 
      }
    },
    (error) => {
      console.log('error', error);
    }
  );
 }
 
 onClick(data:any) {
  this.details.map((x)=>{
    if (x.id == data) {
      console.log('name : ',x.employee_name);
    }
  })
 }

 searchByName() {
  this.getProfileData()
 }

 next() {
  this.itemCount = this.itemCount + 5; 
  this.getProfileData()
 }

 back() {
  this.itemCount = this.itemCount - 5; 
  this.getProfileData()
 }

 changeProfileName () {
  this.general.updateUserName(this.userName)
 }

 ngOnDestroy(): void {
  this.unsubscribe.next();
  this.unsubscribe.complete();
}
}
