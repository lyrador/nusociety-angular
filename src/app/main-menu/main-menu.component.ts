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
        label: 'NUSociety',
        icon: 'pi pi-home',
        items: [{label: 'Home', icon: 'pi pi-home', routerLink: "/index"},
      ]
    }
  ];
    this.homeLogout = [
        {
        label: 'NUSociety',
        icon: 'pi pi-home',
        items: [{label: 'Home', icon: 'pi pi-home', routerLink: "/index"},
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
            {label: 'Manage Societies', icon: 'pi pi-users', routerLink: "/societyManagement"},
            {separator: true},
            {label: 'Manage Posts', icon: 'pi pi-pencil', routerLink: "/commentManagement"},
            {separator: true},
            {label: 'Manage Comments', icon: 'pi pi-send', routerLink: "/postManagement"},
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
