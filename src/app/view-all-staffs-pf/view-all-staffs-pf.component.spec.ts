import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllStaffsPfComponent } from './view-all-staffs-pf.component';

describe('ViewAllStaffsPfComponent', () => {
  let component: ViewAllStaffsPfComponent;
  let fixture: ComponentFixture<ViewAllStaffsPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllStaffsPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllStaffsPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
