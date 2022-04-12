import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ImagePath: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.ImagePath = '/assets/images/Welcome.gif'
  }

}
