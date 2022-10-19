import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiConstant } from 'src/app/shared/apiConstant';
import { ApiService } from 'src/app/services/api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  dataForm!: FormGroup;
  updateForm!:FormGroup
  private unsubscribe = new Subject<void>();
  id=5;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService

  ) { 
    this.dataForm = this.formBuilder.group({
      name: [ '',[ Validators.required]],
      salary: ['',[ Validators.required]],
      age: ['',[ Validators.required]],
    });

    this.updateForm = this.formBuilder.group({
      name: [ '',[ Validators.required]],
      salary: ['',[ Validators.required]],
      age: ['',[ Validators.required]],
      id: ['',[ Validators.required]],
      profile: ['',[ Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getData()
  }

  getData () {
    this.apiService
    .ExecuteGet(`${this.apiService.baseUrl + ApiConstant.getSelectedEmployee}/${this.id}`)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (response: any) => {
        console.log('response',response);
        this.setData(response?.data)
      },
      (error) => {
        console.log('error', error);
      }
    )
  }
  
  postData(data:any) {
    console.log('data',data);
    this.apiService
    .ExecutePost(this.apiService.baseUrl + ApiConstant.postData,data)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (response: any) => {
        console.log('response',response);
      },
      (error) => {
        console.log('error', error);
      }
    )
  }
  
  setData (data:any) {
    this.updateForm.patchValue({
      name: data.employee_name,
      salary: data.employee_salary,
      age: data.employee_age,
      id: data.id,
      profile: data.profile_image
    })
  }
  updateData(data:any) {
    this.apiService
    .ExecutePut(
      `${this.apiService.baseUrl + ApiConstant.updateDetails}/${this.id}`,
      data
    )
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (response: any) => {
       console.log('update status',response);
       
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
 
  deleteData () {
    this.apiService
    .ExecuteDelete(
      `${this.apiService.baseUrl + ApiConstant.deleteDetails}/${this.id}`
    )
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      (response: any) => {
       console.log('delete status',response);
       
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
