import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocietyCategoriesComponent } from './view-society-categories.component';

describe('ViewSocietyCategoriesComponent', () => {
  let component: ViewSocietyCategoriesComponent;
  let fixture: ComponentFixture<ViewSocietyCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSocietyCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSocietyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
