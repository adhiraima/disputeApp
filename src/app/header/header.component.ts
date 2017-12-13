import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerHeight: number;
  
  constructor() { 
    console.log("the inner heght of window  header >> " + window.innerHeight);
    this.headerHeight = (window.innerHeight * 5) / 100;
  }

  ngOnInit() {
    console.log("Header loaded!!");
  }

}
