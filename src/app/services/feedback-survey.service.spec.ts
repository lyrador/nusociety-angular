import { TestBed } from '@angular/core/testing';

import { FeedbackSurveyService } from './feedback-survey.service';

describe('FeedbackSurveyService', () => {
  let service: FeedbackSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
