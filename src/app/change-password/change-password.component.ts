import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Staff } from '../models/staff';
import { StaffService } from '../services/staff.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  staff: Staff;
  currentPassword: string | undefined;
  
  OldPassword: string | undefined;
  NewPassword1: string | undefined;
  NewPassword2: string | undefined;
  message: string | undefined;
  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;

  constructor(private router: Router, 
              private staffService: StaffService,
              private sessionService: SessionService) { 
    this.staff = new Staff();
	  this.submitted = false;
	  this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit(): void {
    this.checkAccessRight();
    this.staff = this.sessionService.getCurrentStaff();
    this.currentPassword = this.sessionService.getPassword();
  }

  clear()
  {
    this.submitted = false;
    this.staff = new Staff();
  }

  updateStaff() {
    if (this.OldPassword === this.currentPassword && this.NewPassword1 === this.NewPassword2) {
      this.staff.password = this.NewPassword1;
      this.staffService.updateStaff(this.staff).subscribe({
        next:(response)=>{
          this.resultSuccess = true;
          this.resultError = false;
          this.sessionService.setPassword(this.NewPassword1)
          this.message = "Password updated successfully";
        },
        error:(error)=>{
          this.resultSuccess = false;
          this.resultError = true;
          this.message = "An error has occurred while changing the password: " + error;
        }
      });		
    } else if (this.OldPassword != this.currentPassword) {
      this.resultSuccess = false;
      this.resultError = true;
      console.log(this.OldPassword)
      console.log(this.currentPassword)
      this.message = "Old password does not match"
    } else {
      this.resultSuccess = false;
      this.resultError = true;
      this.message = "New passwords do not match"
    }
    
  }

  checkAccessRight()
  {
    if(!this.sessionService.checkAccessRight(this.router.url))
    {
      this.router.navigate(["/accessRightError"]);
    }
  }

}
