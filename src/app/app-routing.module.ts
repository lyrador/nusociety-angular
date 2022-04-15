import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ViewAllStaffsComponent } from './view-all-staffs/view-all-staffs.component';
import { ViewAllStaffsPfComponent } from './view-all-staffs-pf/view-all-staffs-pf.component';
import { CreateNewStaffComponent } from './create-new-staff/create-new-staff.component';
import { ViewAllStudentsComponent } from './view-all-students/view-all-students.component';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ViewSocietyCategoriesComponent } from './view-society-categories/view-society-categories.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { CommentManagementComponent } from './comment-management/comment-management.component';
import { SocietyManagementComponent } from './society-management/society-management.component';
import { ViewFeedbackSurveysComponent } from './view-feedback-surveys/view-feedback-surveys.component';
import { CreateNewSocietyComponent } from './create-new-society/create-new-society.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
	{ path: 'viewAllStaffs', component: ViewAllStaffsComponent },
  { path: 'viewAllStaffsPf', component: ViewAllStaffsPfComponent },
	{ path: 'createNewStaff', component: CreateNewStaffComponent },
  { path: 'viewAllStudents', component: ViewAllStudentsComponent },
	{ path: 'createNewStudent', component: CreateNewStudentComponent },
  { path: 'societyCategoryManagement', component: ViewSocietyCategoriesComponent },
  { path: 'postManagement', component: PostManagementComponent },
  { path: 'commentManagement', component: CommentManagementComponent },
  { path: 'societyManagement', component: SocietyManagementComponent },
  { path: 'viewFeedbackSurveys', component: ViewFeedbackSurveysComponent },
  { path: 'createNewSociety', component: CreateNewSocietyComponent},
  { path: 'changePassword', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
