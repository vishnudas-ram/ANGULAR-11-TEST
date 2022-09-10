import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidAngComponent } from './formvalid-ang.component';

describe('FormvalidAngComponent', () => {
  let component: FormvalidAngComponent;
  let fixture: ComponentFixture<FormvalidAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvalidAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvalidAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
