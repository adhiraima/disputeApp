import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerHeight: number;

  constructor() { 
    console.log("the inner heght of window  footer>> " + window.innerHeight);
    this.footerHeight = (window.innerHeight * 5) / 100;
  }

  ngOnInit() {
    console.log("footer loaded!!");
  }

}
