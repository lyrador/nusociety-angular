import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ViewAllStaffsComponent } from './view-all-staffs/view-all-staffs.component';
import { ViewAllStaffsPfComponent } from './view-all-staffs-pf/view-all-staffs-pf.component';
import { CreateNewStaffComponent } from './create-new-staff/create-new-staff.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
	{ path: 'viewAllStaffs', component: ViewAllStaffsComponent },
  { path: 'viewAllStaffsPf', component: ViewAllStaffsPfComponent },
	{ path: 'createNewStaff', component: CreateNewStaffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
