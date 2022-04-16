import { Student } from '../models/student';
import { Society } from '../models/society';


export class MakeStudentLeaderReq {
  student: Student | undefined;
  societyIdString: string | undefined;

  constructor(student?: Student, societyIdString?: string) {		
    this.student = student;
    this.societyIdString = societyIdString;
  }
}