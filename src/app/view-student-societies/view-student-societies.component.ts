import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../models/student';
import { Society } from '../models/society';
import { StudentService } from '../services/student.service';
import { SocietyService } from '../services/society.service';

@Component({
  selector: 'app-view-student-societies',
  templateUrl: './view-student-societies.component.html',
  styleUrls: ['./view-student-societies.component.css']
})
export class ViewStudentSocietiesComponent implements OnInit {

  studentId: string | null;
  displayViewSocieties: boolean;
  societiesLedByStudent: Society[];
  societiesStudentIsIn: Society[];
  societiesCombined: Society[];
  leaderOrMemberStringArray: string[];
  selectedNewSocietyToLead: number;
  students: Student[];
  studentToView: Student;
  selectedNewSocietyToAdd: number;
  availableSocieties: Society[];
  selectedSocietyToRemove: number;

  defaultPosition: string

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService, 
    private societyServce: SocietyService) { 

    this.studentId = null;
    this.displayViewSocieties = false;
    this.societiesLedByStudent = new Array();
    this.societiesStudentIsIn = new Array();
    this.leaderOrMemberStringArray = new Array();
    this.societiesCombined = new Array();
    this.defaultPosition = "MEMBER";
    this.selectedNewSocietyToLead = 0;
    this.students = new Array();
    this.studentToView = new Student();
    this.selectedNewSocietyToAdd = 0;
    this.availableSocieties = new Array();
    this.selectedSocietyToRemove = 0;
  }

  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.paramMap.get('studentId');
    

    if(this.studentId != null)
    {
      console.log('HELLO');

      this.displayViewSocieties = false;
      this.societiesLedByStudent = new Array();
      this.societiesStudentIsIn = new Array();
      this.leaderOrMemberStringArray = new Array();
      this.societiesCombined = new Array();
      this.defaultPosition = "MEMBER";
      this.selectedNewSocietyToLead = 0;
      this.students = new Array();
      this.selectedNewSocietyToAdd = 0;
      this.availableSocieties = new Array();
      this.selectedSocietyToRemove = 0;

      this.studentService.getStudents().subscribe({
        next:(response)=>{
        this.students = response;

        for (let i=0; i < this.students.length; i++){
          let studentIdString: string  = String(this.students[i].studentId) || '';
          if (studentIdString == this.studentId) {
              this.studentToView = this.students[i];
          }
        }

        },
        error:(error)=>{
        console.log('********** ViewAllStudentsComponent.ts: ' + error);
        }
      });

      console.log(this.students);

        
      this.studentService.getSocietiesLedByStudent(parseInt(this.studentId)).subscribe({
        next:(response)=>{
        this.societiesLedByStudent = response;

        for (let j=0; j < this.societiesLedByStudent.length; j++){
          this.societiesCombined.push(this.societiesLedByStudent[j]);
          this.leaderOrMemberStringArray.push("LEADER");
        }

        console.log(this.societiesLedByStudent);
        },
        error:(error)=>{
        console.log('********** ViewAllStudentsComponent.ts: ' + error);
        }
      });

      this.studentService.getSocietiesWhereStudentIsMemberOnly(parseInt(this.studentId)).subscribe({
        next:(response)=>{
        this.societiesStudentIsIn = response;
        
        for (let i=0; i < this.societiesStudentIsIn.length; i++){
          this.societiesCombined.push(this.societiesStudentIsIn[i]);
          this.leaderOrMemberStringArray.push("MEMBER");
        }
        console.log(this.societiesStudentIsIn);
        },
        error:(error)=>{
        console.log('********** ViewAllStudentsComponent.ts: ' + error);
        }
      });			

      this.studentService.getSocietiesWhereStudentIsNotIn(parseInt(this.studentId)).subscribe({
        next:(response)=>{
        this.availableSocieties = response;
        console.log(this.availableSocieties);
        },
        error:(error)=>{
        console.log('********** ViewAllStudentsComponent.ts: ' + error);
        }
      });			
    }
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

    console.log('WORLD');
    console.log(this.studentToView);
    
 }

  clearData() {
    this.leaderOrMemberStringArray.splice(0);
    this.societiesCombined.splice(0);
    console.log('Hello');
  }

  initialiseStudentToView() {
    for (let i=0; i < this.students.length; i++){
      let studentIdString: string  = String(this.students[i].studentId) || '';
      if (studentIdString == this.studentId) {
          this.studentToView = this.students[i];
      }
    }
  }

  makeStudentLeaderOfSociety(society: Society) {
    let societyId: number  = Number(society.societyId);

    this.initialiseStudentToView();

    for (let i=0; i < this.students.length; i++){
      let studentIdString: string  = String(this.students[i].studentId) || '';
      if (studentIdString == this.studentId) {
          this.studentToView = this.students[i];
      }
    }

    console.log("BYE");
    console.log(this.students);

    console.log(this.selectedNewSocietyToLead);
    if(this.studentToView != null){
          this.studentService.makeStudentLeaderOfSociety(this.studentToView, societyId).subscribe({
             next:(response)=>{
            //  this.resultSuccess = true;
            //  this.resultError = false;
            //  this.message = "Student made leader successfully!";
            this.ngOnInit();
            // window.location.reload();
          },
          error:(error)=>{
            // this.resultError = true;
            // this.resultSuccess = false;
            // this.message = "An error has occurred while making student the leader: " + error;
            }
          });      
    }

    // this.displayViewSocieties = false;
    // this.showDialogViewSocieties(student);
  }

  unlinkStudentLeaderFromSociety(society: Society) {

    this.initialiseStudentToView();
    
    if(this.studentToView != null){
      let societyId: number  = Number(society.societyId);
      console.log('PRINT');
      console.log(society);
      console.log(societyId);
          this.studentService.unlinkStudentLeaderFromSociety(this.studentToView, societyId).subscribe({
             next:(response)=>{
               this.ngOnInit();
              //  window.location.reload();
            //  this.resultSuccess = true;
            //  this.resultError = false;
            //  this.message = "Student made leader successfully!";
          },
          error:(error)=>{
            // this.resultError = true;
            // this.resultSuccess = false;
            // this.message = "An error has occurred while making student the leader: " + error;
            }
          });      
    }
  }

  addStudentToSociety(student: Student) {

    for (let i=0; i < this.students.length; i++){
      let studentIdString: string  = String(this.students[i].studentId) || '';
      if (studentIdString == this.studentId) {
          this.studentToView = this.students[i];
      }
    }

    // this.initialiseStudentToView();

    // console.log("BYE");
    // console.log(this.students);

    // console.log(this.selectedNewSocietyToLead);
    if(this.studentToView != null){
          this.studentService.addStudentToSociety(this.studentToView, this.selectedNewSocietyToAdd).subscribe({
             next:(response)=>{
            //  this.resultSuccess = true;
            //  this.resultError = false;
            //  this.message = "Student made leader successfully!";
            this.ngOnInit();
            // window.location.reload();
          },
          error:(error)=>{
            // this.resultError = true;
            // this.resultSuccess = false;
            // this.message = "An error has occurred while making student the leader: " + error;
            }
          });      
    }

    // this.displayViewSocieties = false;
    // this.showDialogViewSocieties(student);
  }

  removeStudentFromSociety(society: Society) {
    let societyId: number  = Number(society.societyId);

    for (let i=0; i < this.students.length; i++){
      let studentIdString: string  = String(this.students[i].studentId) || '';
      if (studentIdString == this.studentId) {
          this.studentToView = this.students[i];
      }
    }

    // this.initialiseStudentToView();

    // console.log("BYE");
    // console.log(this.students);

    // console.log(this.selectedNewSocietyToLead);
    if(this.studentToView != null){
          this.studentService.removeStudentFromSociety(this.studentToView, societyId).subscribe({
             next:(response)=>{
            //  this.resultSuccess = true;
            //  this.resultError = false;
            //  this.message = "Student made leader successfully!";
            this.ngOnInit();
            // window.location.reload();
          },
          error:(error)=>{
            // this.resultError = true;
            // this.resultSuccess = false;
            // this.message = "An error has occurred while making student the leader: " + error;
            }
          });      
    }

    // this.displayViewSocieties = false;
    // this.showDialogViewSocieties(student);
  }


}
