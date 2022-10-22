import { Component, OnInit } from '@angular/core';
import { ApiConstant } from 'src/app/shared/apiConstant';
import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject, Observable, observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';
import { promise } from 'protractor';
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
  isLoading:boolean=true
  constructor(
    private apiService: ApiService,
    private general:GeneralService,
    private router:Router
  ) { 

  const prom = new Promise(()=> {
    setTimeout(()=>{
      console.log('this is my promise');
    },10000)
    console.log('promise');
   })
   prom.then(res=> console.log(res))

 ///////////////////////////////////////////

  const obs = new Observable(()=> {
    setTimeout(()=>{
      console.log('this is observable');
    },10000)
    console.log('observable');
   })
   obs.subscribe(res=>console.log(res))
   obs.pipe(map((value:any)=>{value.trim()})).subscribe(res=>console.log(res))

  }

  ngOnInit(): void {
    this.getProfileData()
  }
 getProfileData() {
  this.isLoading = true
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
      this.isLoading = false
    },
    (error) => {
      console.log('error', error);
      this.isLoading = false
    }
  );
 }
 
 onClick(data:any) {
  this.details.map((x)=>{
    if ( data && x.id == data) {
      console.log('name : ',x.employee_name);
      this.router.navigateByUrl(`/detail/${data}`);
    }
    else {
      return
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

 sortList () {
  
 }


 ngOnDestroy(): void {
  this.unsubscribe.next();
  this.unsubscribe.complete();
}
}
