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

  constructor(private studentService: StudentService) {
    this.students = new Array();
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

}
