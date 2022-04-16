import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEventCategoriesComponent } from './view-all-event-categories.component';

describe('ViewAllEventCategoriesComponent', () => {
  let component: ViewAllEventCategoriesComponent;
  let fixture: ComponentFixture<ViewAllEventCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEventCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllEventCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
