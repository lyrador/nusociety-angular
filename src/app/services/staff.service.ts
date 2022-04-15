import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Staff } from '../models/staff';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StaffService {

	baseUrl: string = "/api/Staff";

  constructor(private httpClient: HttpClient) {
   }

   getStaffs(): Observable<Staff[]>
	{				
		return this.httpClient.get<Staff[]>(this.baseUrl + "/retrieveAllStaffs").pipe
		(
		catchError(this.handleError)
		);
	}
		
	createNewStaff(newStaff: Staff): Observable<number>
	{		
		return this.httpClient.put<number>(this.baseUrl, newStaff, httpOptions).pipe
		(
		catchError(this.handleError)
		);
	}

	updateStaff(staff: Staff): Observable<any> {
		return this.httpClient.post<any>(this.baseUrl, staff, httpOptions).pipe
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
	
	staffLogin(username: string | undefined, password: string | undefined): Observable<Staff>
	{
		return this.httpClient.get<Staff>(this.baseUrl + "/staffLogin?username=" + username + "&password=" + password).pipe
		(
			catchError(this.handleError)
		);
	}

}
