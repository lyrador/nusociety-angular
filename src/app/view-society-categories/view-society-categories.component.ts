import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SocietyCategory } from '../models/society-category';
import { SessionService } from '../services/session.service';
import { SocietyCategoryService } from '../services/society-category.service';

@Component({
  selector: 'app-view-society-categories',
  templateUrl: './view-society-categories.component.html',
  styleUrls: ['./view-society-categories.component.css']
})
export class ViewSocietyCategoriesComponent implements OnInit {

  societyCategories: SocietyCategory[];
  displayUpdate: boolean;
  displayCreate: boolean;
  displayDelete: boolean;
  categoryToView: SocietyCategory;
  newCategory: SocietyCategory;

  resultSuccess: boolean;
	resultError: boolean;
	message: string | undefined;

  constructor(private router: Router, private societyCategoryService: SocietyCategoryService, private sessionService: SessionService) {
    this.societyCategories = new Array();
    this.displayUpdate = false;
    this.displayCreate = false;
    this.displayDelete = false;
    this.categoryToView = new SocietyCategory();
    this.newCategory = new SocietyCategory();
    this.resultSuccess = false;
    this.resultError = false;
   }

  ngOnInit(): void {
    this.checkAccessRight();
    this.societyCategoryService.getSocietyCategories().subscribe({
      next:(response)=>{
        this.societyCategories = response;
      },
      error:(error)=>{
        console.log('********** ViewAllSocietyCategories.ts: ' + error);
      }
    })
  }

  showDialogUpdate(categoryToView: SocietyCategory){
    this.displayUpdate = true;
    this.categoryToView = categoryToView;
    console.log('Selected!')
  }

  showDialogCreate(){
    this.displayCreate = true;
    console.log('Selected!')
  }

  showDialogDelete(categoryToView: SocietyCategory){
    this.displayDelete = true;
    this.categoryToView = categoryToView;
    console.log('Selected!')
  }

  // create(createSocietyCategoryForm: NgForm) {
  //   if (createSocietyCategoryForm.valid) {
  //     this.societyCategoryService.createNewSocietyCategory(this.newCategory).subscribe({
  //       next:(response)=>{
  //         this.resultSuccess = true;
  //         this.resultError = false;
  //         this.message = "Society category created successfully!";

  //         this.newCategory = new SocietyCategory();
  //         this.societyCategories.push(this.newCategory)
  //         createSocietyCategoryForm.resetForm();
  //         createSocietyCategoryForm.reset();
  //       },
  //       error:(error)=>{
  //         this.resultError = true;
  //         this.resultSuccess = false;
  //         this.message = "An error has occurred while creating the society category: " + error;
  //       }
  //     });        
  //   }
  // }

  delete() {
    if(this.categoryToView != null){
      this.societyCategoryService.deleteSocietyCategory(this.categoryToView.societyCategoryId).subscribe({
        next:(response)=>{
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Society category deleted successfully!";
          this.ngOnInit();
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while deleting the society category: " + error;
        }
      });      
    }
  }

  update(updateSocietyCategoryForm: NgForm){		
    
    if (updateSocietyCategoryForm.valid) {
      this.societyCategoryService.updateSocietyCategory(this.categoryToView).subscribe({
        next:(response)=>{
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Society category updated successfully!";
          this.ngOnInit();
        },
        error:(error)=>{
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating the society category: " + error;
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
