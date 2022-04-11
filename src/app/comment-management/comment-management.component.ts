import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';


import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';
@Component({
  selector: 'app-comment-management',
  templateUrl: './comment-management.component.html',
  styleUrls: ['./comment-management.component.css']
})
export class CommentManagementComponent implements OnInit {

  comments: Comment[];
  updateId: string | undefined;
  deleteId: number | undefined;
  retrieveId: string | undefined;

  //trueOrFalse: Boolean[]  

  infoMessage: string | null;
  errorMessage: string | null;



  constructor(private commentService: CommentService, private primengConfig: PrimeNGConfig) {
    this.comments = new Array();
    this.infoMessage = '';
    this.errorMessage = '';
    this.updateId = '';
    this.retrieveId = '';

    
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.commentService.retrieveAllComments().subscribe({
      next: (response) => {
        this.comments = response;
      },
      error: (error) => {
        console.log('********** CommentManagement.ts: ' + error);
      }
    });
  }

  updateComment(c : Comment)
	{
    this.commentService.updateComment(c).subscribe({
      next:(response)=>{
        this.infoMessage = "Comment ID:" + c.commentId + " updated successfully";
				this.errorMessage = null;
        window.location.reload();
      },
      error:(error)=>{
        this.infoMessage = null;
				this.errorMessage = error;
      }
    });		
	}

  deleteComment(c : Comment)
	{
    this.deleteId = c.commentId;
    if(this.deleteId != null)
    {
      this.commentService.deleteComment(this.deleteId).subscribe({
        next:(response)=>{
          this.infoMessage = "Comment ID:" + c.commentId + " deleted successfully";
          this.errorMessage = null;
          window.location.reload();
        },
        error:(error)=>{
          this.infoMessage = null;
          this.errorMessage = error;
        }
      });

    }
	}

}
