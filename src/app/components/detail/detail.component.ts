import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConstant } from 'src/app/shared/apiConstant';
import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit,OnDestroy {
  private unsubscribe = new Subject<void>();
  individualDetail:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private apiService: ApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) => {
      console.log('parameter data',params);
      this.getProfileData(params.id)
    })
    setTimeout(() => {
      console.log('hello');
    }, 10000);
  }
  getProfileData(data:string) {
    this.apiService
    .ExecuteGet(`${this.apiService.baseUrl + ApiConstant.getSelectedEmployee}/${data}`)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (response: any) => {
       console.log('response',response);
       this.individualDetail = response?.data
      },
      (error) => {
        console.log('error', error);
      }
    );
   }
   back () {
    window.history.back()
   }

   ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
