import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
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
import { CreateNewSocietyCategoryComponent } from './create-new-society-category/create-new-society-category.component';
import { ViewAllSocietiesComponent } from './view-all-societies/view-all-societies.component';
import { AccessRightErrorComponent } from './access-right-error/access-right-error.component';
import { CreateNewEventCategoryComponent } from './create-new-event-category/create-new-event-category.component';
import { ViewAllEventCategoriesComponent } from './view-all-event-categories/view-all-event-categories.component';
import { ViewStudentSocietiesComponent } from './view-student-societies/view-student-societies.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
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
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'createNewSocietyCategory', component: CreateNewSocietyCategoryComponent},
  { path: 'viewAllSocieties', component: ViewAllSocietiesComponent},
  { path: 'createNewEventCategory', component: CreateNewEventCategoryComponent},
  { path: 'viewAllEventCategories', component: ViewAllEventCategoriesComponent},
  { path: 'accessRightError', component: AccessRightErrorComponent},
  { path: 'viewStudentSocieties', component: ViewStudentSocietiesComponent },
  { path: 'viewStudentSocieties/:studentId', component: ViewStudentSocietiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
