import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentSocietiesComponent } from './view-student-societies.component';

describe('ViewStudentSocietiesComponent', () => {
  let component: ViewStudentSocietiesComponent;
  let fixture: ComponentFixture<ViewStudentSocietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStudentSocietiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentSocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
