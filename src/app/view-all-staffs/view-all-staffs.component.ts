import { Component, OnInit } from '@angular/core';

import { Staff } from '../models/staff';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-view-all-staffs',
  templateUrl: './view-all-staffs.component.html',
  styleUrls: ['./view-all-staffs.component.css']
})
export class ViewAllStaffsComponent implements OnInit {

  staffs: Staff[] | null;

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
