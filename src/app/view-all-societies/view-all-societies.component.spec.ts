import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSocietiesComponent } from './view-all-societies.component';

describe('ViewAllSocietiesComponent', () => {
  let component: ViewAllSocietiesComponent;
  let fixture: ComponentFixture<ViewAllSocietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllSocietiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllSocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
