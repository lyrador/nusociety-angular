import { Component, OnInit } from '@angular/core';

import { Staff } from '../models/staff';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-view-all-staffs-pf',
  templateUrl: './view-all-staffs-pf.component.html',
  styleUrls: ['./view-all-staffs-pf.component.css']
})
export class ViewAllStaffsPfComponent implements OnInit {

  staffs: Staff[];

  constructor(private staffService: StaffService) {
    this.staffs = new Array();
   }

  ngOnInit(): void {
    this.staffService.getStaffs().subscribe({
		  next:(response)=>{
			this.staffs = response;
		  },
		  error:(error)=>{
			console.log('********** ViewAllStaffsComponent.ts: ' + error);
		  }
		});			
  }

}
