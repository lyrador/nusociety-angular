import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit
{

  home: MenuItem[];
  homeLogout: MenuItem[];
  items: MenuItem[];

  
  constructor(private router: Router,
              public sessionService: SessionService)
  {
    this.items = new Array();
    this.homeLogout = new Array();
    this.home = new Array();
  }

  ngOnInit(): void {
    this.home = [
      {
        label: 'Personal',
        icon: 'pi pi-home',
        items: [{label: 'Home', icon: 'pi pi-home', routerLink: "/index"},
      ]
    }
  ];
    this.homeLogout = [
        {
        label: 'Personal',
        icon: 'pi pi-home',
        items: [{label: 'Home', icon: 'pi pi-home', routerLink: "/index"},
            {separator: true},
            {label: 'Change Password', icon: "pi pi-id-card", routerLink: "/changePassword"},
            {separator: true},
            {label: 'Logout', icon: 'pi pi-users', command: () => this.staffLogout()},
        ]
      }
    ];
    this.items = [
        {
          label: 'Staff',
          icon: 'pi pi-user-edit',
          items: [{label: 'Create New Staff', icon: 'pi pi-user-plus', routerLink: "/createNewStaff"},
              {separator: true},
              {label: 'View All Staffs', icon: 'pi pi-users', routerLink: "/viewAllStaffsPf"},
          ]
        },
      {
        label: 'Society',
        icon: 'pi pi-users',
        items: [{label: 'Create New Society', icon: 'pi pi-user-plus', routerLink: "/createNewSociety"},
            {separator: true},
            {label: 'Manage Your Societies', icon: 'pi pi-user-edit', routerLink: "/societyManagement"},
            {separator: true},
            {label: 'View All Societies', icon: 'pi pi-users', routerLink: "/viewAllSocieties"},
            {separator: true},
            {label: 'Create New Society Category', icon: 'pi pi-plus', routerLink: "/createNewSocietyCategory"},
            {separator: true},
            {label: 'Manage Society Categories', icon: 'pi pi-book', routerLink: "/societyCategoryManagement"},
            {separator: true},
            {label: 'Create New Event Category', icon: 'pi pi-plus', routerLink: "/createNewEventCategory"},
            {separator: true},
            {label: 'Manage Event Categories', icon: 'pi pi-tags', routerLink: "/viewAllEventCategories"},
            {separator: true},
            {label: 'Manage Posts', icon: 'pi pi-pencil', routerLink: "/postManagement"},
            {separator: true},
            {label: 'Manage Comments', icon: 'pi pi-comment', routerLink: "/commentManagement"},
            {separator: true},
            {label: 'View Feedback Surveys', icon: 'pi pi-inbox', routerLink: "/viewFeedbackSurveys"},
            {separator: true},
        ]
      },
      {
        label: 'Student',
        icon: 'pi pi-user',
        items: [{label: 'Create New Student', icon: 'pi pi-user-plus', routerLink: "/createNewStudent"},
            {separator: true},
            {label: 'View All Students', icon: 'pi pi-users', routerLink: "/viewAllStudents"}
        ]
      }
      
  ];
  }



  staffLogout(): void
	{
		this.sessionService.setIsLogin(false);
		this.sessionService.setCurrentStaff(null);
		
		this.router.navigate(["/index"]);
	}
}
