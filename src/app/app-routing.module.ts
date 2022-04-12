import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ViewAllStaffsComponent } from './view-all-staffs/view-all-staffs.component';
import { ViewAllStaffsPfComponent } from './view-all-staffs-pf/view-all-staffs-pf.component';
import { CreateNewStaffComponent } from './create-new-staff/create-new-staff.component';
import { ViewAllStudentsComponent } from './view-all-students/view-all-students.component';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
	{ path: 'viewAllStaffs', component: ViewAllStaffsComponent },
  { path: 'viewAllStaffsPf', component: ViewAllStaffsPfComponent },
	{ path: 'createNewStaff', component: CreateNewStaffComponent },
  { path: 'viewAllStudents', component: ViewAllStudentsComponent },
	{ path: 'createNewStudent', component: CreateNewStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
