import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../models/student';
import { SessionService } from '../services/session.service';
import { Society } from '../models/society';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-view-all-students',
  templateUrl: './view-all-students.component.html',
  styleUrls: ['./view-all-students.component.css']
})
export class ViewAllStudentsComponent implements OnInit {

  students: Student[];
  studentToView: Student;
  displayDelete: boolean;
  displayViewSocieties: boolean;
  societiesLedByStudent: Society[];
  societiesStudentIsIn: Society[];
  societiesCombined: Society[];
  leaderOrMemberStringArray: string[];
  selectedNewSocietyToLead: number;

  defaultPosition: string

  resultSuccess: boolean;
  resultError: boolean;
  message: string | undefined;

  constructor(private studentService: StudentService, private sessionService: SessionService, private router: Router) {
    this.students = new Array();
    this.studentToView = new Student();
    this.displayDelete = false;
    this.displayViewSocieties = false;
    this.resultSuccess = false;
    this.resultError = false;
    this.societiesLedByStudent = new Array();
    this.societiesStudentIsIn = new Array();
    this.leaderOrMemberStringArray = new Array();
    this.societiesCombined = new Array();
    this.defaultPosition = "MEMBER";
    this.selectedNewSocietyToLead = 0;
   }

  ngOnInit(): void {
    this.checkAccessRight();
    this.studentService.getStudents().subscribe({
		  next:(response)=>{
			this.students = response;
      console.log(this.students[0]);
		  },
		  error:(error)=>{
			console.log('********** ViewAllStudentsComponent.ts: ' + error);
		  }
		});			
  }

  showDialogDelete(student: Student){
    this.displayDelete = true;
    this.studentToView = student;
    console.log('Selected!')
  }

  delete() {
    if(this.studentToView != null){
      this.studentService.deleteStudent(this.studentToView.studentId).subscribe({
        next:(response)=>{
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Student deleted successfully!";
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while deleting the student: " + error;
        }
      });      
    }
  }
  checkAccessRight()
  {
    if(!this.sessionService.checkAccessRight(this.router.url))
    {
      this.router.navigate(["/accessRightError"]);
    }
  }

  fetch(student: Student) {
    this.showDialogViewSocieties(student);
  }

  initialiseStudentSocieties(student: Student) {
    this.leaderOrMemberStringArray.splice(0);
    this.societiesCombined.splice(0);
    
    this.studentService.getSocietiesLedByStudent(student.studentId).subscribe({
		  next:(response)=>{
			this.societiesLedByStudent = response;

      for (let j=0; j < this.societiesLedByStudent.length; j++){
        this.societiesCombined.push(this.societiesLedByStudent[j]);
        this.leaderOrMemberStringArray.push("LEADER");
      }

      console.log(this.societiesLedByStudent[0]);
		  },
		  error:(error)=>{
			console.log('********** ViewAllStudentsComponent.ts: ' + error);
		  }
		});

    this.studentService.getSocietiesWhereStudentIsMemberOnly(student.studentId).subscribe({
		  next:(response)=>{
			this.societiesStudentIsIn = response;

      for (let i=0; i < this.societiesStudentIsIn.length; i++){
        this.societiesCombined.push(this.societiesStudentIsIn[i]);
        this.leaderOrMemberStringArray.push("MEMBER");
      }

      console.log(this.societiesStudentIsIn[0]);
		  },
		  error:(error)=>{
			console.log('********** ViewAllStudentsComponent.ts: ' + error);
		  }
		});			
    
 }
  showDialogViewSocieties(student: Student){
    this.displayViewSocieties = true;

    this.initialiseStudentSocieties(student);

    // console.log(this.societiesStudentIsIn.length);
    // console.log(this.societiesLedByStudent.length);

    // for (let i=0; i < this.societiesStudentIsIn.length; i++){
    //   console.log('HELLO OUTER')
    //   this.defaultPosition = "MEMBER";
    //   for (let j=0; j < this.societiesLedByStudent.length; j++){
    //     if (this.societiesStudentIsIn[i].societyId = this.societiesLedByStudent[j].societyId) {
    //       console.log('HELLO INNER')
    //       this.defaultPosition = "LEADER"
    //       break;
    //     }
    //   }
    //   this.leaderOrMemberStringArray.push(this.defaultPosition);
    // }

    this.studentToView = student;
    // console.log(this.leaderOrMemberStringArray);
  }

  clearData() {
    this.leaderOrMemberStringArray.splice(0);
    this.societiesCombined.splice(0);
    console.log('Hello');
  }

  makeStudentLeaderOfSociety(student: Student) {
    console.log(this.selectedNewSocietyToLead);
    if(this.studentToView != null){
          this.studentService.makeStudentLeaderOfSociety(this.studentToView, this.selectedNewSocietyToLead).subscribe({
             next:(response)=>{
             this.resultSuccess = true;
             this.resultError = false;
             this.message = "Student made leader successfully!";
             window.location.reload();
          },
          error:(error)=>{
            this.resultError = true;
            this.resultSuccess = false;
            this.message = "An error has occurred while making student the leader: " + error;
            }
          });      
    }

    // this.displayViewSocieties = false;
    this.showDialogViewSocieties(student);
  }

  unlinkStudentLeaderFromSociety(society: Society) {
    if(this.studentToView != null){
      let societyId: number  = Number(society.societyId);
          this.studentService.unlinkStudentLeaderFromSociety(this.studentToView, societyId).subscribe({
             next:(response)=>{
             this.resultSuccess = true;
             this.resultError = false;
             this.message = "Student made leader successfully!";
          },
          error:(error)=>{
            this.resultError = true;
            this.resultSuccess = false;
            this.message = "An error has occurred while making student the leader: " + error;
            }
          });      
    }
    this.initialiseStudentSocieties;
  }
}
