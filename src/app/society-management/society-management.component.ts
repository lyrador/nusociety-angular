import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Society } from '../models/society';
import { SocietyCategory } from '../models/society-category';
import { Staff } from '../models/staff';
import { SessionService } from '../services/session.service';
import { SocietyCategoryService } from '../services/society-category.service';
import { SocietyService } from '../services/society.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-society-management',
  templateUrl: './society-management.component.html',
  styleUrls: ['./society-management.component.css']
})
export class SocietyManagementComponent implements OnInit {

  societies: Society[];

  newSociety: Society;
  societyCategories: SocietyCategory[];
  societyCategoryIds: number[];
  staffs: Staff[];
  staffIds: number[];

  societyToView: Society;

  displayCreate: boolean;
  displayDelete: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string | undefined;



  constructor(private router: Router,
          private societyService: SocietyService,
              private sessionService: SessionService,
              private societyCategoryService: SocietyCategoryService,
              private staffService: StaffService) { 
    this.newSociety = new Society();
    this.societyCategoryIds = new Array();
    this.societyCategories = new Array();
    this.societyToView = new Society();
    this.staffIds = new Array();
    this.staffs = new Array();
    this.societies = new Array();

    this.displayCreate = false;
    this.displayDelete = false;
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit(): void {
    this.checkAccessRight();
    let staffId = this.sessionService.getCurrentStaff().staffId

    this.societyService.getSocietiesForStaff(staffId).subscribe({
      next:(response)=>{
        this.societies = response;
      },
      error:(error)=>{
        console.log('********** ViewAllSocieties.ts: ' + error);
      }
    })

    this.societyCategoryService.getSocietyCategories().subscribe({
      next:(response)=>{
        this.societyCategories = response;
      },
      error:(error)=>{
        console.log('********** CreateNewSociety.ts: ' + error);
      }
    })

    this.staffService.getStaffs().subscribe({
      next:(response)=>{
        this.staffs = response;
      },
      error:(error)=>{
        console.log('********** CreateNewSociety.ts: ' + error);
      }
    })
  }

  showDialogCreate(){
    this.displayCreate = true;
    console.log('Selected!')
  }

  showDialogDelete(societyToView: Society){
    this.displayDelete = true;
    this.societyToView = societyToView;
    console.log('Selected!')
  }

  // create(createSocietyForm: NgForm) {
  //   if (createSocietyForm.valid) {
  //     this.newSociety.dateCreated = new Date();

  //     this.societyService.createNewSociety(this.newSociety, this.societyCategoryIds, this.staffIds).subscribe({
  //       next:(response)=>{
  //         this.resultSuccess = true;
  //         this.resultError = false;
  //         this.message = "Society created successfully!";

  //         this.newSociety = new Society();
  //         this.societies.push(this.newSociety)
  //         createSocietyForm.resetForm();
  //         createSocietyForm.reset();
  //       },
  //       error:(error)=>{
  //         this.resultError = true;
  //         this.resultSuccess = false;
  //         console.log('society cats ' + this.societyCategoryIds.length)
  //         console.log(this.staffIds[0])
  //         this.message = "An error has occurred while creating the society: " + error;
  //       }
  //     });        
  //   }
  // }

  delete() {
    if(this.societyToView != null){
      this.societyService.deleteSociety(this.societyToView.societyId).subscribe({
        next:(response)=>{
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Society deleted successfully!";
          this.ngOnInit();
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while deleting the society: " + error;
        }
      });      
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
