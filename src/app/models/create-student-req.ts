import { Student } from '../models/student';



export class CreateStudentReq {
  student: Student | undefined;
  accessRightString: string | undefined;

  constructor(student?: Student, accessRightString?: string) {		
    this.student = student;
    this.accessRightString = accessRightString;
  }
}