import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SocietyCategory } from '../models/society-category';
import { SessionService } from '../services/session.service';
import { SocietyCategoryService } from '../services/society-category.service';

@Component({
  selector: 'app-create-new-society-category',
  templateUrl: './create-new-society-category.component.html',
  styleUrls: ['./create-new-society-category.component.css']
})
export class CreateNewSocietyCategoryComponent implements OnInit {

  displayCreate: boolean;
  newCategory: SocietyCategory;

  resultSuccess: boolean;
	resultError: boolean;
  message: string | undefined;

  constructor(private router: Router, private sessionService: SessionService, private societyCategoryService: SocietyCategoryService) { 
    this.displayCreate = false;
    this.resultSuccess = false;
    this.resultError = false;
    this.newCategory = new SocietyCategory();
  }

  ngOnInit(): void {
    this.checkAccessRight();
  }

  create(createSocietyCategoryForm: NgForm) {
    if (createSocietyCategoryForm.valid) {
      this.societyCategoryService.createNewSocietyCategory(this.newCategory).subscribe({
        next:(response)=>{
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Society category created successfully!";

          this.newCategory = new SocietyCategory();
          createSocietyCategoryForm.resetForm();
          createSocietyCategoryForm.reset();
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the society category: " + error;
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
