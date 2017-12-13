import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarHeight: number;
  constructor() { 
    console.log("the inner heght of window side bar >> " + window.innerHeight);
    this.sidebarHeight = (window.innerHeight * 75) / 100;
  }

  ngOnInit() {
    console.log("SideBar loaded!!");
  }

}
