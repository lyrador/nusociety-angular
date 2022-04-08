import { Component, OnInit } from '@angular/core';

import { Staff } from '../models/staff';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-create-new-staff',
  templateUrl: './create-new-staff.component.html',
  styleUrls: ['./create-new-staff.component.css']
})
export class CreateNewStaffComponent implements OnInit {

  staff : Staff;
  message: string | undefined;

  constructor(private staffService: StaffService) {
    this.staff = new Staff();
   }

  ngOnInit(): void {
  }

  createStaff()
	{		
		this.staffService.createNewStaff(this.staff).subscribe({
			next:(response)=>{
				let newStaffId: number = response;				
				this.message = "New staff " + newStaffId + " created successfully";
			},
			error:(error)=>{
				this.message = "An error has occurred while creating the new staff: " + error;
				
				console.log('********** CreateNewStaffComponent.ts: ' + error);
			}
		});
	}

}
