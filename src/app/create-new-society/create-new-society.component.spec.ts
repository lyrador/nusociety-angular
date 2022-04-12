import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewSocietyComponent } from './create-new-society.component';

describe('CreateNewSocietyComponent', () => {
  let component: CreateNewSocietyComponent;
  let fixture: ComponentFixture<CreateNewSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
