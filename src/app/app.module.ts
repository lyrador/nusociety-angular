import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ViewAllStaffsComponent } from './view-all-staffs/view-all-staffs.component';
import { CreateNewStaffComponent } from './create-new-staff/create-new-staff.component';
import { ViewAllStaffsPfComponent } from './view-all-staffs-pf/view-all-staffs-pf.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ViewAllStaffsComponent,
    CreateNewStaffComponent,
    ViewAllStaffsPfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
