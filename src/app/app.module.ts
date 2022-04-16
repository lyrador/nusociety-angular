import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from "primeng/fileupload";
import { MenuModule } from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewAllStaffsComponent } from './view-all-staffs/view-all-staffs.component';
import { CreateNewStaffComponent } from './create-new-staff/create-new-staff.component';
import { ViewAllStaffsPfComponent } from './view-all-staffs-pf/view-all-staffs-pf.component';
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
import { ViewAllEventCategoriesComponent } from './view-all-event-categories/view-all-event-categories.component';
import { CreateNewEventCategoryComponent } from './create-new-event-category/create-new-event-category.component';
import { ViewStudentSocietiesComponent } from './view-student-societies/view-student-societies.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    MainMenuComponent,
    SidebarComponent,
    HeaderComponent,
    ViewAllStaffsComponent,
    CreateNewStaffComponent,
    ViewAllStaffsPfComponent,
    ViewAllStudentsComponent,
    CreateNewStudentComponent,
    ViewSocietyCategoriesComponent,
    PostManagementComponent,
    CommentManagementComponent,
    SocietyManagementComponent,
    ViewFeedbackSurveysComponent,
    CreateNewSocietyComponent,
    ChangePasswordComponent,
    CreateNewSocietyCategoryComponent,
    ViewAllSocietiesComponent,
    ViewAllEventCategoriesComponent,
    CreateNewEventCategoryComponent,
    ViewStudentSocietiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PanelModule,
    TableModule,
    ButtonModule,
    DialogModule,
    RatingModule,
    BrowserAnimationsModule,
    CheckboxModule,
    DropdownModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    InputTextModule,
    FileUploadModule,
    MenuModule,
    PanelMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
