import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatefmComponent } from './templatefm.component';

describe('TemplatefmComponent', () => {
  let component: TemplatefmComponent;
  let fixture: ComponentFixture<TemplatefmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatefmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatefmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
