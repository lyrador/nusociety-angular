import { Injectable } from '@angular/core';
import { EventCategory } from '../models/event-category';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventCategoryService {

  baseUrl: string = "/api/EventCategory";

  constructor(private httpClient: HttpClient) { 

  }

  getEventCategories(): Observable<EventCategory[]>
  {				
    return this.httpClient.get<EventCategory[]>(this.baseUrl + "/retrieveAllEventCategories").pipe
    (
    catchError(this.handleError)
    );
  }

  getEventCategory(id: number): Observable<EventCategory> {
    return this.httpClient.get<EventCategory>(this.baseUrl + "/retrieveEventCategory/" + id).pipe
      (
        catchError(this.handleError)
      );
  }

  updateEventCategory(eventCategory: EventCategory): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, eventCategory, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }


  deleteEventCategory(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + "?id=" + id).pipe
      (
        catchError(this.handleError)
      );
  }
  
  createNewEventCategory(newEventCategory: EventCategory): Observable<number>
  {		
    return this.httpClient.put<number>(this.baseUrl, newEventCategory, httpOptions).pipe
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
