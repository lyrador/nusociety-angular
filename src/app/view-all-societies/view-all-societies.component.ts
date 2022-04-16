import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Society } from '../models/society';
import { SessionService } from '../services/session.service';
import { SocietyService } from '../services/society.service';

@Component({
  selector: 'app-view-all-societies',
  templateUrl: './view-all-societies.component.html',
  styleUrls: ['./view-all-societies.component.css']
})
export class ViewAllSocietiesComponent implements OnInit {

  societies: Society[];

  constructor(private router: Router, private sessionService: SessionService, private societyService: SocietyService) { 
    this.societies = new Array();
  }

  ngOnInit(): void {
    this.checkAccessRight();
    this.societyService.getAllSocieties().subscribe({
      next:(response)=>{
        this.societies = response;
      },
      error:(error)=>{
        console.log('********** ViewAllSocieties.ts: ' + error);
      }
    })
  }

  checkAccessRight()
  {
    if(!this.sessionService.checkAccessRight(this.router.url))
    {
      this.router.navigate(["/accessRightError"]);
    }
  }

}
