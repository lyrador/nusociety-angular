import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SocietyCategory } from '../models/society-category';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SocietyCategoryService {

  baseUrl: string = "/api/SocietyCategory";

  constructor(private httpClient: HttpClient) { }

  createNewSocietyCategory(newSocietyCategory: SocietyCategory): Observable<number> {			
	return this.httpClient.put<number>(this.baseUrl, newSocietyCategory, httpOptions).pipe
	(
	  catchError(this.handleError)
	);
  }

  getSocietyCategories(): Observable<SocietyCategory[]> {
    return this.httpClient.get<SocietyCategory[]>(this.baseUrl + "/retrieveAllSocietyCategories").pipe
		(
		catchError(this.handleError)
		);
  }

  deleteSocietyCategory(categoryId: number | undefined): Observable<any> {
      return this.httpClient.delete<any>(this.baseUrl + "/" + categoryId).pipe
      (
        catchError(this.handleError)
      );
    }

  updateSocietyCategory(categoryToUpdate: SocietyCategory): Observable<any> {
		return this.httpClient.post<any>(this.baseUrl, categoryToUpdate, httpOptions).pipe
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
