import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyManagementComponent } from './society-management.component';

describe('SocietyManagementComponent', () => {
  let component: SocietyManagementComponent;
  let fixture: ComponentFixture<SocietyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
