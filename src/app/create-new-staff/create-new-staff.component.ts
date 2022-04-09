import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;

  constructor(private staffService: StaffService) {
    this.staff = new Staff();
	this.submitted = false;
	this.resultSuccess = false;
    this.resultError = false;
   }

  ngOnInit(): void {
  }

  clear()
  {
    this.submitted = false;
    this.staff = new Staff();
  }

  createStaff(createStaffForm: NgForm)
    {		
        this.submitted = true;
        
        if (createStaffForm.valid) 
        {
            this.staffService.createNewStaff(this.staff).subscribe({
                next:(response)=>{
                    let staffId: number = response;
                    this.resultSuccess = true;
                    this.resultError = false;
                    this.message = "New staff " + staffId + " created successfully";
                    
                    this.staff = new Staff();
                    createStaffForm.resetForm();
                    createStaffForm.reset();
                },
                error:(error)=>{
                    this.resultError = true;
                    this.resultSuccess = false;
                    this.message = "An error has occurred while creating the new product: " + error;
                    
                    console.log('********** CreateNewStaffComponent.ts: ' + error);
                }
            });			
        }
    }
}
