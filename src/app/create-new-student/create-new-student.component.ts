import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessRightEnum } from '../models/access-right-enum';
import {InputTextModule} from 'primeng/inputtext';

import { Student } from '../models/student';
import { SessionService } from '../services/session.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-new-student',
  templateUrl: './create-new-student.component.html',
  styleUrls: ['./create-new-student.component.css']
})
export class CreateNewStudentComponent implements OnInit {

  student: Student;
  message: string | undefined;
  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  accessRightEnumListString: string[];
  accessRightSelectedString: string;

  constructor(private router: Router, private sessionService: SessionService, private studentService: StudentService) {
    this.student = new Student();
    this.submitted = false;
    this.resultSuccess = false;
    this.resultError = false;
    this.accessRightEnumListString = new Array();
    this.accessRightSelectedString = "";
  }

  ngOnInit(): void {
    this.checkAccessRight();
    this.accessRightEnumListString.push("LEADER");
    this.accessRightEnumListString.push("MEMBER");
  }

  clear() {
    this.submitted = false;
    this.student = new Student();
  }

  createStudent(createStudentForm: NgForm) {
    this.submitted = true;

    if (createStudentForm.valid) {
      this.studentService.createNewStudent(this.student).subscribe({
        next: (response) => {
          let studentId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New student " + studentId + " created successfully";

          this.student = new Student();
          createStudentForm.resetForm();
          createStudentForm.reset();
        },
        error: (error) => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new student: " + error;

          console.log('********** CreateNewStudentComponent.ts: ' + error);
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

}
