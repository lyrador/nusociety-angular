import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { PrimeNGConfig } from 'primeng/api';


import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  posts: Post[];
  updateId: string | undefined;
  deleteId: number | undefined;
  retrieveId: string | undefined;

  trueOrFalse: Boolean = false;  

  infoMessage: string | null;
  errorMessage: string | null;



  constructor(private postService: PostService, private primengConfig: PrimeNGConfig) {
    this.posts = new Array();
    this.infoMessage = '';
    this.errorMessage = '';
    this.updateId = '';
    this.retrieveId = '';

    
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.postService.retrieveAllPosts().subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (error) => {
        console.log('********** PostManagement.ts: ' + error);
      }
    });
  }


  updatePost(p : Post)
	{
    this.postService.updatePost(p).subscribe({
      next:(response)=>{
        this.infoMessage = "Post ID:" + p.postId + " updated successfully";
				this.errorMessage = null;
        window.location.reload();
      },
      error:(error)=>{
        this.infoMessage = null;
				this.errorMessage = error;
      }
    });		
	}

  deletePost(p : Post)
	{
    this.deleteId = p.postId;
    if(this.deleteId != null)
    {
      this.postService.deletePost(this.deleteId).subscribe({
        next:(response)=>{
          this.infoMessage = "Post ID:" + p.postId + " deleted successfully";
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