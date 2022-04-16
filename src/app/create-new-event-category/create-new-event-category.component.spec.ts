import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewEventCategoryComponent } from './create-new-event-category.component';

describe('CreateNewEventCategoryComponent', () => {
  let component: CreateNewEventCategoryComponent;
  let fixture: ComponentFixture<CreateNewEventCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewEventCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewEventCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
