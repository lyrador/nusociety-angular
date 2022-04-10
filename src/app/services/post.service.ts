import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {ImageModule} from 'primeng/image';

import { Post } from '../models/post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string = "/api/Post";

  constructor(private httpClient: HttpClient) {
  }

  retrieveAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl + "/retrieveAllPosts").pipe
      (
        catchError(this.handleError)
      );
  }

  retrievePost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.baseUrl + "/retrievePost/" + id).pipe
      (
        catchError(this.handleError)
      );
  }

  updatePost(post: Post): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, post, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }


  deletePost(id: number): Observable<any> {
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

