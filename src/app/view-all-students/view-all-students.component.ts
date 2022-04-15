import { Component, OnInit } from '@angular/core';

import { Student } from '../models/student';
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

  resultSuccess: boolean;
  resultError: boolean;
  message: string | undefined;

  constructor(private studentService: StudentService) {
    this.students = new Array();
    this.studentToView = new Student();
    this.displayDelete = false;
    this.resultSuccess = false;
    this.resultError = false;
   }

  ngOnInit(): void {
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

}
