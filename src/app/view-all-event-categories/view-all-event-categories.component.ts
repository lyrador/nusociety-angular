import { Component, OnInit } from '@angular/core';
import { EventCategory } from '../models/event-category';
import { EventCategoryService } from '../services/event-category.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-view-all-event-categories',
  templateUrl: './view-all-event-categories.component.html',
  styleUrls: ['./view-all-event-categories.component.css']
})
export class ViewAllEventCategoriesComponent implements OnInit {

  eventCategories: EventCategory[]; 
  updateId: string | undefined;
  deleteId: number | undefined;
  retrieveId: string | undefined;

  infoMessage: string | null;
  errorMessage: string | null;

  constructor(private eventCategoryService : EventCategoryService, private primengConfig: PrimeNGConfig) { 
    this.eventCategories = new Array(); 
    this.infoMessage = '';
    this.errorMessage = '';
    this.updateId = '';
    this.retrieveId = '';
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.eventCategoryService.getEventCategories().subscribe({
		  next:(response)=>{
			this.eventCategories = response;
		  },
		  error:(error)=>{
			console.log('********** ViewAllEventCategoriesComponent.ts: ' + error);
		  }
		});	
  }

  updateEventCategory(e : EventCategory)
	{
    this.eventCategoryService.updateEventCategory(e).subscribe({
      next:(response)=>{
        this.infoMessage = "Event Category ID:" + e.eventCategoryId + " updated successfully";
				this.errorMessage = null;
        this.ngOnInit();
      },
      error:(error)=>{
        this.infoMessage = null;
				this.errorMessage = error;
      }
    });		
	}

  deleteEventCategory(e : EventCategory)
	{
    this.deleteId = e.eventCategoryId;
    if(this.deleteId != null)
    {
      this.eventCategoryService.deleteEventCategory(this.deleteId).subscribe({
        next:(response)=>{
          this.infoMessage = "Event Category ID:" + e.eventCategoryId + " deleted successfully";
          this.errorMessage = null;
          this.ngOnInit();
        },
        error:(error)=>{
          this.infoMessage = null;
          this.errorMessage = error;
        }
      });
    }
	}

}
