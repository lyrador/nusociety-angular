import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { FeedbackSurvey } from '../models/feedback-survey';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FeedbackSurveyService {

  baseUrl: string = "/api/FeedbackSurvey";

  constructor(private httpClient: HttpClient) { }

  retrieveFeedbackSurveyForStaff(staffId: number | undefined): Observable<FeedbackSurvey[]> {
    return this.httpClient.get<FeedbackSurvey[]>(this.baseUrl + "/retrieveFeedbackSurveysForStaff/" + staffId).pipe
    (
    catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = "";
	
		if (error.error instanceof ErrorEvent) 
		{		
		errorMessage = "An unknown error has occurred: " + error.error;
		} 
		else 
		{		
		errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
		}
		
		console.error(errorMessage);
		
		return throwError(() => new Error(errorMessage));
	}
}
