import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Comment } from '../models/comment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  baseUrl: string = "/api/Comment";

  constructor(private httpClient: HttpClient) {
  }

  retrieveAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.baseUrl + "/retrieveAllComments").pipe
      (
        catchError(this.handleError)
      );
  }

  retrieveComment(id: number): Observable<Comment> {
    return this.httpClient.get<Comment>(this.baseUrl + "/retrieveComment/" + id).pipe
      (
        catchError(this.handleError)
      );
  }

  updateComment(comment: Comment): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, comment, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }


  deleteComment(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + "?id=" + id).pipe
      (
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(() => new Error(errorMessage));
  }

}


