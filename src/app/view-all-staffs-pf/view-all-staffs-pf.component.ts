import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Staff } from '../models/staff';
import { SessionService } from '../services/session.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-view-all-staffs-pf',
  templateUrl: './view-all-staffs-pf.component.html',
  styleUrls: ['./view-all-staffs-pf.component.css']
})
export class ViewAllStaffsPfComponent implements OnInit {

  staffs: Staff[];

  constructor(private router: Router, private sessionService: SessionService, private staffService: StaffService) {
    this.staffs = new Array();
   }

  ngOnInit(): void {
    this.checkAccessRight();
    this.staffService.getStaffs().subscribe({
		  next:(response)=>{
			this.staffs = response;
		  },
		  error:(error)=>{
			console.log('********** ViewAllStaffsComponent.ts: ' + error);
		  }
		});			
  }

  checkAccessRight()
  {
    if(!this.sessionService.checkAccessRight(this.router.url))
    {
      this.router.navigate(["/accessRightError"]);
    }
  }

}
