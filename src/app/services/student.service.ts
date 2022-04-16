import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Student } from '../models/student';
import { Society } from '../models/society';
import { CreateStudentReq } from '../models/create-student-req';
import { MakeStudentLeaderReq } from '../models/make-student-leader-req';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

	baseUrl: string = "/api/Student";

  constructor(private httpClient: HttpClient) {
   }

   getStudents(): Observable<Student[]>
	{				
		return this.httpClient.get<Student[]>(this.baseUrl + "/retrieveAllStudents").pipe
		(
		catchError(this.handleError)
		);
	}

	getSocietiesLedByStudent(studentId: number | undefined): Observable<Society[]> {
		return this.httpClient.get<Society[]>(this.baseUrl + "/retrieveSocietiesLedByStudent/" + studentId).pipe
		(
		catchError(this.handleError)
		);
	}

	getSocietiesWhereStudentIsMemberOnly(studentId: number | undefined): Observable<Society[]> {
		return this.httpClient.get<Society[]>(this.baseUrl + "/retrieveSocietiesWhereStudentIsMemberOnly/" + studentId).pipe
		(
		catchError(this.handleError)
		);
	}
		
	createNewStudent(newStudent: Student): Observable<number>
	{		
		return this.httpClient.put<number>(this.baseUrl, newStudent, httpOptions).pipe
		(
		catchError(this.handleError)
		);
	}

	deleteStudent(studentId: number | undefined): Observable<any> {
		return this.httpClient.delete<any>(this.baseUrl + "/" + studentId).pipe
		(
		  catchError(this.handleError)
		);
	  }

	 makeStudentLeaderOfSociety(selectedStudent: Student, selectedSocietyId: number): Observable<any> {
		let societyIdString: string  = String(selectedSocietyId) || '';
		let makeStudentLeaderReq: MakeStudentLeaderReq = new MakeStudentLeaderReq(selectedStudent, societyIdString);	
		return this.httpClient.post<number>(this.baseUrl, makeStudentLeaderReq, httpOptions).pipe
		(
		catchError(this.handleError)
		);
	}

	unlinkStudentLeaderFromSociety(selectedStudent: Student, selectedSocietyId: number): Observable<any> {
		let societyIdString: string  = String(selectedSocietyId) || '';
		console.log('DEBUG');
		console.log(selectedStudent);
		console.log(societyIdString);
		let makeStudentLeaderReq: MakeStudentLeaderReq = new MakeStudentLeaderReq(selectedStudent, societyIdString);	
		return this.httpClient.post<number>(this.baseUrl + "/unlink", makeStudentLeaderReq, httpOptions).pipe
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
