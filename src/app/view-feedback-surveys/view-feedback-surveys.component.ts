import { Component, OnInit } from '@angular/core';

import { Society } from '../models/society';
import { FeedbackSurvey } from '../models/feedback-survey';
import { SessionService } from '../services/session.service';
import { FeedbackSurveyService } from '../services/feedback-survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-feedback-surveys',
  templateUrl: './view-feedback-surveys.component.html',
  styleUrls: ['./view-feedback-surveys.component.css']
})
export class ViewFeedbackSurveysComponent implements OnInit {

  feedbackSurveys: FeedbackSurvey[];

  constructor(private router: Router,
    private feedbackSurveyService: FeedbackSurveyService,
              private sessionService: SessionService,) { 
    this.feedbackSurveys = new Array();
  }

  ngOnInit(): void {
    this.checkAccessRight();
    let staffId = this.sessionService.getCurrentStaff().staffId;

    this.feedbackSurveyService.retrieveFeedbackSurveyForStaff(staffId).subscribe({
      next:(response)=>{
        this.feedbackSurveys = response;
      },
      error:(error)=>{
        console.log('********** FeedbackSurveysComponent.ts: ' + error);
      }
    })
  }

  checkAccessRight()
  {
    if(!this.sessionService.checkAccessRight(this.router.url))
    {
      this.router.navigate(["/accessRightError"]);
    }
  }

}
