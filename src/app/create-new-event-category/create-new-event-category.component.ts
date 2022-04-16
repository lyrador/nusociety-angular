import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { EventCategory } from '../models/event-category';
import { EventCategoryService } from '../services/event-category.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-create-new-event-category',
  templateUrl: './create-new-event-category.component.html',
  styleUrls: ['./create-new-event-category.component.css']
})
export class CreateNewEventCategoryComponent implements OnInit {

  eventCategory: EventCategory; 
  message: string | undefined;
  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;

  constructor(private router: Router, private sessionService: SessionService, private eventCategoryService : EventCategoryService) { 
    this.eventCategory = new EventCategory(); 
    this.submitted = false;
	  this.resultSuccess = false;
    this.resultError = false;
  }

  clear() {
    this.submitted = false;
    this.eventCategory = new EventCategory(); 
  }

  ngOnInit(): void {
    this.checkAccessRight();
  }

  createNewEventCategory(createCategoryForm: NgForm) {

    this.submitted = true; 

    if (createCategoryForm.valid)
    {
    this.eventCategoryService.createNewEventCategory(this.eventCategory).subscribe({
			next:(response)=>{
				let newEventCategoryId: number = response;
        this.resultSuccess = true;
        this.resultError = false;				
				this.message = "New event category " + newEventCategoryId + " created successfully";

        this.eventCategory = new EventCategory(); 
        createCategoryForm.resetForm(); 
        createCategoryForm.reset(); 
			},
			error:(error)=>{
        this.resultError = true;
        this.resultSuccess = false;
				this.message = "An error has occurred while creating the new event category: " + error;
				
				console.log('********** CreateNewEventCategoryComponent.ts: ' + error);
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
