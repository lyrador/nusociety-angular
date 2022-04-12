import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedbackSurveysComponent } from './view-feedback-surveys.component';

describe('ViewFeedbackSurveysComponent', () => {
  let component: ViewFeedbackSurveysComponent;
  let fixture: ComponentFixture<ViewFeedbackSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFeedbackSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeedbackSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
