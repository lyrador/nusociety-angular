import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSocietyCategoryComponent } from './create-new-society-category.component';

describe('CreateNewSocietyCategoryComponent', () => {
  let component: CreateNewSocietyCategoryComponent;
  let fixture: ComponentFixture<CreateNewSocietyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSocietyCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSocietyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
