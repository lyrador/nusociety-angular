import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Society } from '../models/society';
import { SocietyCategory } from '../models/society-category';
import { Staff } from '../models/staff';
import { SessionService } from '../services/session.service';
import { SocietyCategoryService } from '../services/society-category.service';
import { SocietyService } from '../services/society.service';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-create-new-society',
  templateUrl: './create-new-society.component.html',
  styleUrls: ['./create-new-society.component.css']
})
export class CreateNewSocietyComponent implements OnInit {

  newSociety: Society;
  societyCategories: SocietyCategory[];
  societyCategoryIds: number[];
  staffs: Staff[];
  staffIds: number[];

  societyToView: Society;

  resultSuccess: boolean;
  resultError: boolean;
  message: string | undefined;

  constructor(private societyService: SocietyService,
              private sessionService: SessionService,
              private societyCategoryService: SocietyCategoryService,
              private staffService: StaffService) { 
    this.newSociety = new Society();
    this.societyCategoryIds = new Array();
    this.societyCategories = new Array();
    this.societyToView = new Society();
    this.staffIds = new Array();
    this.staffs = new Array();
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit(): void {
    let staffId = this.sessionService.getCurrentStaff().staffId

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

  create(createSocietyForm: NgForm) {
    if (createSocietyForm.valid) {
      this.newSociety.dateCreated = new Date();
      this.newSociety.profilePicture = "empty_society.png";

      this.societyService.createNewSociety(this.newSociety, this.societyCategoryIds, this.staffIds).subscribe({
        next:(response)=>{
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Society created successfully!";

          this.newSociety = new Society();
          createSocietyForm.resetForm();
          createSocietyForm.reset();
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          console.log('society cats ' + this.societyCategoryIds.length)
          console.log(this.staffIds[0])
          this.message = "An error has occurred while creating the society: " + error;
        }
      });        
    }
  }

}
