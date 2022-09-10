import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpaccessComponent } from './httpaccess.component';

describe('HttpaccessComponent', () => {
  let component: HttpaccessComponent;
  let fixture: ComponentFixture<HttpaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
