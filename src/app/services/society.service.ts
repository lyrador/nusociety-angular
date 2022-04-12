import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Society } from '../models/society';
import { CreateSocietyReq } from '../models/create-society-req';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  baseUrl: string = "/api/Society";

  constructor(private httpClient: HttpClient) { }

  getSocietiesForStaff(staffId: number | undefined): Observable<Society[]> {
    return this.httpClient.get<Society[]>(this.baseUrl + "/retrieveAllSocietiesForStaff/" + staffId).pipe
    (
    catchError(this.handleError)
    );
  }

  getSocietyBySocietyId(societyId: number): Observable<Society> {
      return this.httpClient.get<Society>(this.baseUrl + "/retrieveSociety/" + societyId).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewSociety(newSociety: Society, categoryIds: number[], staffIds: number[]): Observable<number> {		
      let createSocietyReq: CreateSocietyReq = new CreateSocietyReq(newSociety, categoryIds, staffIds);
      
      return this.httpClient.put<number>(this.baseUrl, createSocietyReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  deleteSociety(societyId: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + "/" + societyId).pipe
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
